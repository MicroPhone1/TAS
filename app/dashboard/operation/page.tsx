import DashboardFrame from '../components/DashboardFrame'

export default function OperationDashboardPage() {
  return (
    <DashboardFrame
      title="Operation Dashboard"
      icon="⚙️"
      url="https://app.powerbi.com/view?r=eyJrIjoiODk3NjAyOGUtZGQ4NC00ZTc1LTgzYjktYTEwNDI2NGQ5ZmQ0IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
      refreshInterval={60000} 
    />
  )
}
