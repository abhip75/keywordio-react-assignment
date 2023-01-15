import React from "react";
import { useNavigate } from 'react-router-dom';


const CreateAds = () => {
    const navigate = useNavigate();
    return(
        <div className="mt-4">
            <div className="text-header"><h5>Create Ads</h5></div>
            <div class="row">
                
                <div class="col-md-6">
                    <div class="card create-ad-card shadow-sm">
                        <div className="card-header create-ads-card-header">
                            <div className="form-group form-check" data-toggle="modal" data-target="#exampleModal">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => navigate('/filldata')} />
                                
                            </div>
                        </div>
                        <div className="card-body p-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt leo non dui sodales aliquam nec vitae velit. Quisque vestibulum velit dolor, id ornare neque ultrices at. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tellus ipsum, tempus quis odio sit amet, mattis commodo elit. Aliquam id tincidunt diam. Donec tincidunt erat at lacus finibus consectetur.Donec tincidunt erat at lacus. </p>

                            <div className="card-header bottom-card-header">
                                <h5 className="card-title text-center text-color">Create</h5>
                                <p className="card-text text-center"><strong>Text Ad</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card create-ad-card shadow-sm">
                        <div className="card-header create-ads-card-header">
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={() => navigate('/filldatamedia')}/>
                                
                            </div>
                        </div>
                        <div className="card-body">
                            <img className="card-img-top" src="/images/headphone-1.jpg" alt="headphone-1"/>
                            <div className="card-header bottom-card-header">
                                <h5 className="card-title text-center text-color">Create</h5>
                                <p className="card-text text-center"><strong>Text Ad</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAds;