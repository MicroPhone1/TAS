import DashboardFrame from '../components/DashboardFrame'

export default function InventoryDashboardPage() {
  return (
    <DashboardFrame
      title="Inventory Dashboard"
      icon="📦"
      url="https://app.powerbi.com/view?r=eyJrIjoiZDIxYTJkZmItODRiNy00YmQ0LTg2ZTYtYjQxMzY1ZjczMzk4IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
      refreshInterval={60000} 
    />
  )
}
