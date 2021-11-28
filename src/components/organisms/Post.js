/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';

export const Post = ({ gist }) => {

    const { owner, id, created_at: publishDate, comments, description } = gist;
    const { login, avatar_url: avatar, } = owner;
    return (
        <article className="post vt-post">
            <div className="row">
                <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                    <div className="post-type post-img">
                        <a href="#">
                            <img src={avatar} className="img-responsive" alt="image post" /></a>
                    </div>
                    <div className="author-info author-info-2">
                        <ul className="list-inline">
                            <li>
                                <div className="info">
                                    <p>Posted on:</p>
                                    <strong>{publishDate}</strong>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <p>Comments:</p>
                                    <strong>{comments}</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                    <div className="caption">
                        <h3 className="md-heading">
                            <a href="#">{`${login} / gist:${id}`}</a>
                        </h3>
                        <p>{description}</p>
                        <a className="btn btn-default" href="#" role="button">Read More</a> </div>
                </div>
            </div>
        </article>
    )
}

Post.propTypes = {
    gist: PropTypes.exact({
        owner: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        created_at: PropTypes.string.isRequired,
        comments: PropTypes.number.isRequired,
    }),
};
