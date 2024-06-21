import Image from "next/image";
import styles from "./page.module.css";
import logo from '../res/nova-main-logo.png';
import { Button } from "@/components/Button/Button";
import { Drawer } from "@/components/Drawer/Drawer";
import { InfoCard } from "@/components/Card/InfoCard";
import { ServiceCard } from "@/components/Card/ServiceCard";
import { SAMPLE_STATS, StatCard } from "@/components/Card/StatCard";
import { Spacer } from "@/components/Spacer/Spacer";
import { ViewportObserver } from "@/components/ViewportObserver/ViewportObserver";

export default function Home() {
  return (
      <div className="Page-container">
        <div className="Logo Main-logo">
          <img src={logo.src} alt="nova"/>
        </div>
        <div className="Main-actions-container">
          <Button label="Protect Yourslef" variant="Filled" theme="Primary"  />
          <Button label="Need help now?" variant="Ghost" theme="Primary" />
        </div>
        <Spacer size={4} />
        <section>
          <h3 className="Heading large">Impoartant Statistics</h3>
          <Spacer size={2} />
          {SAMPLE_STATS.map(stat => (
            /*{ <ViewportObserver key={stat.title}> }*/
              <StatCard {...stat}  />
            /* </ViewportObserver> */
          ))}
        </section>
      </div>
  );
}
