import React, { useState } from 'react';
import './App.css';
// import './App1.scss';
import {
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  Label,
  Spinner
} from 'reactstrap';
import { ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import AppNav from "./AppNav";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';
import BookCard from './BookCard.jsx';


const textpad = {
    padding:'30px 30px 30px 30px',
    
  };

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

function Appnew() {
  // States
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [SortType, setSortType] = useState('newest');
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);//count
  const [currentPage, setCurrentPage] = useState(1);

  const classes = useStyles();
  
  const handleSubmit = e => {
    e.preventDefault();
    getData();
  };

  // Change page
 const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getData();
    // handleCards()
    
  };

  const getData = async () => { 
    
    setLoading(true);
    let c=0;
    // let page=1;
    if(currentPage > 1)
    {
            c = (currentPage - 1) * 20;
            c=c+1;
                   
    }
    else
    c=1;
    
    // console.log("startindex--"+c);
     const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${SortType}&maxResults=10&startIndex=${c}`);
                
           console.log(res);
            if (res.data.items.length > 0) {
                
                const total = res.data.totalItems;
                
                // // const totalPagesCount = getPagesCount( total, 10 ); 
                 const totalPagesCount=Math.ceil(total / 10);  
                // alert(totalPagesCount);
                 setTotalPages(totalPagesCount);
                 setTotalResults(total);
                
              setCards(res.data.items);
             setLoading(false);
            }
          
        };
        
    


 
  // Main Show Case
  const mainHeader = () => {
    return (
      <div className='main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div className='filter'></div>
        
        <div style={{ width: '50%', zIndex: 2 }}>
          <InputGroup size='lg' className='mb-3'>
            <Input
              placeholder='Enter Book Title / Author name'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <InputGroupAddon addonType='append'>
              <Button color='secondary' onClick={handleSubmit}>
                <i className='fas fa-search'></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <div className='d-flex text-white justify-content-center'>
            
            <FormGroup size='md' className='mb-3'>
            <Label for='sortBy'>Sort By</Label>
            <Input type="select" name="select" id="sortSelect"
             onChange={(e) => {setSortType(e.target.value);
            }}>
                       
                    <option value="newest">Newest</option>
                    <option value="relevance">Oldest</option>
            </Input>
            </FormGroup>
      



          </div>
        </div>
      </div>
    );
  };

  const handleChange = (event, value) => {
      console.log(value);
    setCurrentPage(value);
    getData();
    // setPage(value);
  };

  const handleCards = () => {
    
     
//  const currentPosts = cards.slice(indexOfFirstPost, indexOfLastPost);
//  console.log(currentPosts);
// console.log(cards);
    if (loading) {
      return (
        <div className='d-flex justify-content-center mt-3'>
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      );
    } else {
        
      const items = cards.map((item, i) => {
        let thumbnail = '';
        if (item.volumeInfo.imageLinks) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }

        return (
            
          <div className='col-lg-4 mb-3' key={item.id}>

            <BookCard
              thumbnail={thumbnail}
              title={item.volumeInfo.title}
              pageCount={item.volumeInfo.pageCount}
              publishedDate={item.volumeInfo.publishedDate}
              authors={item.volumeInfo.authors}
              publisher={item.volumeInfo.publisher}
              averageRating={item.volumeInfo.averageRating}
              description={item.volumeInfo.description}
              previewLink={item.volumeInfo.previewLink}
              infoLink={item.volumeInfo.infoLink}
            />
          </div>

        );
      });
     
      return (
        <div>
         
      {totalResults? 
      <div class="container">
      <div class="row ">
     
        <div class="col-sm-3" style={textpad}>
          
            TOTAL BOOKS : <strong className="text-primary">  {totalResults}
                        </strong>
      
            </div>
        
        <div class="col-sm-9">
               
        
                  <Pagination className="my-3" variant="outlined" count={totalPages} page={currentPage} color="primary" showFirstButton showLastButton onChange={handleChange} />
               </div>
        </div>
      </div>
      
      
                
        : <br></br>
        
      }
         
         <br></br>
          <div className='row'>{items}</div>
        </div>
      );
    }
  };

 

//   const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

  return (
    
    <div className='w-100 h-100'>
       <AppNav/> 
      {mainHeader()} 
               

      

      
      {handleCards()}
      <ToastContainer />
      
      
    </div>
  );
}

export default Appnew;
