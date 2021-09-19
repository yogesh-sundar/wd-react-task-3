import React from "react";
import "../App.css";

function Card() {
  const dahsboard = [
    { title: "Earninngs (Monthly)", amount: "$40,000", color:"blue" },
    { title: "Earninngs (Annually)", amount: "$215,000", color:"green" },
    { title: "Task", amount: "50%", color:"var(--cyan)" },
    { title: "Pending Requests", amount: "18", color:"orange" },
  ];
  return (
    <div className="container">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div class="row">
        {dahsboard.map((item, index) => (
          <div className="col-xl-3 col-md-6 mb-4" key = {index}>
              
            <div className="card shadow h-100 py-2 " style = {{borderLeft:`4px solid ${item.color}`}} >
              
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                      {item.title === "Earninngs (Monthly)"?
                    (<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      {item.title}
                    </div>) : (item.title === "Earninngs (Annually)" ? <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      {item.title}
                    </div>: (item.title === "Task" ? <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      {item.title}
                    </div>: (item.title === "Pending Requests" ? <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      {item.title}
                    </div>: "")))}
                   {item.title !== "Task" ? ( <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {item.amount}
                    </div>) : ""}
                    {item.title === "Task" ? (
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          {item.amount}
                          </div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm mr-2">
                            <div
                              class="progress-bar bg-info"
                              role="progressbar"
                              style= {{width: "50%",
                              ariaValuenow :"50",
                              ariaValuemin :"0",
                              ariaValuemax :"100"}}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-auto">
                    {item.title === "Earninngs (Monthly)" ? (
                      <i className="fas fa-calendar fa-2x text-gray-300"></i>
                    ) : item.title === "Earninngs (Annually)" ? (
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    ) : item.title === "Task" ? (
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    ) : item.title === "Pending Requests" ? (
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
