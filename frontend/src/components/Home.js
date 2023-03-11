import { Button, Heading } from "@chakra-ui/react";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'


function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <Heading className="pb-4">Nov način učenja programiranja v sloveščini</Heading>
                    <p>Spletna stran za učenje programiranja v slovenskem jeziku. Statistika danes pravi, da ni veliko lekcij za programiranje v slovenščini. Spletna stran je namenjena tako izkušenim kot neizkušenim programerjem, ki morda nimajo zadostnega znanja angleščine, da bi uporabljali že obstoječe vire na spletu. Za uporabnike so na voljo različne lekcije, preizkusi znanja ter kvizi v različnih programskih jezikih, da lahko lažje utrjujejo svoje znanje ali pa se naučijo nekaj novega v programiranju. Nas cilj je, da bolj razvijemo slovensko programiranje.</p>
                </div>

                <div className="col-md-6">
                    <img src="/images/progSlika.jpg" width="500px;"></img>
                </div>
            </div>
            
        </div>
    );
}
export default Home;