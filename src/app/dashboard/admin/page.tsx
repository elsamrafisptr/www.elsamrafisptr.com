import { checkPermission } from "@/services/auth/authSession";
import { checkUserRole } from "@/services/checkUserRole";
import { redirect } from "next/navigation";

// Async component for checking admin permission and rendering the dashboard
const DashboardAdminPage = async () => {
  try {
    // Check if the user is authenticated
    const session = await checkPermission();

    // Ensure the session exists
    if (!session || !session.user?.email) {
      return redirect("/auth/login"); // Redirect to login if no session
    }

    // Check if the user has admin privileges
    const isAdmin = await checkUserRole(session.user.email);
    if (!isAdmin) {
      return redirect("/"); // Redirect to homepage if not admin
    }

    // If the user is an admin, render the dashboard
    return (
      <div>
        <h1>Welcome to the Dashboard King {session.user.email}</h1>
      </div>
    );
  } catch (error) {
    console.error("Error rendering DashboardAdminPage:", error);
    return redirect("/"); // Redirect to homepage on error
  }
};

export default DashboardAdminPage;
