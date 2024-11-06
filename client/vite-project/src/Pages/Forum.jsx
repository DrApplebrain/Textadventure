import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Forum.css";
import initialScenarios from '../Scenarios/scenarios.js';

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState('');
  const [threadImage, setThreadImage] = useState(null);
  const [isDescending, setIsDescending] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedThreads = JSON.parse(localStorage.getItem('threads'));
    if (savedThreads) {
      setThreads(savedThreads);
    } else {
      localStorage.setItem('threads', JSON.stringify(initialScenarios));
      setThreads(initialScenarios);
    }
  }, []);

  const saveThreadsToLocalStorage = (updatedThreads) => {
    localStorage.setItem('threads', JSON.stringify(updatedThreads));
    setThreads(updatedThreads);
  };

  const handleAddThread = () => {
    if (newThread.trim()) {
      const newScenario = {
        id: threads.length + 1,
        title: newThread,
        description: "Dies ist eine neue Themenbeschreibung.",
        likes: 0,
        image: threadImage ? URL.createObjectURL(threadImage) : "/default-image.png",
        comments: []
      };

      const updatedThreads = [...threads, newScenario];
      saveThreadsToLocalStorage(updatedThreads);
      setNewThread('');
      setThreadImage(null);
    }
  };

  const handleOpenThread = (thread) => {
    navigate(`/thread/${thread.id}`, { state: { thread } });
  };

  const toggleSortOrder = () => {
    const newOrder = !isDescending;
    setIsDescending(newOrder);
    const sortedThreads = [...threads].sort((a, b) => 
      newOrder ? b.likes - a.likes : a.likes - b.likes
    );
    setThreads(sortedThreads);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThreadImage(file);
    }
  };

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <input
        type="text"
        value={newThread}
        onChange={(e) => setNewThread(e.target.value)}
        placeholder="Füge ein neues Thema hinzu"
      />
     <div className='thread-image-upload'>
     <label htmlFor="imageUpload" className="upload-label">
          Bild
        </label>
        <input 
          id="imageUpload"
          type="file" 
          accept="image/*" 
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      <button onClick={handleAddThread} id='addThreadBtn'>Hinzufügen</button>
     </div>
      <button onClick={toggleSortOrder}>
        Nach Likes sortieren: {isDescending ? 'Absteigend' : 'Aufsteigend'}
      </button>
      <ul>
        {threads.map((thread) => (
          <li
            className="thread-title"
            key={thread.id}
            onClick={() => handleOpenThread(thread)}
            style={{ backgroundImage: `url(${thread.image})` }}
          >
            <h3>{thread.title}</h3>
            <p>{thread.description}</p>
            <span>{thread.likes} Likes</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
