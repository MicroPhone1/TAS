import DashboardFrame from '../components/DashboardFrame'

export default function FinancialDashboardPage() {
  return (
    <DashboardFrame
      title="Financial Dashboard"
      icon="💰"
      url="https://app.powerbi.com/view?r=eyJrIjoiMDMwMzY3Y2ItZmU0Yi00YjQ2LTk3MjAtNTY0MDIxN2Q4YzMyIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
      refreshInterval={60000} 
    />
  )
}
