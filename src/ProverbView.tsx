type ProverbModalProps = {
  proverb: any;
  onClose: () => void;
};

function ProverbModal({ proverb ,onClose}: ProverbModalProps) {
  return (
    <div className="modal-backdrop" >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close proverb modal">
          X
        </button>
        <h3>{proverb.ProverbName}</h3>
        <p>{proverb.ProverbDesp}</p>
      </div>

    </div>
  );
}

export default ProverbModal;
