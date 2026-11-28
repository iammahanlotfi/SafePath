import RoutingWelcome from "@/components/modules/routing/RoutingWelcome/RoutingWelcome"
import RoutingForm from "@/components/modules/routing/RoutingForm/RoutingForm";
import RoutingResult from "@/components/modules/routing/RoutingResult/RoutingResult";
import RouteMapPreview from "@/components/modules/routing/RouteMapPreview/RouteMapPreview";

import styles from "./RoutingPage.module.css";

function RoutingPage() {
  return (
    <div className={styles.container}>
        <RoutingWelcome/>
        <RoutingForm>
          <RoutingResult/>
        </RoutingForm>
        <RouteMapPreview/>
    </div>
  )
}

export default RoutingPage