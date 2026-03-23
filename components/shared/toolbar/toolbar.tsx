

import styles from './toolbar.module.css'
import Palette from '@/public/palette_30dp_000000_FILL1_wght200_GRAD0_opsz24.svg';
import UserPic from '@/public/account_circle_30dp_000000_FILL1_wght200_GRAD0_opsz24.svg';
import TextDocument from '@/public/text_snippet_30dp_000000_FILL0_wght200_GRAD0_opsz24.svg';
import Settings from '@/public/settings_30dp_000000_FILL1_wght200_GRAD0_opsz24.svg';
import LinksHub from '@/public/graph_5_30dp_000000_FILL0_wght200_GRAD0_opsz24.svg';


import Image from 'next/image';



export default function Toolbar({isDesktopActive, setIsDesktopActive, openedTool, setOpenedTool}: {isDesktopActive: boolean, setIsDesktopActive: React.Dispatch<React.SetStateAction<boolean>>, openedTool: string | null, setOpenedTool: React.Dispatch<React.SetStateAction<string | null>>}) {
    const activeTool = (toolCode: string) => {
    if(isDesktopActive == true && openedTool == toolCode){
        setIsDesktopActive(false);
        setOpenedTool(null);
    }else if(isDesktopActive == false){
        setIsDesktopActive(true);
        setOpenedTool(toolCode);
    }else if(isDesktopActive == true){
        setOpenedTool(toolCode);
    }
    
}
    
    return (
        <div className={styles.containerToolbar}>
            <div className={styles.containerTool}>
                <Image className={styles.containerToolImage} src={Palette} alt="Palette" />
                <div className={styles.backgroundToolHover}></div>
            </div>
            <div className={styles.containerTool}>
                <Image className={styles.containerToolImage} src={UserPic} alt="User" />
                <div className={styles.backgroundToolHover}></div>
            </div>
            <div className={styles.containerTool}>
                <Image className={styles.containerToolImage} src={Settings} alt="Settings" />
                <div className={styles.backgroundToolHover}></div>
            </div>
            <div className={styles.separationToolbar}></div>
            <div className={`${styles.containerTool} ${openedTool === 'notes' ? styles.activeTool : ''}`} onClick={() => activeTool('notes')}>
                <Image className={styles.containerToolImage} src={TextDocument} alt="Text Document" />
                <div className={styles.backgroundToolHover}></div>
            </div>
            <div className={`${styles.containerTool} ${openedTool === 'linksHub' ? styles.activeTool : ''}`} onClick={() => activeTool('linksHub')}>
                <Image className={styles.containerToolImage} src={LinksHub} alt="Links Hub" />
                <div className={styles.backgroundToolHover}></div>
            </div>
        </div>
    )
}