import DashboardFrame from '../components/DashboardFrame'

export default function OperationDashboardPage() {
  return (
    <DashboardFrame
      title="Operation Dashboard"
      icon="⚙️"
      url="https://your-powerbi-operation-url.com"
      refreshInterval={1000} 
    />
  )
}
