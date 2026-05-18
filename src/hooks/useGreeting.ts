export function useGreeting(): string {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return "Good morning — hope you're doing well."
  }

  if (hour >= 12 && hour < 17) {
    return "Good afternoon — welcome aboard."
  }

  if (hour >= 17 && hour < 21) {
    return "Good evening — great to see you here."
  }

  return "Working late tonight?"
}