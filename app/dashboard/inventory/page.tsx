import DashboardFrame from '../components/DashboardFrame'

export default function InventoryDashboardPage() {
  return (
    <DashboardFrame
      title="Inventory Dashboard"
      icon="📦"
      url="https://app.powerbi.com/view?r=eyJrIjoiZTA2YzViZDYtZmIwYS00Y2QzLWJlY2QtMWYxOGVjZjljNzI0IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
      refreshInterval={1000} 
    />
  )
}
