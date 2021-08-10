import React, { useState, useEffect } from 'react';
import '../styles.css';

const Toast = ({
  item,
  duration,
  success,
  load
}) => {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    resetToast();
    if (item) newToast();
  }, [item, duration]);

  const resetToast = () => {
    setToast(null);
  }

  const newToast = () => {
    setToast(
      <span className="toast">
        {
          load ? <i className="fas fa-spinner spinner"></i>
          :
          success ?
          <i class="fas fa-check-circle success"></i>
          : <i class="fas fa-times-circle fail"></i>
        }
        {item}
      </span>
    );
    if (duration > 0) {
      setTimeout(resetToast, duration);
    }
  }

  return (
    <div>
      {toast}
    </div>
  )
}

export default Toast;
