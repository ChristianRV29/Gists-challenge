import { useEffect } from "react";

import GithubApi from "./../api/github";
import { Post } from './../components/organisms/Post';


export const PostsScreen = () => {

    useEffect(() => {
        getGists();
    }, []);

    const getGists = async () => {
        // await GithubApi.getGistsByUser('ryantm').then((res) => {
        //     console.log(JSON.stringify(res));
        // }).catch((err) => console.log(err));
    };

    /**
     * Proptypes necesarias:
     * img del avatar
     * Fecha de posteo
     * Autor / Titulo del gists
     * descripcion del gists
     * Toda la demas información del gists
     * 
    */

    return (
        <div className="container">
            <div className="col-md-12 col-lg-12">
                <Post avatar={'https://bootdey.com/img/Content/avatar/avatar7.png'} owner={'Pepito perez'} updateDate={'Mar 21, 2015'} publicationDate={'Mar 21, 2010'} postInfo={{ title: 'test title', description:'Test description' }}/>
                <article className="post vt-post">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                            <div className="post-type post-img">
                                <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-responsive" alt="image post"/></a>
                            </div>
                            <div className="author-info author-info-2">
                                <ul className="list-inline">
                                    <li>
                                        <div className="info">
                                            <p>Posted on:</p>
                                            <strong>Mar 21, 2015</strong></div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <p>Comments:</p>
                                            <strong>127</strong></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                            <div className="caption">
                                <h3 className="md-heading"><a href="#">The Heading Text Size Should Match</a></h3>
                                <p> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <a className="btn btn-default" href="#" role="button">Read More</a> </div>
                        </div>
                    </div>
                </article>



                <article className="post vt-post">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                            <div className="post-type post-img">
                                <a href="#"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-responsive" alt="image post"/></a>
                            </div>
                            <div className="author-info author-info-2">
                                <ul className="list-inline">
                                    <li>
                                        <div className="info">
                                            <p>Posted on:</p>
                                            <strong>Mar 21, 2015</strong></div>
                                    </li>
                                    <li>
                                        <div className="info">
                                            <p>Comments:</p>
                                            <strong>127</strong></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                            <div className="caption">
                                <h3 className="md-heading"><a href="#">The Heading Text Size Should Match</a></h3>
                                <p> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                <a className="btn btn-default" href="#" role="button">Read More</a> </div>
                        </div>
                    </div>
                </article>
                <div className="pagination-wrap">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    )
};

