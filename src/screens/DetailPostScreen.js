import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import DataContext from './../context/data-context';

export const DetailPostScreen = () => {

    const [fileName, setFileName] = useState('');
    const [contentFile, setContentFile] = useState('');

    const { state } = useContext(DataContext);
    const { actualGist } = state;

    const { owner = {}, id, updated_at: updatedDate, comments, description = '', files } = actualGist;
    const { login = '', avatar_url: avatar = '', repos_url: url = '' } = owner;


    useEffect(() => {
        let gistKey = '';
        if (files) {
            Object.keys(files).forEach((key) => {
                if (key && key.length > 0) {
                    gistKey = key;
                }
            });
            if (gistKey.length > 0) {
                setFileName(gistKey);
            } else {
                setFileName(`gist:${id}`);
            }

            getContentFile(gistKey);
        }
    }, []);

    const getContentFile = async (gistKey) => {
        const { raw_url = '' } = files[gistKey];

        await axios.get(raw_url, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setContentFile(res.data);
        }).catch((err) => console.log(err));

    };


    return (
        <div className="container">
            < article className="post vt-post" >
                <div className="row">
                    <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                        <div className="post-type post-img">
                            <a href={url} target={'_blank'}>
                                <img src={avatar} className="img-responsive" alt="image post" /></a>
                        </div>
                        <div className="author-info author-info-2">
                            <ul className="list-inline">
                                <li>
                                    <div className="info">
                                        <p>Last modified</p>
                                        <strong>{updatedDate}</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <p>Comments</p>
                                        <strong>{comments}</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                        <div className="caption">
                            <h3 className="md-heading">
                                {`${login} / ${fileName}`}
                            </h3>
                            <span><strong>{description}</strong></span>
                            <div className="form-group">
                                <textarea style={{ height: '450px'}} className="form-control" id="exampleFormControlTextarea1" rows="3" readOnly value={contentFile}  defaultValue={''}/>
                            </div>
                        </div>
                    </div>
                </div>
            </article >
        </div>
    )
};
