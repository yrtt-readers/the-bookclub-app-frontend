import React, {useState} from 'react';
import { useHistory, Link } from "react-router-dom";
import './AddBook.css';

function AddBook() {
    const history = useHistory();
    const [state , setState] = useState({
        isbn : "",
        title : "",
        author: "",
        summary: "",
        thumbnail: ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = () => {
        history.push('/donate');
    }

    return (
        <div className="container container-margin text-center">
            <h1 className="text-center">Add Book</h1>
            <Link to="/">Search in Open Library</Link>
            <div className="card col-12 hv-center margin-space">
                <form>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputIsbn">ISBN</label>
                        <input type="text" 
                            className="form-control" 
                            id="isbn" 
                            aria-describedby="isbnHelp" 
                            placeholder="Enter ISBN" 
                            value={state.isbn}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputTitle">Title</label>
                        <input type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="Title"
                            value={state.title}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-check">
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputAuthor">Author</label>
                        <input type="text" 
                            className="form-control" 
                            id="author" 
                            placeholder="Author"
                            value={state.author}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputSummary">Summary</label>
                        <textarea type="textarea" 
                            className="form-control" 
                            id="summary" 
                            placeholder="Summary"
                            rows="4" cols="50"
                            value={state.summary}
                            onChange={handleChange} 
                        />
                    </div>         
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputSummary">Thumbnail URL</label>
                        <input type="url"
                            className="form-control" 
                            id="thumbnail" 
                            placeholder="Thumbnail URL"
                            value={state.thumbnail}
                            onChange={handleChange} 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                    >Submit</button>
                </form>
            </div>
        </div>
    )

}

export default AddBook;

