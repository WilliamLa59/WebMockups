import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button} from "./components/buttonStyles";

export const newTheme = extendTheme({
    
    colors: {
        primary1: "hsl(356, 100%, 66%)",
        primary2: "hsl(355, 100%, 74%)",
        white: "hsl(0, 0%, 100%)",
        hoverwhite: "hsl(0, 0%, 100%, 0.25)"
    },

    components: {
        Button,
    }

});