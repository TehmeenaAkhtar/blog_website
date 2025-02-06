import styles from './ShareBtn.module.css';

const ShareBtn = ({ title, url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title, 
          url: url,    
        })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Sharing not supported');
    }
  };

  return (
    <button onClick={handleShare} className={styles.p2}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="cursor-pointer"
      >
        <path d="M16 4h5v5" />
        <path d="M19 9l-7 7-7-7" />
        <path d="M4 20h16" />
      </svg>
    </button>
  );
};

export default ShareBtn;

  

