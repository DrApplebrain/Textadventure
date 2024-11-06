import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Styles/Forum.css";

const ThemenAnsicht = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { thread } = location.state || {}; 

  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [localThread, setLocalThread] = useState(thread);

  useEffect(() => {
    if (!localThread) {
      const savedThreads = JSON.parse(localStorage.getItem('threads') || '[]');
      const foundThread = savedThreads.find(t => t.id === thread.id);
      setLocalThread(foundThread);
    }
  }, [thread, localThread]);


  const handleAddComment = () => {
    if (newComment.trim() && userName.trim() && localThread) {
      const newCommentData = {
        id: (localThread.comments?.length || 0) + 1,
        user: userName,
        text: newComment
      };

      const updatedComments = [...(localThread.comments || []), newCommentData];
      const updatedThread = { ...localThread, comments: updatedComments };

      setLocalThread(updatedThread); 

      const savedThreads = JSON.parse(localStorage.getItem('threads') || '[]');
      const updatedThreads = savedThreads.map(t => t.id === updatedThread.id ? updatedThread : t);
      localStorage.setItem('threads', JSON.stringify(updatedThreads));

      setNewComment('');
      setUserName('');
      navigate(`/thread/${updatedThread.id}`, { state: { thread: updatedThread } });
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!localThread) return <p>Lade Thread-Daten...</p>;

  return (
    <div className="thread-detail-container">
      <button onClick={handleGoBack}>Zurück</button>
      <img src={localThread.image} alt={localThread.title} />
      <h1>{localThread.title}</h1>
      <p>{localThread.description}</p>
      <h2>Kommentare:</h2>
      {localThread.comments && localThread.comments.length > 0 ? (
        <ul className='comment-list'>
          {localThread.comments.map((comment) => (
            <li className="comment-container" key={comment.id}>
              <div className='comment-user'>{comment.user}</div>
              <div className='comment-text'>{comment.text}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Keine Kommentare vorhanden</p>
      )}
      <div className="comment-form">
        <label htmlFor="comment-input-name">Name:
          <input
            id="comment-input-name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Dein Name"
          />
        </label>
        <textarea
          id="comment-input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Schreibe einen Kommentar"
        />
        <button onClick={handleAddComment}>Kommentar hinzufügen</button>
      </div>
    </div>
  );
};

export default ThemenAnsicht;
