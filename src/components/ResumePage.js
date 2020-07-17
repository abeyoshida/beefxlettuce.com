import React from 'react';

const ResumePage = () => {
    return (
        <div className="d-flex justify-content-center">
            <embed src="pdf\Abram_Yoshida_Resume_20200630.pdf" type="application/pdf" width="60%" height="750px" style={{marginTop: '50px'}} />
            {/*<iframe title="Abram Yoshida Resume" src="..\assets\pdf\Abram_Yoshida_Resume_20200630.pdf" width="100%" height="100%" />*/}
        </div>
    );
};

export default ResumePage;