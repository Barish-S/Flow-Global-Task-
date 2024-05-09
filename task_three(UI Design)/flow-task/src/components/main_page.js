import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useDispatch,useSelector } from 'react-redux';
import '../css/mainPage.css'
import HomeForm from './form';
import Address from './address';
import { setStatus } from '../Redux/Reducer/mainSlice';
import Charges from './charges';
import Documents from './documts';
import Isp from './isp';
import Order from './order';
import { Link } from 'react-router-dom';

function MainPage(){
    let dispatch=useDispatch()
    let globeStatus=useSelector((state)=>state.home.status)
    
    return(
        <>
         <Navbar bg="light" data-bs-theme="light" id='nav'>
        <Container>
          <Nav className="me-auto" style={{marginLeft:"100%"}}>
            <Nav.Link href="#home">Cart</Nav.Link>
            <Nav.Link href="#features">Location</Nav.Link>
            <Nav.Link href="#pricing">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <div id='body'>
            <div className='sidebar'>
                <ul>
                    <li>Home</li>
                    <li>Support</li>
                    <li>Internet Account Details</li>
                    <li><DropdownButton id="dropdown-item-button" title="My Services">
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton></li>
                    <li>Shop</li>
                    <li>My Account</li>
                    <li>Billing Information</li>
                    <li>Courier Tracking</li>
                </ul>

            </div>
            <div className='info'>
                <ul>
                    <li><Link  onClick={()=>dispatch(setStatus("form"))} style={{textDecoration:"none",color:"black"}}>Fibre Application Form</Link></li>_____
                    <li><Link  onClick={()=>dispatch(setStatus("Debit"))} style={{textDecoration:"none",color:"black"}}>Debite Order Mandate</Link></li>------                    
                    <li><Link  onClick={()=>dispatch(setStatus("Address"))} style={{textDecoration:"none",color:"black"}}>Shipping Address</Link></li>-------
                    <li><Link  onClick={()=>dispatch(setStatus("FICADoc"))} style={{textDecoration:"none",color:"black"}}>FICA Documents</Link></li>---------
                    <li><Link  onClick={()=>dispatch(setStatus("ISP"))} style={{textDecoration:"none",color:"black"}}>Switching ISP</Link></li>----------
                    <li><Link  onClick={()=>dispatch(setStatus("Charges"))} style={{textDecoration:"none",color:"black"}}>Summary Of Charges</Link></li>
                </ul>
                <Container id='datas'>
                    {globeStatus=="form"?<HomeForm/>:null}
                    {globeStatus=="Address"?<Address/>:null}
                    {globeStatus=="Debit"?<Order/>:null}
                    {globeStatus=="FICADoc"?<Documents/>:null}
                    {globeStatus=="ISP"?<Isp/>:null}
                    {globeStatus=="Charges"?<Charges/>:null}


                
    </Container>
            </div>
            <div style={{position:"fixed",bottom:"0%",width:"100%",backgroundColor:"rgb(151, 36, 148)"}}>
            <footer style={{color:"white",marginLeft:"23%"}}>@Flow-Task-2024 | Version 1.0.0</footer>
            </div>
        </div>
        </>
    )
}
export default MainPage