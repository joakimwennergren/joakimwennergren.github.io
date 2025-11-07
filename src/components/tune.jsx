import { useEffect, useState } from "react";
import { loadCaptchaEnginge } from 'react-simple-captcha';
import { formatDistance } from "date-fns";
import { utcToZonedTime } from 'date-fns-tz';
import { sv } from "date-fns/locale";
import CommentForm from "./comment-form";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/minimal-light-dark.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function tune({ tune }) {

    // State for paginating tunes
    const [comments, setComments] = useState([]);
    const [currenttunePage, setCurrenttunePage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(comments.length / itemsPerPage);
    const currentItems = comments.slice(
        (currenttunePage - 1) * itemsPerPage,
        currenttunePage * itemsPerPage
    );

    const SetCurrentCommentPage = (value) => {
        setCurrenttunePage(value);
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
        setComments(tune.comments || []);
    }, [tune]);


    return (
        <>
            <div className="bg-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-sm font-medium text-gray-900">Hem</a>
                                    <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <span href="#" className="mr-2 text-sm font-medium text-gray-900">Musik</span>
                                    <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-300">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                            <li className="text-sm">
                                <a href={`#/tunes/${tune.slug}`} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{tune.title}</a>
                            </li>
                        </ol>
                    </nav>

                    <div className="mx-auto max-w-2xl pt-5 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2  lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl px-4">{tune.title}</h1>
                        </div>
                        <div className="py-2 lg:col-span-2 lg:col-start-1  lg:pt-6 lg:pr-8 lg:pb-16 mx-4 mb-4">
                            <div dangerouslySetInnerHTML={{ __html: tune.body }} ></div>
                            <AudioPlayer showJumpControls={false} className="mt-4" src={`/music/${tune.song}`} />
                        </div>
                        <div className="mt-4 lg:mt-0 lg:row-span-3 mx-4 mb-4">
                            <section className="max-w-2xl mx-auto  p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-4">Kommentera låten</h2>
                                <CommentForm slug={tune.slug} tuneOrProject={true} />
                                <div className="mt-6">
                                    <h3 className="text-md font-semibold mb-2">Kommentarer</h3>
                                    <ul className="space-y-4">
                                        {comments && currentItems.length > 0 ? currentItems.map((comment, index) => (
                                            <li key={index} className="p-3 bg-gray-100 rounded-lg">
                                                <p className="font-semibold">{comment.name}</p>
                                                <p className="text-gray-800">{comment.content}</p>
                                                <span className="text-sm text-gray-500">{formatDistance(utcToZonedTime(new Date(comment.date_created), 'Europe/Stockholm'), new Date(), { locale: sv })} sedan</span>
                                            </li>
                                        )) : (
                                            <li className="p-3 bg-gray-100 rounded-lg">
                                                <p className="text-gray-800">Inga kommentarer än.</p>
                                            </li>
                                        )}
                                    </ul>
                                    <div className="mt-4">
                                        <ResponsivePagination
                                            current={currenttunePage}
                                            total={totalPages}
                                            onPageChange={SetCurrentCommentPage}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}