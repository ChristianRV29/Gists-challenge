import { useContext, useState, useEffect } from 'react';

import DataContext from './../context/data-context';

export const DetailPostScreen = () => {

    const [fileName, setFileName] = useState('');

    const { state } = useContext(DataContext);
    const { actualGist } = state;

    const { owner = {}, id, updated_at: updatedDate, comments, description, files } = actualGist;
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
        }
    }, []);


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
                            <span>{description.length > 0 ? description : 'Without description'}</span>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" readOnly>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </article >
        </div>
    )
};
