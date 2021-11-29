/* eslint-disable jsx-a11y/img-redundant-alt */

import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { format } from 'timeago.js';

import DataContext from './../../context/data-context';

export const Post = ({ gist }) => {

    const { owner, id, updated_at: updatedDate, comments, description, files } = gist;
    const { login, avatar_url: avatar, repos_url: url } = owner;

    const { dispatch } = useContext(DataContext);
    
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        let gistKey = '';
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
    }, []);

    const seeDetails = () => {
        dispatch({ type: 'ASSING_GIST_DETAIL', payload: gist });
    };

    return (
        <article className="post vt-post">
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
                                    <strong>{format(updatedDate, 'en_US')}</strong>
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
                        <p>{description.length > 0 ? description : 'Without description'}</p>
                        <NavLink to={`/gist/id?=${id}`}>
                            <button className="btn btn-primary" onClick={seeDetails}>See more details</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </article>
    )
}

Post.propTypes = {
    gist: PropTypes.shape({
        owner: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        updated_at: PropTypes.string.isRequired,
        comments: PropTypes.number.isRequired,
    }),
};
