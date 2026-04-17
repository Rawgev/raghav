export function useGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5  && hour < 12) return "Good morning! How've you been?"
  if (hour >= 12 && hour < 17) return "Good afternoon! How've you been?"
  if (hour >= 17 && hour < 21) return "Good evening! How've you been?"
  return "Good night! How've you been?"
}
