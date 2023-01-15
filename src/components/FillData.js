
import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom';

const FillData = () => {

    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          navigate('/createads');
        }, 3000)
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    
    return(


        <div className="container-fluid  mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card shadow-sm">
                        <h4 className="text-heading">Create Text & Media</h4>
                        {submitting &&
                        <div className='alert alert-success alert-message shadow-sm'>Submitted Form Successfully..</div>
                        }
                        <div className="card-body">
                        <form className="row g-3" onSubmit={handleSubmit}>
                            <div className="col-md-6 mail-form">
                                <label for="heading-01" className="form-label">Heading 01</label>
                                <input type="text" className="form-control" id="inputEmail4"  placeholder="Heading-1" message={message} onChange={handleChange}/>
                            </div>
                           
                            <div className="col-md-6 text-area-field">
                                <label for="description-01">Description 01</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" message={message} onChange={handleChange}></textarea>
                            </div>
                            

                            <div className="col-md-6 address-field">
                                <label for="heading-02" className="form-label">Heading 02</label>
                                <input type="text" className="form-control" id="inputAddress"  placeholder="Heading-2" message={message} onChange={handleChange}/>
                            </div>
                            

                            <div className="d-inline-flex form-fill">
                                <div className="col-md-4">
                                    <label for="landscape-image" className="form-label landscape-label"><small>Landscape Marketing Image (1.9:1)</small></label>
                                    <input type="text" className="form-control image-form" id="inputEmail4"  placeholder="add image url" message={message} onChange={handleChange}/>
                                </div>
                              

                                <div className="col-md-4">
                                    <label for="potrait-image" className="form-label portraight-label"><small>Portrait Marketing Image (4:5)</small></label>
                                    <input type="text" className="form-control  image-form-1" id="inputAddress" placeholder="add image url" message={message} onChange={handleChange}/>
                                </div>
                                

                                <div className="col-md-4">
                                    <label for="square-image" className="form-label square-label"><small>Square Marketing Image (1:1) </small></label>
                                    <input type="text" className="form-control  image-form-2" id="inputAddress"  placeholder="add image url" message={message} onChange={handleChange}/>
                                </div>
                              
                            </div>
                            <div className="col-md-12">
                                <label for="vedio-url" className="form-label">Vedio URL</label>
                                <input type="text" className="form-control" id="inputAddress"  placeholder="Heading-2" message={message} onChange={handleChange}/>
                            </div>
                            

                            <div className="col-md-6">
                                <label for="business-name" className="form-label">Business Name</label>
                                <input type="text" className="form-control" id="inputEmail4"  placeholder="Heading-1" message={message} onChange={handleChange}/>
                            </div>
                            

                            <div className="col-md-6">
                                <label for="button-label" className="form-label">Button Label</label>
                                <select class="form-control" message={message} onChange={handleChange}>
                                     <option>Select label</option>
                                </select>
                            </div>
                           

                            <div className="col-md-12">
                                <label for="website-url" className="form-label">Website URL</label>
                                <input type="text" className="form-control" id="inputAddress"  placeholder="Heading-2" message={message} onChange={handleChange}/>
                            </div>
                          

                            <div class="col-12 float-right mt-2">
                                <button type="submit" className="btn btn-primary float-right m-1" >Submit</button>
                                <button type="submit" className="btn btn-light float-right m-1 btn-1" onClick={() => navigate('/createads')}>Back</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FillData;