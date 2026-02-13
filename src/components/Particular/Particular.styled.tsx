import Particles from "@tsparticles/react";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export default StyledParticles;