import { useEffect, useState } from "react";
import { loadCaptchaEnginge } from 'react-simple-captcha';
import { formatDistance } from "date-fns";
import { formatInTimeZone } from 'date-fns-tz'
import { Rating, ThinStar } from '@smastrom/react-rating'
import { sv } from "date-fns/locale";
import API_BASE from "../data/api";
import CommentForm from "./comment-form";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/minimal-light-dark.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '@smastrom/react-rating/style.css';


export default function tune({ tune }) {

    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const handleRate = async (newValue) => {
        console.log(newValue)
        setRating(newValue)
        setLoading(true)
        setMessage('')

        try {
            const response = await fetch(`${API_BASE}/music/${tune.slug}/rate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating: newValue }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Misslyckades med att betygsätta')
            }

            setMessage('✅ Tack för din input!')
        } catch (err) {
            console.error(err)
            setMessage('❌ ' + err.message)
        } finally {
            setLoading(false)
        }
    }

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
        if (tune.error == undefined) {
            loadCaptchaEnginge(6);
            setComments(tune.comments || []);
            setRating(Math.ceil(tune.average_rating));
        }
    }, [tune]);


    return (
        <>
            {tune.error == undefined ?
                (
                    <div className="bg-white">
                        <div className="pt-6">
                            <nav aria-label="Breadcrumb">
                                <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                    <li>
                                        <div className="flex items-center">
                                            <a href="/" className="mr-2 text-sm font-medium text-gray-900">Hem</a>
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
                                    <div className="max-w-2xl mx-auto  p-4 bg-white rounded-lg shadow-md mb-4">
                                        <div>
                                            <h2 className="text-lg font-semibold mb-4">Betygsätt låten</h2>
                                            <Rating
                                                style={{ maxWidth: 150 }}
                                                value={rating}
                                                onChange={handleRate}
                                                isDisabled={loading}
                                            />
                                            <div className="mt-2">{message && <div style={{ marginTop: 8, fontSize: 14 }}>{message}</div>}</div>
                                        </div>
                                    </div>
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
                                                        <span className="text-sm text-gray-500">{formatDistance(formatInTimeZone(new Date(comment.date_created), 'Europe/Stockholm', 'yyyy-MM-dd HH:mm:ss'), new Date(), { locale: sv })} sedan</span>
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
                ) : (
                    <div className="mx-auto max-w-6xl">
                        <div className="py-2 lg:col-span-2 lg:col-start-1  lg:pt-6 lg:pr-8 lg:pb-16 px-4 mt-4">
                            <h1 className="text-xl">Låten finns inte..</h1>
                        </div>
                    </div>
                )}

        </>
    );
}