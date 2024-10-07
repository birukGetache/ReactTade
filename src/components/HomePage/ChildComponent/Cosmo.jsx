import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input, DatePicker, Select, Table, InputNumber, Tabs   } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const { Option } = Select;
const { TabPane } = Tabs;

const Cosmo = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchText, setSearchText] = useState('');
  const user = useSelector((state) => state.user);
  const [saleVisible, setSaleVisible] = useState(false);
  const [soldQuantity, setSoldQuantity] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const[dataTransaction , setDataTransaction] = useState([]);
  const [transactionSearchText, setTransactionSearchText] = useState('');
const [filteredTransactionData, setFilteredTransactionData] = useState(dataTransaction);
const [analysisData, setAnalysisData] = useState([]); // State for analysis data
  useEffect(() => {
    fetchItems(); // Fetch items on component mount
    fetchTransaction();
    
  }, []);

  const fetchTransaction  = async () =>{
    try {
      const response = await axios.get('https://backtade-2.onrender.com/salesTransaction'); // Adjust the endpoint as 
      console.log("now reported")
      console.log(response.data)
      setDataTransaction(response.data);
      setFilteredTransactionData(response.data);
      calculateAnalysisData(response.data);
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  }

  
  const handleSale = async () => {
    if (soldQuantity > selectedItem.quantity) {
      Modal.error({
        title: 'Error',
        content: 'Sold quantity exceeds available quantity!',
      });
      return;
    }
    console.log(selectedItem.quantity)
  
    const updatedItem = { ...selectedItem, quantity: selectedItem.quantity - soldQuantity };
  
    try {
      await axios.put(`https://backtade-2.onrender.com/Cosmo/${selectedItem._id}`, updatedItem);
      // Add logic to log the sale in your database 
      await axios.post('https://backtade-2.onrender.com/salesTransaction', {
        itemId: selectedItem._id,
        name:selectedItem.name,
        price:selectedItem.price,
        quantity: soldQuantity,
        pharamacist: user.username, // Assuming you have user info
      });
      fetchItems(); // Refresh the item list
      fetchdata(); // Refresh sales data
      setSaleVisible(false);
      setSoldQuantity(0);
      Modal.success({ content: 'Item sold successfully!' });
    } catch (error) { 
      console.error('Error processing sale:', error);
    }
  };

  
  const fetchItems = async () => {
    try {
      const response = await axios.get('https://backtade-2.onrender.com/Cosmo');
      setData(response.data);
      setFilteredData(response.data); // Initialize filtered data
      
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleOpen = () => {
    setVisible(true);
    setEditMode(false);
    setCurrentItem(null);
  };

  const handleEdit = (item) => {
    setVisible(true);
    setEditMode(true);
    setCurrentItem(item);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSubmit = async (values) => {
    const { name, type, expireDate, price, quantity } = values;
    const tax = price * 0.15;
    const totalPrice = price + tax;

    const newItem = {
      name,
      type,
      expireDate: expireDate.format('YYYY-MM-DD'), // Format the date
      price,
      tax,
      totalPrice,
      quantity,
    };

    try {
      if (editMode && currentItem) {
        await axios.put(`https://backtade-2.onrender.com/Cosmo/${currentItem._id}`, newItem);
      } else {
        await axios.post('https://backtade-2.onrender.com/Cosmo', newItem);
      }
      fetchItems(); // Refresh the item list
      handleClose();

    } catch (error) {
      console.error(editMode ? 'Error updating item:' : 'Error adding item:', error);
    }
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this item?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        try {
          await axios.delete(`https://backtade-2.onrender.com/Cosmo/${key}`);
          fetchItems(); // Refresh the item list
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      },
    });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = data.filter(item => 
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.type.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Expire Date', dataIndex: 'expireDate', key: 'expireDate' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Tax (15%)', dataIndex: 'tax', key: 'tax' },
    { title: 'Total Price', dataIndex: 'totalPrice', key: 'totalPrice' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button onClick={() => handleEdit(record)} type="primary" style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record._id)}>Delete</Button>
        </>
      ),
    },
  ];
  const columnSale = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Expire Date', dataIndex: 'expireDate', key: 'expireDate' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Tax (15%)', dataIndex: 'tax', key: 'tax' },
    { title: 'Total Price', dataIndex: 'totalPrice', key: 'totalPrice' },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button type="primary" style={{ marginRight: 8 }} onClick={()=>{  {setSaleVisible(true)
                                                                              setSelectedItem(record);
          }}}>
            Sale
          </Button>
        </>
      ),
    },
  ];
  const ColumnsTransaction = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Pharamasict', dataIndex: 'pharamacist', key: 'pharamacist' },
    { title: 'Sold Time', dataIndex: 'createdAt', key: 'createdAt' },
  ];
  const handleTransactionSearch = (e) => {
    const value = e.target.value;
    setTransactionSearchText(value);

    if (!value) {
      // If search text is empty, show all transactions
      setFilteredTransactionData(dataTransaction);
      return;
    }

    const filtered = dataTransaction.filter(transaction => 
      transaction.name.toLowerCase().includes(value.toLowerCase()) ||
      transaction.pharamacist.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredTransactionData(filtered);
  };
 const handleReset = async () =>{
  Modal.confirm({
    title: 'Are you sure you want to delete this item?',
    content: 'This action cannot be undone.',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: async () => {
      try {
        await axios.delete(`https://backtade-2.onrender.com/CosmoTransactionDelte`);
        fetchItems(); // Refresh the item list
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    },
  });
 }

  const calculateAnalysisData = (transactions) => {
    const analysisMap = {};

    transactions.forEach(transaction => {
      const { pharamacist, quantity, price } = transaction;
      if (!analysisMap[pharamacist]) {
        analysisMap[pharamacist] = { totalQuantity: 0, totalPrice: 0 };
      }
      analysisMap[pharamacist].totalQuantity += quantity;
      analysisMap[pharamacist].totalPrice += price * quantity;
    });

    const analysisArray = Object.entries(analysisMap).map(([pharamacist, data]) => ({
      pharamacist,
      totalQuantity: data.totalQuantity,
      totalPrice: data.totalPrice,
    }));

    setAnalysisData(analysisArray);
  };

  const analysisColumns = [
    { title: 'Pharmacist', dataIndex: 'pharamacist', key: 'pharamacist' },
    { title: 'Total Sold Quantity', dataIndex: 'totalQuantity', key: 'totalQuantity' },
    { title: 'Total Sold Price', dataIndex: 'totalPrice', key: 'totalPrice' },
  ];


  return (
    <div style={{padding:"20px"}}>
      <Tabs defaultActiveKey="1">
        {user.role === "mainAdmin" && (
          <TabPane tab="Items" key="1">
            <Button type="primary" onClick={handleOpen}>
              Add Item
            </Button>
            <Input
              placeholder="Search by name or type"
              value={searchText}
              onChange={handleSearch}
              style={{ margin: '16px 0' }}
            />
            <Modal
              title={editMode ? "Edit Item" : "Add New Item"}
              visible={visible}
              onCancel={handleClose}
              footer={null}
            >
              <Form
                onFinish={handleSubmit}
                initialValues={editMode ? { ...currentItem, expireDate: moment(currentItem.expireDate) } : {}}
              >
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="type" label="Type" rules={[{ required: true }]}>
                  <Select placeholder="Select a type">
                    <Option value="loshin">Loshin</Option>
                    <Option value="fgh">FGH</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="quantity"
                  label="Quantity"
                  rules={[{ required: true, message: 'Please enter a valid quantity!', type: 'number', min: 1 }]}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <Form.Item name="expireDate" label="Expire Date" rules={[{ required: true }]}>
                  <DatePicker />
                </Form.Item>
                <Form.Item name="price" label="Price" rules={[{ required: true, type: 'number', min: 0 }]}>
                  <InputNumber min={0} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
            <Table dataSource={filteredData} columns={columns} pagination={false} />
          </TabPane>
        )}
        <TabPane tab="Sales" key="2">
          <h3>Sales Data</h3>
  <Table dataSource={data} columns={columnSale} pagination={false} />

  <Modal
    title={`Sell ${selectedItem?.name}`}
    visible={saleVisible}
    onCancel={() => setSaleVisible(false)}
    footer={null}
  >
    <Form onFinish={handleSale}>
      <Form.Item label="Quantity Sold" required>
        <InputNumber
          min={1}
          max={selectedItem?.quantity}
          value={soldQuantity}
          onChange={setSoldQuantity}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Confirm Sale
        </Button>
      </Form.Item>
    </Form>
  </Modal>
</TabPane>

        {user.role === "mainAdmin" && (
          <TabPane tab="Transactions" key="3">
    <Input
    placeholder="Search by name or pharmacist"
    value={transactionSearchText}
    onChange={handleTransactionSearch}
    style={{ margin: '16px 0' }}
  />
            <Table dataSource={filteredTransactionData} columns={ColumnsTransaction} pagination={false} />
          <div style={{margin:"10px"}}><Button onClick={handleReset}>Reset Transaction</Button></div>  
          </TabPane>
        )}
       {user.role === "mainAdmin" && (
          <TabPane tab="Analysis" key="4">
            <h3>Sales Analysis</h3>
            <Table dataSource={analysisData} columns={analysisColumns} pagination={false} />
            <BarChart width={600} height={300} data={analysisData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="pharamacist" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="totalQuantity" fill="#82ca9d" />
              <Bar dataKey="totalPrice" fill="#8884d8" />
            </BarChart>
          </TabPane>
        )}
      </Tabs>
    </div>
  );
};

export default Cosmo;
