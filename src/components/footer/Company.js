import React from 'react';
import './_company.scss'


const CompanyTrades = () => {
  return (
    <>
    
      <div className="trades">
        <div className="row">
          <p className="copyrights">
            &copy;{new Date().getFullYear()} MedicMinder | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </>
  );
}

export default CompanyTrades;