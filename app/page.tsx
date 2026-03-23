"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

import Toolbar from '../components/shared/toolbar/toolbar';
import Notes from '../components/shared/tools/notes/page';
import { useClock } from '../lib/clock';

export default function Home(){
    const [isDesktopActive, setIsDesktopActive] = useState(false);
    const [openedTool, setOpenedTool] = useState<string | null>(null);
    const time = useClock();
    return(
      <main className={`${styles.main} ${isDesktopActive ? styles.mainDesktopActive : styles.mainDesktopInactive}`}>
          <div className={styles.containerTime}>
            <span className={styles.hourAndMinutes}>{time}</span>
            <span className={styles.date}>Mar, 22 de Enero 2026</span>
          </div>
          {isDesktopActive && 
            <div className={`${styles.desktop} ${isDesktopActive ? styles.desktopActive : styles.desktopInactive}`}>
              {openedTool === 'notes' && <Notes />}
              
            </div>
          }
          <div className={styles.containerToolbar}>
            <Toolbar isDesktopActive={isDesktopActive} setIsDesktopActive={setIsDesktopActive} openedTool={openedTool} setOpenedTool={setOpenedTool} />
          </div>
      </main>
    )
}