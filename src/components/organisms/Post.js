/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import { format } from 'timeago.js';

export const Post = ({ gist }) => {

    const { owner, id, updated_at: updatedDate, comments, description } = gist;
    const { login, avatar_url: avatar, repos_url: url } = owner;
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
                            {`${login} / gist:${id}`}
                        </h3>
                        <p>{description}</p>
                        <button className="btn btn-primary" role="button">Read More</button>
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
