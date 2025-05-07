import DashboardFrame from '../components/DashboardFrame'

export default function FinancialDashboardPage() {
  return (
    <DashboardFrame
      title="Financial Dashboard"
      icon="💰"
      url="https://app.powerbi.com/view?r=eyJrIjoiMmQ3MTgyNDQtMzI5NC00MWQ0LTk5OWEtODYzMjRlYzA5ODg3IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D&pageName=b6db90cd6dc4c76800a6"
      refreshInterval={60000} 
    />
  )
}
