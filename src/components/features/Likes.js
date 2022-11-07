import React, { useEffect, useState } from 'react';
import {
    LikeOutlined,
    DislikeOutlined,
    LikeFilled,
    DislikeFilled,
} from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { contentsApis } from "../../api/instance"

function LikeDislikes(props) {
    const { id } = useParams();
    const [Likes, setLikes] = useState(0);
    const [LikeAction, setLikeAction] = useState('');

    const onLike = (id) => {
        if (LikeAction === '') {
            contentsApis.likesAX(id).then((response) => {
                if (response.data.msg === "success Likes!") {
                    setLikes(Likes + 1);
                    setLikeAction('liked');
                } else {
                    alert('Like를 올리지 못했습니다.');
                }
            });
        } else {
            contentsApis.cancelLikesAX(id).then((response) => {
                setLikes(Likes - 1);
                setLikeAction('');
            });
        }
    };

    // useEffect((id) => {
    //     contentsApis.likesAX(id).then((response) => {
    //         if (response.data.msg === "success Likes!") {
    //             //얼마나 많은 좋아요를 받았는지
    //             setLikes(response.data.likes.length);
    //             //내가 좋아요를 이미 눌렀는지
    //             response.data.likes.map((like) => {
    //                 if (like.userId === props.userId) {
    //                     //pros.userId는 로그인한 사용자의 Id이기때문
    //                     setLikeAction('liked');
    //                 }
    //             });
    //         } else {
    //             alert('Like에 대한 정보를 가져오지 못했습니다.');
    //         }
    //     });
    // }, []);

    return (
        <div>
            <span key="comment-basic-like">
                <div title="Like">
                    {LikeAction === '' ? (
                        <LikeOutlined onClick={onLike} />
                    ) : (
                        <LikeFilled onClick={onLike} />
                    )}
                </div>
                <span style={{ paddingLeft: '4px', cursor: 'auto' }}> {Likes}</span>
            </span>
        </div>
    );
}

export default LikeDislikes;