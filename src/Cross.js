import './Cross.css'; 

export default function Failed(){
    return(
        <div className='cross-container'>
            <svg className="cross" width="100" height="100" viewBox="0 0 52 52">
                <circle className="cross-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="cross-line1" d="M10 10 L42 42" fill="none" />
                <path className="cross-line2" d="M42 10 L10 42" fill="none" />
            </svg>
            <div style={{ marginTop: '10px', fontSize: '18px', color: 'red' }}>
                Failed!
            </div>
        </div>
    );
}