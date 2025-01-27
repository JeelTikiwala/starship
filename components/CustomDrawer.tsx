import { Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton,
    Button } from "@chakra-ui/react";
import styles from "../styles/CustomDrawer.module.css";
import Link from "next/link";

type CustomDrawerProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CustomDrawer = ({ isOpen, onClose }: CustomDrawerProps) => {
    return(<>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerContent
            bgColor="#000"
            borderLeft="2px solid white"

        >
            <DrawerCloseButton color="#fff" />
                <DrawerBody className={styles.dBody}>
                    <Link href="/leaderboard">
                        <Button className={styles.dButton}>LEADERBOARD</Button>
                    </Link>
                    <Link href="/rewards">
                        <Button className={styles.dButton}>REWARDS</Button>
                    </Link>
                    <Link href="/how-it-works">
                        <Button className={styles.dButton}>HOW IT WORKS</Button>
                    </Link>
                    <Link href="/documentation">
                        <Button className={styles.dButton}>DOCUMENTATION</Button>
                    </Link>

                </DrawerBody>
        </DrawerContent> 
        </Drawer>
        </>)
}
