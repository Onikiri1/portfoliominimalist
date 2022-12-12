import { SiAdobephotoshop, SiBlender, SiAdobepremierepro, SiAdobeaftereffects, SiAdobeillustrator} from "react-icons/si";

export const SkillsData = [
  {
    type: "Adobe Suite",
    desc: "Poseo completo conocimiento en la suite de Adobe, desde Photoshop hasta Illustrator",
    list: [
      {
        name: "",
        icon: <SiAdobephotoshop />,
      },
      {
        name: "",
        icon: <SiAdobeillustrator />,
      },
      {
        name: "",
        icon: <SiAdobeaftereffects/>,
      },
      {
        name: "",
        icon: <SiAdobepremierepro/>,
      },
      
    ],
  },
  {
    type: '3D & Otros',
    desc: "Poseo basto conocimiento realizando obras 3D en Blender, incluyendo simulaciones y renders comerciales.",
    list : [
        {
            name:'',
            icon: <SiBlender/>,
        },
        
    ]
  }
];
