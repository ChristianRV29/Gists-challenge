import PropTypes from 'prop-types';

export const Post = ({ avatar, publicationDate, updateDate, owner, postInfo }) => {
    const { title, description } = postInfo;
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
                                    <strong>{publicationDate}</strong>
                                </div>
                            </li>
                            <li>
                                <div className="info">
                                    <p>Last update on:</p>
                                    <strong>{updateDate}</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                    <div className="caption">
                        <h3 className="md-heading">
                            <a href="#">{owner} / {title}</a>
                        </h3>
                        <p> {description}</p>
                        <a className="btn btn-default" href="#" role="button">Read More</a> </div>
                </div>
            </div>
        </article>
    )
}

Post.propTypes = {
    avatar: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    updateDate: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    postInfo: PropTypes.exact({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        files: PropTypes.object,
    }),
};
