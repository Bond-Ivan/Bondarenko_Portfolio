import { t } from "i18next";
import { ReactElement } from "react";
import { StackList, StackItem, StackItemIcon, StackItemTitle } from "../../Main/Stack/Stack.styled";
import { ProjectCarTechnologydSection, ProjectCardTechnologyContainer, ProjectCardTechnologyTitle } from "./ProjectCardTechnology.styled";

const ProjectCardTechnology = (): ReactElement => {
    return (
        <ProjectCarTechnologydSection>
            <ProjectCardTechnologyContainer>
                <div>
                    <ProjectCardTechnologyTitle>{t("projects.card.technology")}</ProjectCardTechnologyTitle>
                    <StackList>
                        <StackItem>
                            <StackItemIcon viewBox="0 0 128 128"><path fill="aliceblue" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
                            </StackItemIcon>
                            <StackItemTitle>HTML5</StackItemTitle>
                        </StackItem>
                        <StackItem>
                            <StackItemIcon viewBox="0 0 128 128"><path fill="aliceblue" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
                            </StackItemIcon>
                            <StackItemTitle>CSS3</StackItemTitle>
                        </StackItem>
                        <StackItem>
                            <StackItemIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-whiteidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>file_type_scss</title><path d="M16.171,18.7c-.481.221-1.008.509-2.063,1.088-.4.225-.818.45-1.207.662-.027-.027-.055-.061-.082-.089-2.087-2.23-5.947-3.805-5.783-6.8.061-1.091.436-3.955,7.413-7.433,5.742-2.83,10.311-2.046,11.1-.307C26.683,8.3,23.1,12.913,17.17,13.582a4.469,4.469,0,0,1-3.751-.948c-.314-.341-.361-.361-.477-.293-.191.1-.068.409,0,.586a3.5,3.5,0,0,0,2.141,1.684,11.4,11.4,0,0,0,6.956-.689c3.594-1.391,6.4-5.258,5.578-8.5-.825-3.287-6.281-4.371-11.443-2.537a26,26,0,0,0-8.79,5.047c-2.844,2.66-3.294,4.972-3.11,5.94.662,3.437,5.4,5.674,7.3,7.331-.1.055-.184.1-.259.143-.948.471-4.562,2.36-5.463,4.358-1.023,2.264.164,3.887.948,4.105a5.832,5.832,0,0,0,6.281-2.544,6.3,6.3,0,0,0,.559-5.8,5.03,5.03,0,0,1,.716-.477c.484-.286.945-.568,1.354-.786l0,0a10.475,10.475,0,0,1,4.475-.989c3.246.382,3.887,2.407,3.764,3.26a2.157,2.157,0,0,1-1.03,1.459c-.225.143-.3.191-.28.293.027.15.136.143.327.116a2.535,2.535,0,0,0,1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.753,7.753,0,0,0-2.946.587q-.225.093-.437.2Zm-4.825,7.839c-1.078,1.173-2.578,1.616-3.226,1.241-.7-.4-.423-2.135.9-3.376a17.18,17.18,0,0,1,2.53-1.889c.157-.1.389-.232.668-.4.048-.027.075-.041.075-.041l.164-.1A4.658,4.658,0,0,1,11.346,26.539Z" fill="#FFFFFF"></path></g>
                            </StackItemIcon>
                            <StackItemTitle>SCSS</StackItemTitle>
                        </StackItem>
                        <StackItem>
                            <StackItemIcon fill="#FFFFFF" viewBox="-6.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m9.288 18.319c-1.027.392-2.216.619-3.457.619-.145 0-.289-.003-.433-.009l.02.001c-.119.005-.259.008-.4.008-1.263 0-2.473-.227-3.592-.641l.072.023.703 1.173.282 3.753q0 .328.868.539c.587.137 1.262.216 1.955.216.047 0 .095 0 .142-.001h-.007c.044.001.097.001.149.001.687 0 1.356-.077 1.998-.224l-.06.012q.868-.211.868-.539l.234-3.753zm-8.585-6c.171-.571.411-1.07.716-1.52l-.012.019c.293-.455.689-.821 1.156-1.071l.017-.008c.117-.053.254-.084.399-.084.181 0 .351.049.497.133l-.005-.003c.132.069.242.164.326.279l.002.003c.07.076.12.172.14.278l.001.004c.013.037.02.08.02.125 0 .066-.016.128-.045.182l.001-.002c-.035.07-.106.117-.188.118q-.118 0-.305-.328-.282-.516-.8-.141c-.336.253-.606.574-.793.945l-.007.015c-.215.375-.405.81-.547 1.267l-.013.047c-.067.162-.105.351-.105.549 0 .147.021.288.061.422l-.003-.01c.048.085.137.142.24.142.297-.059.549-.22.725-.443l.002-.003c.239-.226.448-.48.624-.758l.01-.016.234-.703q.094-.234.282-.234t.188.258c-.021.268-.088.515-.194.74l.006-.013c-.097.228-.194.509-.271.798l-.011.047-.378 1.216c-.033.099-.073.184-.121.263l.003-.006c-.028.064-.088.11-.159.118h-.001c-.002 0-.005 0-.008 0-.055 0-.104-.028-.132-.07v-.001c-.022-.053-.035-.114-.035-.178 0-.037.004-.073.012-.107l-.001.003c.106-.474.227-.876.373-1.264l-.021.064-.328.328c-.249.28-.594.47-.982.52l-.008.001c-.01.001-.021.001-.033.001-.126 0-.244-.035-.345-.096l.003.002.375 3.705q.047.234 1.219.516c.85.209 1.826.328 2.83.328h.082-.004.078c1.004 0 1.98-.12 2.915-.345l-.084.017q1.126-.282 1.219-.516l.516-4.409-.094.047c-.226.252-.49.463-.785.626l-.015.008c-.118.053-.256.083-.401.083-.056 0-.111-.005-.165-.013l.006.001q-.285-.047-.285-.282c.098-.335.277-.62.515-.843l.001-.001.141-.234q.234-.234.234-.352t-.188-.094c-.147.025-.275.092-.375.188-.15.138-.282.292-.394.46l-.006.009c-.144.209-.277.448-.389.699l-.011.028-.188.375-.46 1.312c-.059.09-.138.161-.231.21l-.003.002c-.033.022-.074.036-.117.036s-.084-.013-.118-.036h.001c-.054-.036-.089-.096-.091-.164l.047-.141c.122-.354.249-.648.394-.932l-.019.041.328-.703q.047-.188.047-.141c-.183.2-.401.365-.644.487l-.013.006c-.1.051-.218.081-.343.081-.045 0-.088-.004-.131-.011l.005.001c-.118-.025-.209-.116-.234-.232v-.002l-.047-.094c-.197.201-.47.326-.773.328q-.305-.047-.16-.703c-.174.41-.569.694-1.031.703h-.001c-.017.003-.037.004-.056.004-.162 0-.302-.097-.365-.236l-.001-.003c-.004-.045-.006-.097-.006-.15 0-.34.085-.66.236-.94l-.005.011v-.047q.141-.328.328-.75.141-.282.375-.188h.047q.141.094.047.375l-.141.188c-.11.205-.22.452-.314.708l-.014.043q-.094.422.07.422c.129-.004.25-.038.356-.096l-.004.002c.209-.152.376-.349.489-.577l.004-.009c.107-.182.195-.393.254-.616l.004-.018.094-.24q.094-.234.211-.234c.083.001.158.037.211.093q.094.094 0 .328l-.328.75c-.073.164-.123.354-.14.553v.007q0 .188.328.047c.126-.049.234-.112.33-.19l-.002.002q.047-.188.75-2.017l.469-1.173c.043-.137.169-.235.318-.235h.011-.001c.055.01.103.035.141.071q.094.07.047.258l-.847 2.026q-.328.844-.4 1.076t.028.24q.328 0 1.079-.8l.047-.047.141-.328c.033-.162.098-.305.189-.428l-.002.003q.094-.094.141-.094.188 0 .188.16v.007c0 .106-.017.209-.049.304l.002-.007.234-.234c.186-.217.46-.354.766-.354.019 0 .039.001.058.002h-.003c.198.014.353.178.353.378 0 .008 0 .015-.001.023v-.001c-.104.426-.318.792-.609 1.079l-.094.047c-.058.081-.106.174-.139.274l-.002.007q0 .047.094.047c.129-.034.24-.1.328-.188l.8-.703.703-6.379c-.9.327-1.939.516-3.022.516-.026 0-.052 0-.079 0h.004c-.673.045-1.459.07-2.252.07s-1.578-.026-2.358-.076l.106.005c-.022 0-.048 0-.075 0-1.083 0-2.122-.189-3.085-.536l.063.02zm10.179-6.286h-.047q0-.188-.868-.375c-.657-.136-1.438-.236-2.234-.28l-.042-.002.469-1.92 2.674-2.862q.141-.094-.234-.422c-.073-.079-.169-.136-.278-.159l-.004-.001q-.141-.023-.188.023l-2.859 2.993-.61 2.298-1.219-.048c-.086-.001-.187-.002-.289-.002-1.255 0-2.489.086-3.698.252l.14-.016q-1.594.234-1.594.516 0 .469 2.814.657c.786.06 1.703.094 2.627.094s1.841-.034 2.748-.101l-.121.007q2.814-.186 2.814-.656zm-3.28.234q0 .047-.188.118c-.124.045-.268.071-.418.071-.01 0-.02 0-.029 0h.001c-.008 0-.018 0-.028 0-.15 0-.293-.026-.427-.073l.009.003q-.188-.07-.188-.118t.141-.094l-.047.047q0 .094.516.094t.516-.094l.047-.047q.091.044.091.09z"></path></g>
                            </StackItemIcon>
                            <StackItemTitle>Gulp</StackItemTitle>
                        </StackItem>
                        <StackItem>
                            <StackItemIcon fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" stroke="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51e7e7e"> <path display="inline" d="M218.195,257.521c0,64.719,4.624,119.1-27.309,151.283c-17.961,18.105-46.301,28.772-81.17,28.772 c-57.192,0-88.947-27.862-109.215-66.416c19.512-12.459,39.452-24.502,59.775-36.154c8.292,23.188,36.291,49.258,67.888,33.21 c20.027-10.18,17.715-41.04,17.715-74.537c0-69.549,0-149.78,0-212.528c-0.063-1.044-0.125-2.087,0.732-2.214 c23.866,0,47.728,0,71.585,0C218.195,134.832,218.195,198.069,218.195,257.521z M399.727,215.462 c-18.247-7.814-40.928-17.058-46.488-33.952c-6.233-18.934,4.396-34.533,16.231-39.841c26.023-11.688,57.038,7.556,63.463,27.301 c19.583-11.657,39.103-23.384,56.826-36.896c-20.826-34.584-51.354-59.342-107.003-57.561 c-30.64,0.979-53.657,10.652-70.841,25.088c-16.771,14.085-29.721,33.854-31.737,61.989 c-6.025,84.212,56.988,105.708,110.695,129.137c16.93,7.385,35.751,14.842,43.54,29.517c16.061,30.282-12.389,50.26-36.898,52.397 c-39.336,3.427-65.858-19.587-81.175-43.54c-19.133,11.86-39.938,22.045-58.298,34.683c25.537,44.908,67.409,73.98,132.831,73.793 c66.74-0.188,116.219-32.366,120.281-92.977C516.677,262.216,454.956,239.105,399.727,215.462z"> </path> </g> </g>
                            </StackItemIcon>
                            <StackItemTitle>JavaScript</StackItemTitle>
                        </StackItem>
                        <StackItem>
                            <StackItemIcon viewBox="0 0 128 128"><path fill="aliceblue" d="M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"></path>
                            </StackItemIcon>
                            <StackItemTitle>Git</StackItemTitle>
                        </StackItem>
                    </StackList>
                </div>
            </ProjectCardTechnologyContainer>
        </ProjectCarTechnologydSection>
    )
};

export default ProjectCardTechnology;