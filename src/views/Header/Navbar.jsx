import { useWeb3React } from '@web3-react/core';
import { useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Injected } from '../ConnectWallet/Wallets';
import './navbar.modulus.css'
// import { Injected } from '../features/Connectors';
// import { useContextAPI } from '../features/contextapi';


function BasicExample() {
  
  const { active, activate , library , account, deactivate , chainID } = useWeb3React();
  
  console.log({account});
  console.log({active});


  async function conToMetaMask() {
    if (typeof window.ethereum == "undefined") {
      alert("MetaMask is Not installed!");

    }else {
      try {
        // await changeNetwork({ networkName: 'polygon', setError });
        await activate(Injected);
        // console.log('chainid' , chainID);
        // window.ethereum.request({ method: "net_version" }).then((chainID) => {
        //   if(chainID == 5){
        //     setMessage({message: "Wallet Connected", color: "success" , isMessage: true})
        //   }else {
        //     setMessage({message: "Change Network", color: "danger" , isMessage: true})
            
        //   }
        // });
      } catch (error) {
        console.error('error');

        console.error(error);
      }
    }
  }

  const disWallet = async () => {
    try {
      await deactivate()
    } catch (error) {
      
    }
  }

  return (
    <>
      {/* <IntegrationWallets /> */}
 
      <Navbar bg="light" expand="lg" className='navbarcontainer mb-4'>
        <Container className='justify-content-center py-2'>
          <Navbar.Brand >TAGURU</Navbar.Brand>
          <nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
      
            <Nav >
              <Nav.Link as={Link} to={"/"}>Create</Nav.Link>
              <Nav.Link as={Link} to={"/display"}>Dispaly</Nav.Link>
              <Nav.Link as={Link} to={"/update"}>Update</Nav.Link>
            </Nav>

     
          </Navbar.Collapse>
          </nav>
        </Container>

              {active ? 
                  <button className="btn btn-primary px-4 rounded-pill  px-2 connectbutton" onClick={disWallet}>{account?.slice(0,4)}...{account?.slice(-4)}</button> :
                  <button className="btn btn-primary px-4 rounded-pill  px-2 connectbutton" onClick={conToMetaMask}>Connect Wallet</button> 
              }
              
      </Navbar> 
    </>


  );
}
export default BasicExample;