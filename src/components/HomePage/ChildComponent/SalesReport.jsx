import {Header , Body , TextWithDownload , P, S , Card , Short , Content , Logo , Span , Card2 ,Short2 , Card3 , Short3 , Short4 , Card4 , Body1 ,  HeaderBody , ContentBody , Pmain , Psmall} from './HomeDashboard';
import styled from 'styled-components';
import RevenueCalendar from './RevenueCalendar';
import EllipsisMenu from './EllipsisMenu';
import FilterControls from './FilterControl';
import { toggleClicked } from '../../../Reducer/dashboardSlice.js';
import { useDispatch,useSelector } from 'react-redux';
import {useEffect ,useState} from 'react'
import axios from 'axios';
const SvgWrapper = styled.svg`
  height: 40px;
  width: 40px;
  fill: #fed812;
`;
const HomeDashboard = () =>{
  const settings = useSelector((state) => state.settings);
  const isDarkTheme = settings.displaySettings.theme === 'dark';
  const backgroundColor = isDarkTheme ? '#2c3e50' : '#edf1f5';
  const textColor = isDarkTheme ? '#ecf0f1' : '#2c3e50';
  const borderColor = isDarkTheme ? '#555' : '#dedede';
  const selectBorderColor = isDarkTheme ? '#555' : '#ccc';
  const labelColor = isDarkTheme ? '#ecf0f1' : '#2c3e50';
  const [sales, setSales] = useState(0);
  const [s , setS] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://backtade-2.onrender.com/totalSell');
        // Assuming response.data is an array of objects with a 'totleSale' property
const salesData = response.data;

// Calculate total sales using reduce
const totalSales = salesData.reduce((acc, item) => acc + item.totleSale, 0);

// Get the count of items
const itemCount = salesData.length;

// Update state variables
setSales(totalSales);
setS(itemCount);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    const dispatch = useDispatch();
    const handleClickd = (value) => {
        dispatch(toggleClicked(value));
        console.log(clicked);
      };

 return(
    <div style={{backgroundColor  , height:'91vh', display:"grid"}}>
    <Header>
      <TextWithDownload>
        <div>
        <P style={{color:textColor}}>Reports</P>
        <S style={{color:textColor}}>Overall reports related to the pharmacy.</S>
        </div>
        </TextWithDownload>
        <div style={{display:"flex" , justifyContent:"center" , gap:"28px"  ,height:"60%"}}>
        <Card2>
           <Logo>
         <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M810.666667 277.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 213.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667V170.666667c0 23.466667-57.6 42.666667-128 42.666666zM810.666667 341.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 405.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 469.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 533.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 597.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 661.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 725.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 789.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M810.666667 853.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M682.666667 170.666667a128 42.666667 0 1 0 256 0 128 42.666667 0 1 0-256 0Z" fill="#FFC107"></path><path d="M810.666667 256c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 320c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 384c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 448c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 512c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 576c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 640c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 704c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 768c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM810.666667 832c-59.733333 0-108.8-12.8-123.733334-32-2.133333 4.266667-4.266667 6.4-4.266666 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32z" fill="#FFC107"></path><path d="M213.333333 405.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 341.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666zM213.333333 469.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 533.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 597.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 661.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 725.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 789.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M213.333333 853.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M85.333333 298.666667a128 42.666667 0 1 0 256 0 128 42.666667 0 1 0-256 0Z" fill="#FFC107"></path><path d="M213.333333 384c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 448c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 512c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 576c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 640c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 704c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 768c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32zM213.333333 832c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266666-10.666667-14.933333 19.2-64 32-123.733334 32z" fill="#FFC107"></path><path d="M512 597.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M512 533.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666zM512 661.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M512 725.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M512 789.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M512 853.333333c-70.4 0-128-19.2-128-42.666666v42.666666c0 23.466667 57.6 42.666667 128 42.666667s128-19.2 128-42.666667v-42.666666c0 23.466667-57.6 42.666667-128 42.666666z" fill="#FFA000"></path><path d="M384 490.666667a128 42.666667 0 1 0 256 0 128 42.666667 0 1 0-256 0Z" fill="#FFC107"></path><path d="M512 576c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM512 640c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM512 704c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM512 768c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32zM512 832c-59.733333 0-108.8-12.8-123.733333-32-2.133333 4.266667-4.266667 6.4-4.266667 10.666667 0 23.466667 57.6 42.666667 128 42.666666s128-19.2 128-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667-14.933333 19.2-64 32-123.733333 32z" fill="#FFC107"></path></g></svg>
           </Logo>
            <div>
            <Content>  {sales} Birr</Content>
            <Span >Total Sales Report</Span>
            </div>
            <Short2 onClick={()=>handleClickd(9)}>View Detailed Report<span style={{ paddingLeft:"5px"}}><svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M393.625,251.424L270.215,5.623C268.484,2.177,264.957,0,261.1,0H127.49c-3.538,0-6.823,1.834-8.681,4.845 s-2.021,6.768-0.435,9.931L239.488,256L118.375,497.224c-1.587,3.162-1.424,6.92,0.435,9.931S123.952,512,127.49,512H261.1 c3.857,0,7.384-2.177,9.115-5.622l123.41-245.801C395.07,257.697,395.07,254.303,393.625,251.424z M254.808,491.602H144.023 l115.992-231.024c1.445-2.88,1.445-6.275,0-9.154L144.023,20.398h110.785L373.097,256L254.808,491.602z"></path> </g> </g> <g> <g> <path d="M274.476,93.334l-3.241-6.456c-2.527-5.033-8.658-7.063-13.691-4.538c-5.034,2.527-7.066,8.657-4.539,13.691l3.241,6.456 c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.101-0.35,4.568-1.087C274.972,104.498,277.003,98.368,274.476,93.334z"></path> </g> </g> <g> <g> <path d="M353.848,251.423l-62.985-125.45c-2.527-5.034-8.658-7.064-13.691-4.538c-5.034,2.527-7.066,8.656-4.539,13.691 l62.985,125.45c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.1-0.35,4.568-1.087 C354.344,262.587,356.376,256.458,353.848,251.423z"></path> </g> </g> </g></svg><svg fill="#000000"  height="10px" width="10px"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M393.625,251.424L270.215,5.623C268.484,2.177,264.957,0,261.1,0H127.49c-3.538,0-6.823,1.834-8.681,4.845 s-2.021,6.768-0.435,9.931L239.488,256L118.375,497.224c-1.587,3.162-1.424,6.92,0.435,9.931S123.952,512,127.49,512H261.1 c3.857,0,7.384-2.177,9.115-5.622l123.41-245.801C395.07,257.697,395.07,254.303,393.625,251.424z M254.808,491.602H144.023 l115.992-231.024c1.445-2.88,1.445-6.275,0-9.154L144.023,20.398h110.785L373.097,256L254.808,491.602z"></path> </g> </g> <g> <g> <path d="M274.476,93.334l-3.241-6.456c-2.527-5.033-8.658-7.063-13.691-4.538c-5.034,2.527-7.066,8.657-4.539,13.691l3.241,6.456 c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.101-0.35,4.568-1.087C274.972,104.498,277.003,98.368,274.476,93.334z"></path> </g> </g> <g> <g> <path d="M353.848,251.423l-62.985-125.45c-2.527-5.034-8.658-7.064-13.691-4.538c-5.034,2.527-7.066,8.656-4.539,13.691 l62.985,125.45c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.1-0.35,4.568-1.087 C354.344,262.587,356.376,256.458,353.848,251.423z"></path> </g> </g> </g></svg></span></Short2>
           </Card2>
           <Card >
            <Logo>
            <svg fill=" #2cba88" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M97.28,269.454v38.533H76.268c-7.068,0-12.8,5.731-12.8,12.8c0,7.069,5.732,12.8,12.8,12.8H97.28v9.494 c0,7.069,5.732,12.8,12.8,12.8c7.068,0,12.8-5.731,12.8-12.8v-10.46c24.818-3.843,41.244-18.936,41.244-39.329v-8.174 c0-20.393-16.426-35.488-41.244-39.331v-38.533h21.012c7.068,0,12.8-5.731,12.8-12.8c0-7.069-5.732-12.8-12.8-12.8H122.88v-9.494 c0-7.069-5.732-12.8-12.8-12.8c-7.068,0-12.8,5.731-12.8,12.8v10.523c-24.517,4.027-41.244,19.615-41.244,40.01v7.432 C56.036,250.516,72.462,265.612,97.28,269.454z M122.88,271.871c8.85,2.134,15.644,6.597,15.644,13.245v8.174 c0,6.647-6.794,11.11-15.644,13.244V271.871z M81.636,222.693c0-6.87,6.879-11.572,15.644-13.853v34.528 c-8.85-2.134-15.644-6.597-15.644-13.244V222.693z"></path> <path d="M499.2,115.2H12.8C5.732,115.2,0,120.931,0,128v256c0,7.069,5.732,12.8,12.8,12.8h486.4c7.068,0,12.8-5.731,12.8-12.8 V128C512,120.931,506.268,115.2,499.2,115.2z M486.4,371.2H25.6V140.8h460.8V371.2z"></path> <path d="M218.24,215.68h131.84c7.068,0,12.8-5.731,12.8-12.8c0-7.069-5.732-12.8-12.8-12.8H218.24c-7.068,0-12.8,5.731-12.8,12.8 C205.44,209.949,211.172,215.68,218.24,215.68z"></path> <path d="M218.24,266.88H438.4c7.068,0,12.8-5.731,12.8-12.8c0-7.069-5.732-12.8-12.8-12.8H218.24c-7.068,0-12.8,5.731-12.8,12.8 C205.44,261.149,211.172,266.88,218.24,266.88z"></path> <path d="M438.4,292.48h-74.24c-7.068,0-12.8,5.731-12.8,12.8c0,7.069,5.732,12.8,12.8,12.8h74.24c7.068,0,12.8-5.731,12.8-12.8 C451.2,298.211,445.468,292.48,438.4,292.48z"></path> </g> </g> </g> </g></svg>
            </Logo>
            <div>
            <Content> {s}</Content>
            <Span>Payment Report</Span>
            </div>
           

            <Short onClick={()=>handleClickd(10)}>View Detailed Report<span style={{ paddingLeft:"5px"}}>
                <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M393.625,251.424L270.215,5.623C268.484,2.177,264.957,0,261.1,0H127.49c-3.538,0-6.823,1.834-8.681,4.845 s-2.021,6.768-0.435,9.931L239.488,256L118.375,497.224c-1.587,3.162-1.424,6.92,0.435,9.931S123.952,512,127.49,512H261.1 c3.857,0,7.384-2.177,9.115-5.622l123.41-245.801C395.07,257.697,395.07,254.303,393.625,251.424z M254.808,491.602H144.023 l115.992-231.024c1.445-2.88,1.445-6.275,0-9.154L144.023,20.398h110.785L373.097,256L254.808,491.602z"></path> </g> </g> <g> <g> <path d="M274.476,93.334l-3.241-6.456c-2.527-5.033-8.658-7.063-13.691-4.538c-5.034,2.527-7.066,8.657-4.539,13.691l3.241,6.456 c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.101-0.35,4.568-1.087C274.972,104.498,277.003,98.368,274.476,93.334z"></path> </g> </g> <g> <g> <path d="M353.848,251.423l-62.985-125.45c-2.527-5.034-8.658-7.064-13.691-4.538c-5.034,2.527-7.066,8.656-4.539,13.691 l62.985,125.45c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.1-0.35,4.568-1.087 C354.344,262.587,356.376,256.458,353.848,251.423z"></path> </g> </g> </g></svg><svg fill="#000000"  height="10px" width="10px"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M393.625,251.424L270.215,5.623C268.484,2.177,264.957,0,261.1,0H127.49c-3.538,0-6.823,1.834-8.681,4.845 s-2.021,6.768-0.435,9.931L239.488,256L118.375,497.224c-1.587,3.162-1.424,6.92,0.435,9.931S123.952,512,127.49,512H261.1 c3.857,0,7.384-2.177,9.115-5.622l123.41-245.801C395.07,257.697,395.07,254.303,393.625,251.424z M254.808,491.602H144.023 l115.992-231.024c1.445-2.88,1.445-6.275,0-9.154L144.023,20.398h110.785L373.097,256L254.808,491.602z"></path> </g> </g> <g> <g> <path d="M274.476,93.334l-3.241-6.456c-2.527-5.033-8.658-7.063-13.691-4.538c-5.034,2.527-7.066,8.657-4.539,13.691l3.241,6.456 c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.101-0.35,4.568-1.087C274.972,104.498,277.003,98.368,274.476,93.334z"></path> </g> </g> <g> <g> <path d="M353.848,251.423l-62.985-125.45c-2.527-5.034-8.658-7.064-13.691-4.538c-5.034,2.527-7.066,8.656-4.539,13.691 l62.985,125.45c1.791,3.566,5.388,5.625,9.123,5.625c1.538,0,3.1-0.35,4.568-1.087 C354.344,262.587,356.376,256.458,353.848,251.423z"></path> </g> </g> </g></svg></span> </Short>
           </Card>
           <Card4 style={{display:"hidden", background:"transparent" , border:"none"}}></Card4>
           <Card4 style={{display:"hidden", background:"transparent" , border:"none"}}></Card4>
        </div>

    </Header>

    </div>
 )
}
export default HomeDashboard;