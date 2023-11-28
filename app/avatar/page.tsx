import Breadcrumb from "@/components/Common/Breadcrumb";
import Avatar from "@/components/Avatar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const AvatarPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Avatar"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Avatar />
    </>
  );
};

export default AvatarPage;
