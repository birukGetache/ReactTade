import styled from 'styled-components';
import { space, layout, color, typography, border, position } from 'styled-system';
import { useSelector } from 'react-redux';

export const Home = styled.div`
width:100%;
display:grid;
grid-template-columns:2fr 8fr;
background-color:#edf1f5;
`
export const HomeContent = styled.div`

width:100%;
`
export const SideBar = styled.div`
  width: 100%;
  background-color: #1d242e;
  height: 100vh;
  overflow-y: scroll; /* Allows scrolling */
  overflow-x: hidden; /* Hides horizontal scroll if not needed */
  /* Remove the scrollbar appearance */
  
  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    display: none; /* Hides the scrollbar */
  }

  /* For Firefox */
  scrollbar-width: none; /* Hides scrollbar */
`;

export const Image = styled.img`
width:100%;
height:auto;`
export const AdminInfo = styled.div`
height:15vh;
width:auto;
display:flex;

`
export const PAdminInfo = styled.img`
margin-left:30px;
width:auto;
height:50%;
margin-top:auto;
margin-bottom:auto;
border-radius:15px;
`
export const Dashboard = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
  border-top: 1px solid black;
  background-color: ${(props) => (props.clicked === 1 ? '#009099' : 'transparent')};
  height: 8vh;
  cursor: pointer;
`;
export const InputDiv = styled.div`
margin:auto;
padding:0;
display:flex;
align-items:center;
justify-content:center;
width:32vw;
height:9vh;
`
export const Input = styled.input`
width:100%;
padding-left:20px;
height:6vh;
margin:auto;
border:none;
border-radius:7px;
background-color:#e3ebf3;
&::placeholder {
    color: a0a0a0; 
    font-family: "DM Sans", sans-serif;
    font-size: 17px; 
  }`
export const DashboardP = styled.p`
color:white;
text-align:center;
margin:0;
 white-space: nowrap;
padding:0;
font-size:15px;

`
export const Invertory = styled.div`
padding-left:30px;
padding-right:30px;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
height:fit-content;
cursor:pointer;  
 background-color: ${(props) => (props.clicked === 13 ? '#009099' : 'transparent')};
`
export const InvertoryC = styled.div`
padding-left:30px;
padding-right:30px;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
height:fit-content;
cursor:pointer;  
 background-color: ${(props) => (props.clicked === 11 ? '#009099' : 'transparent')};
`
export const Invertorys = styled.div`
padding-left:30px;
padding-right:30px;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
height:fit-content;
cursor:pointer;  
 background-color: ${(props) => (props.clicked === 15 ? '#009099' : 'transparent')};
`
export const Configuration = styled.div`
padding-left:30px;
display:flex;
align-items:center;
border-bottom:1px solid white;
height:8vh;
cursor:pointer;
padding-left:30px;
display:flex;
align-items:center;
border-top:1px solid black;
 background-color: ${(props) => (props.clicked === 2 ? '#009099' : 'transparent')};
height:8vh;
cursor:pointer;
`
export const Notification = styled.div`
padding-left:30px;
display:flex;
align-items:center;
border-bottom:1px solid white;
height:8vh;
cursor:pointer;
padding-left:30px;
display:flex;
align-items:center;
border-top:1px solid black;
 background-color: ${(props) => (props.clicked === 3 ? '#009099' : 'transparent')};
height:8vh;
cursor:pointer;
`
export const Application = styled.div`
padding-left:30px;
display:flex;
align-items:center;
border-bottom:1px solid white;
height:8vh;
cursor:pointer;
padding-left:30px;
display:flex;
align-items:center;
border-top:1px solid black;
 background-color: ${(props) => (props.clicked === 4 ? '#009099' : 'transparent')};
height:8vh;
cursor:pointer;
`
export const Get = styled.div`
padding-left:30px;
display:flex;
align-items:center;
border-bottom:1px solid white;
height:8vh;
cursor:pointer;
  background-color: ${(props) => (props.clicked === 5 ? '#009099' : 'transparent')};
height:8vh;
cursor:pointer;
`
export const P = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 7 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
         `
export const P2 = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 8 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
`
export const P7 = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 101 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
`
export const P3 = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 9 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
`
export const P6 = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 18 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
`
export const P4 = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 10 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
`
export const P5 = styled.p`
display:block;
width:14vw;
 color:white; 
 padding-left:160px; 
 padding-right:-200px;
  margin-right:-100px;
   margin-left:-100px; 
     background-color: ${(props) => (props.clicked === 17 ? '#009099' : '#1a222b')};
     padding-top:25px;
       padding-bottom:20px;
       margin-top:0;
        margin-bottom:0;
         font-family:DM Sans ;
         font-size:14px;
`
export const Fotter  = styled.p`
background:transparent;
font-size:15px;
color:white;
text-align:center;
align-items:center;
padding-top:7%;
margin:0;
font-family: "DM Sans", sans-serif;
`

export const Header = styled.div`
height:11vh;
background-color:white;
display:grid;
width:100%;
grid-template-columns:1fr 1fr;
`

export const LanguageWithDate = styled.div`
 height: 
 width:45vw;
 display:flex;
 justify-content:space-between;
 padding-left:20%;
 gap:20px;
 padding-right:5%;
 align-items:center;
`
export const DateDisplay = styled.span`
  padding-left:10px;
  font-size: 16px;
   display:grid;
   height:9vh;
   justify-content: flex-end;
  width:500px;
  color: #555;
  p{
  margin:0;}
`;
export const IconWrapper = styled.span`
  margin-right: 8px;
`;