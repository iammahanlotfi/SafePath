import WelcomeSection from "@/components/modules/home/WelcomeSection/WelcomeSection";
import HeroSection from "@/components/modules/home/HeroSection/HeroSection";
import QuickStats from "@/components/modules/home/QuickStats/QuickStats";
import MapPreview from "@/components/modules/home/MapPreview/MapPreview";
import NearestShelters from "@/components/modules/home/NearestShelters/NearestShelters";
import SafetyNotice from "@/components/modules/home/SafetyNotice/SafetyNotice";
import RecentActivities from "@/components/modules/home/RecentActivities/RecentActivities";

import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <WelcomeSection />
      <HeroSection />
      <QuickStats />
      <div className={styles.dashboardGrid}>
        <MapPreview />
        <NearestShelters />
      </div>
      <div className={styles.bottomGrid}>
        <SafetyNotice />
        <RecentActivities />
      </div>
    </div>
  );
}
