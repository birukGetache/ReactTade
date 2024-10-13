import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import EllipsisMenu2 from './EllipsisMenu2'; // Adjust the import path as needed
import { FaPills, FaCalendarAlt } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import createEngine, { DiagramModel } from '@projectstorm/react-diagrams';
import { Input, Select, DatePicker, Space, Button } from 'antd';

const { Option } = Select;

const PaymentReport = () => {
  const settings = useSelector((state) => state.settings);
  const isDarkTheme = settings.displaySettings.theme === 'dark';
  const backgroundColor = isDarkTheme ? '#2c3e50' : '#edf1f5';
  const textColor = isDarkTheme ? '#ecf0f1' : '#2c3e50';
  const labelColor = isDarkTheme ? '#ecf0f1' : '#2c3e50';
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filters, setFilters] = useState({ Method: '', name: '', date: null });
  const engine = createEngine();
  const model = new DiagramModel();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backtade-2.onrender.com/api/transactions');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching transaction data:', error);
      }
    };

    fetchData();
  }, []);

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredData = sortedData.filter(item => {
    const nameMatch = filters.name ? item.medicineName.toLowerCase().includes(filters.name.toLowerCase()) : true;
    const MethodMatch = filters.Method ? item.Method === filters.Method : true;
    const dateMatch = filters.date ? new Date(item.date).toLocaleDateString() === new Date(filters.date).toLocaleDateString() : true;
    return nameMatch && MethodMatch && dateMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalDayAmount = currentItems.reduce((sum, item) => sum + (item.price * item.soldQuantity), 0);
  const totalDayQuantity = currentItems.reduce((sum, item) => sum + item.soldQuantity, 0);

  return (
    <div style={{ padding: '20px', height: "90vh", margin: '0 auto', backgroundColor }} className='overflow'>
      <h2 style={{ fontFamily: ' "DM Sans", sans-serif', textAlign: "center", color: textColor }}>Payment Report</h2>

      <Space style={{ marginBottom: '20px', display: "flex", gap: "20px", justifyContent: "center" }} className='split'>
        <div>
          <FaPills style={{ marginRight: '8px' }} />
          <Input
            placeholder="Search by Medicine Name"
            value={filters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            style={{ width: 200 }}
            className='input'
          />
        </div>
        <div>
          <FaCalendarAlt style={{ marginRight: '8px' }} />
          <DatePicker
            value={filters.date ? dayjs(filters.date) : null}
            onChange={(date) => handleFilterChange('date', date ? date.format('YYYY-MM-DD') : null)}
            style={{ width: 200 }}
            placeholder="Search by Date"
               className='input'
          />
        </div>
        <div>
          <FaDollarSign style={{ marginRight: '8px' }} />
          <Select
            placeholder="Select Payment Method"
            value={filters.Method}
            onChange={(value) => handleFilterChange('Method', value)}
            style={{ width: 200 }}
               className='input'
          >
            <Option value="">All</Option>
            <Option value="Credit Card">Credit Card</Option>
            <Option value="Cash">Cash</Option>
            <Option value="Debit Card">Debit Card</Option>
          </Select>
        </div>
      </Space>

      <EllipsisMenu2 data={filteredData} />

      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: ' "DM Sans", sans-serif', color: textColor }}>
        <thead>
          <tr>
            <th style={{ cursor: 'pointer', padding: '10px', borderBottom: '2px solid #ddd' }} onClick={() => handleSort('medicineName')}>
              Name {sortConfig.key === 'medicineName' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th style={{ cursor: 'pointer', padding: '10px', borderBottom: '2px solid #ddd' }} onClick={() => handleSort('date')}>
              Date {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
            <th style={{ cursor: 'pointer', padding: '10px', borderBottom: '2px solid #ddd' }} onClick={() => handleSort('price')}>
              Price
            </th>
            <th style={{ cursor: 'pointer', padding: '10px', borderBottom: '2px solid #ddd' }}>
              Sold Quantity
            </th>
            <th style={{ cursor: 'pointer', padding: '10px', borderBottom: '2px solid #ddd' }}>
              Total (Price x Sold Quantity)
            </th>
            <th style={{ cursor: 'pointer', padding: '10px', borderBottom: '2px solid #ddd' }} onClick={() => handleSort('Method')}>
              Method {sortConfig.key === 'Method' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(payment => (
            <tr key={payment._id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{payment.medicineName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{new Date(payment.date).toLocaleDateString()}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{payment.price.toFixed(2)} Birr</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{payment.soldQuantity}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{(payment.price * payment.soldQuantity).toFixed(2)} Birr</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'center' }}>{payment.Method}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '10px', textAlign: 'center', fontFamily: ' "DM Sans", sans-serif', color: textColor }}>
        <p>Total Sold Quantity for the day: {totalDayQuantity}</p>
        <p>Total Amount for the day: {totalDayAmount.toFixed(2)} Birr</p>

        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{ width: "60px", height: "60px", borderRadius: "50%", fontFamily: '"DM Sans"', padding: "5px" }}
        >
          Previous
        </Button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}</span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage)))}
          disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
          style={{ border: "none", width: "60px", height: "60px", borderRadius: "50%", padding: "5px" }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaymentReport;
