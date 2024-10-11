import { checkPermission } from "@/services/auth/authSession";
import { checkUserRole } from "@/services/checkUserRole";
import { redirect } from "next/navigation";
import { GetServerSideProps } from "next";

const DashboardAdminPage = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard King</h1>
    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const session = await checkPermission();

//     if (!session || !session.user?.email) {
//       return {
//         redirect: {
//           destination: "/auth/login",
//           permanent: false,
//         },
//       };
//     }

//     const isAdmin = await checkUserRole(session.user.email);
//     if (!isAdmin) {
//       return {
//         redirect: {
//           destination: "/",
//           permanent: false,
//         },
//       };
//     }

//     return {
//       props: { session },
//     };
//   } catch (error) {
//     console.error("Error rendering DashboardAdminPage:", error);
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
// };

export default DashboardAdminPage;
