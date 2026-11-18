import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state;

  if (!item) {
    return (
      <>
        <p>No media item selected.</p>
        <button onClick={() => navigate('/')}>Back to list</button>
      </>
    );
  }

  return (
    <>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.media_type.includes('video') ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;