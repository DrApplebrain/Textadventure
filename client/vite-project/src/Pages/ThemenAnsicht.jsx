import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Styles/Forum.css";
const ThemenAnsicht = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { thread } = location.state || {};
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [localThread, setLocalThread] = useState(thread);
  const [likes, setLikes] = useState(thread?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const defaultUserImage = "https://via.placeholder.com/50";
  const defaultDate = "01.01.2024";
  const defaultTime = "12:00";
  const maxCommentLength = 240;
  useEffect(() => {
    if (!localThread) {
      const savedThreads = JSON.parse(localStorage.getItem('threads') || '[]');
      const foundThread = savedThreads.find(t => t.id === thread.id);
      setLocalThread(foundThread);
      if (foundThread) {
        setLikes(foundThread.likes || 0);
        foundThread.comments.forEach(comment => {
          if (comment.likes === undefined) {
            comment.likes = 0;
          }
          if (comment.usedLike === undefined) {
            comment.usedLike = false;
          }
          if (comment.usedDislike === undefined) {
            comment.usedDislike = false;
          }
        });
      }
    }
  }, [thread, localThread]);
  const handleAddComment = () => {
    if (newComment.trim() && userName.trim() && localThread) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('de-DE');
      const formattedTime = currentDate.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
      const newCommentData = {
        id: (localThread.comments?.length || 0) + 1,
        user: userName,
        text: newComment,
        image: userImage ? URL.createObjectURL(userImage) : defaultUserImage,
        date: formattedDate,
        time: formattedTime,
        likes: 0,
        hasLiked: false,
        hasDisliked: false,
        usedLike: false,
        usedDislike: false
      };
      const updatedComments = [...(localThread.comments || []), newCommentData];
      const updatedThread = { ...localThread, comments: updatedComments };
      setLocalThread(updatedThread);
      const savedThreads = JSON.parse(localStorage.getItem('threads') || '[]');
      const updatedThreads = savedThreads.map(t => t.id === updatedThread.id ? updatedThread : t);
      localStorage.setItem('threads', JSON.stringify(updatedThreads));
      setNewComment('');
      setUserName('');
      setUserImage(null);
      navigate(`/thread/${updatedThread.id}`, { state: { thread: updatedThread } });
    }
  };
  const handleImageUpload = (event) => {
    setUserImage(event.target.files[0]);
  };
  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
      if (hasDisliked) {
        setLikes(likes + 2);
        setHasDisliked(false);
      }
    }
  };
  const handleDislike = () => {
    if (hasDisliked) {
      setLikes(likes + 1);
      setHasDisliked(false);
    } else {
      setLikes(likes - 1);
      setHasDisliked(true);
      if (hasLiked) {
        setLikes(likes - 2);
        setHasLiked(false);
      }
    }
  };
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  if (!localThread) return <p>Lade Thread-Daten...</p>;
  return (
    <div className="thread-detail-container">
      <button onClick={handleGoBack}>Zurück</button>
      <img id="thread-image" src={localThread.image} alt={localThread.title} />
      <div className="thread-description">
        <h1>{localThread.title}</h1>
        <p>{localThread.description}</p>
      </div>
      <div className="like-dislike-buttons">
        <button
          onClick={handleLike}
        >
          :+1: Like
        </button>
         <div className='thread-likes'>{likes}</div>
        <button
          onClick={handleDislike}
        >
          :-1: Dislike
        </button>
      </div>
      <h2>Kommentare:</h2>
      {localThread.comments && localThread.comments.length > 0 ? (
        <ul className="comment-list">
          {localThread.comments.map((comment) => (
            <li className="comment-container" key={comment.id}>
              <div className="comment-sidebar">
                <img
                  src={comment.image || defaultUserImage}
                  alt="User"
                  className="comment-user-image"
                />
                <div className="comment-user">{comment.user}</div>
              </div>
              <div className="comment-main">
              <div className="comment-text">{comment.text}</div>
                <div className="comment-date">{comment.date || defaultDate} um {comment.time || defaultTime}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Keine Kommentare vorhanden</p>
      )}
      <div className="comment-form">
        <label className="comment-input-name-label" htmlFor="comment-input-name">Name:
          <input
            id="comment-input-name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Dein Name"
            maxLength={15}
          />
        </label>
        <div className="comment-image-upload">
          <label className="upload-label" htmlFor="comment-input-image">Bild hochladen:</label>
          <input
            id="comment-input-image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <textarea
          id="comment-input"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Kommentar hinzufügen"
          maxLength={maxCommentLength}
        />
        <div className="comment-count">
          {maxCommentLength - newComment.length} / {maxCommentLength} Zeichen übrig
        </div>
        <button onClick={handleAddComment}>Kommentar hinzufügen</button>
      </div>
    </div>
  );
};
export default ThemenAnsicht;