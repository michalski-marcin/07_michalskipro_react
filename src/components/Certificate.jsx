import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import '../styles/skill.css';

function Certificate({ certificates }) {
  if (!certificates || certificates.length === 0) {
    return <p>No certificates available.</p>; // Handle the case where certificates are not provided
  }

  return (
    <>
      {certificates.map((certificate, i) => (
        <motion.div
          className='certificate-card'
          key={i}
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2, delay: i * 0.07, ease: 'easeInOut' }}>
          <img
            src={`./assets/${certificate.image}`}
            alt={certificate.id}
          />
        </motion.div>
      ))}
    </>
  );
}

Certificate.propTypes = {
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Certificate;
