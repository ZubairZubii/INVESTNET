import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header"; // Import your existing Header component
import Sidebar from "../components/Sidebar/Sidebar"; // Import Sidebar
import "./PaymentsPage.css";

const PaymentsPage = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [currentDeal, setCurrentDeal] = useState(null);

  useEffect(() => {
    // Simulated API call for payment data
    const fetchPayments = async () => {
      // Mock current deal data
      const deal = {
        id: "deal123",
        title: "Seed Funding for Project Alpha",
        amount: 50000,
        received: 25000,
        deadline: "2024-12-31",
      };
      setCurrentDeal(deal);

      // Mock payment history data
      const history = [
        {
          id: "tx001",
          date: "2024-01-10",
          investor: "John Doe Ventures",
          amount: 10000,
          status: "Completed",
        },
        {
          id: "tx002",
          date: "2024-02-15",
          investor: "Innovate Partners",
          amount: 15000,
          status: "Completed",
        },
        {
          id: "tx003",
          date: "2024-03-20",
          investor: "TechCorp",
          amount: 25000,
          status: "Pending",
        },
        {
          id: 4,
          date: "2024-04-05",
          investor: "Global Ventures",
          amount: 5000,
          status: "Completed",
        },
        {
          id: 5,
          date: "2024-05-10",
          investor: "Future Innovations",
          amount: 10000,
          status: "Pending",
        },
        {
          id: 6,
          date: "2024-06-15",
          investor: "Alpha Capital",
          amount: 7500,
          status: "Cancelled",
        },
      ];
      setPaymentHistory(history);
    };

    fetchPayments();
  }, []);

  return (
    <div className="payments-page-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="payments-content">
          {/* Current Deal Section */}
          <div className="current-deal-section">
            {currentDeal && (
              <>
                <h2 className="section-title">Current Deal Overview</h2>
                <div className="deal-card">
                  <h3>{currentDeal.title}</h3>
                  <p>
                    Amount to Receive: <strong className="amount-total">${currentDeal.amount}</strong>
                  </p>
                  <p>
                    Amount Received: <strong className="amount-received">${currentDeal.received}</strong> (
                    {(
                      (currentDeal.received / currentDeal.amount) *
                      100
                    ).toFixed(2)}
                    %)
                  </p>
                  <p className="deal-deadline">Deadline: {currentDeal.deadline}</p>
                  <div className="progress-bar-container">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${
                          (currentDeal.received / currentDeal.amount) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <button className="btn btn-primary">View Deal Details</button>
                </div>
              </>
            )}
          </div>

          {/* Payment History Section */}
          <div className="payment-history-section">
            <h2 className="section-title">Payment History</h2>
            <div className="table-responsive">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Investor</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory.map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.date}</td>
                      <td>{payment.investor}</td>
                      <td>${payment.amount}</td>
                      <td>
                        <span
                          className={`status-badge status-${payment.status.toLowerCase()}`}
                        >
                          {payment.status === "Completed" && <span className="material-icons status-icon">check_circle</span>}
                          {payment.status === "Pending" && <span className="material-icons status-icon">schedule</span>}
                          {payment.status === "Cancelled" && <span className="material-icons status-icon">cancel</span>}
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Section */}
          <div className="summary-section">
            <h2 className="section-title">Payment Summary</h2>
            <div className="summary-cards">
              <div className="summary-card">
                <h3 className="summary-card-title">Total Amount Raised</h3>
                <p className="summary-card-value">${currentDeal?.received || 0}</p>
              </div>
              <div className="summary-card">
                <h3 className="summary-card-title">Completed Payments</h3>
                <p className="summary-card-value">
                  {paymentHistory.filter((p) => p.status === "Completed").length}
                </p>
              </div>
              <div className="summary-card">
                <h3 className="summary-card-title">Pending Payments</h3>
                <p className="summary-card-value">
                  {paymentHistory.filter((p) => p.status === "Pending").length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
