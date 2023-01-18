import React, { useState } from "react";
import "./LowerNavbar.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  // useDisclosure,
} from "@chakra-ui/react";

const LowerNavbar = () => {
  const [womenEthinic, setWomenEthinic] = useState(false);
  const [womenWester, setWomenWester] = useState(false);
  const [men, setMen] = useState(false);
  const [kids, setKids] = useState(false);
  const [homeKitchen, setHomeKitchen] = useState(false);
  const [beautyHealth, setBeautyHealth] = useState(false);
  const [jewelleryAccessories, setJewelleryAccessories] = useState(false);
  const [bagFootwears, setBagFootwears] = useState(false);
  const [electronics, setElectronics] = useState(false);

  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="lower_nav_bar">
        <div className="lower_nav_bar_divs">
          <Menu isOpen={womenEthinic}>
            <MenuButton
              onMouseEnter={() => setWomenEthinic(true)}
              onMouseLeave={() => setWomenEthinic(false)}
            >
              <p className="lower_nav_bar_divs_para">Women Ethinic</p>
            </MenuButton>

            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setWomenEthinic(true)}
                onMouseLeave={() => setWomenEthinic(false)}
              >
                <MenuGroup title="All Women Ethinic" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    View All
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Sarees" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Silk Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cotton Silk Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cotton Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Georgette Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Chiffon Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Satin Sarees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Embroidered Sarees
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Kurtis" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Kurtis
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Anarkali Kurtis
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Rayon Kurtis
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cotton Kurtis
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Embroidered Kurtis
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Kurta Sets" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Kurta Sets
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Suits & Dress Material" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Suits & Dress Material
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cotton Suits
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Embroidered Suits
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Chanderi Suits
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Other Ethinic" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Blouse
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Dupattas
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Lehenga
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Grown
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Ethinic Bottomwear
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={womenWester}>
            <MenuButton
              onMouseEnter={() => setWomenWester(true)}
              onMouseLeave={() => setWomenWester(false)}
            >
              <p className="lower_nav_bar_divs_para">Women Wester</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setWomenWester(true)}
                onMouseLeave={() => setWomenWester(false)}
              >
                <MenuGroup title="Topwear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Tops
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Dresses
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sweaters
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jumpsuits
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Bottomwear" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jeans
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jeggings
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Palazzos
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Shorts
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Skirts
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Innerwear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bra
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Briefs
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Sleepwear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Nightsuits
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    babydolls
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={men}>
            <MenuButton
              onMouseEnter={() => setMen(true)}
              onMouseLeave={() => setMen(false)}
            >
              <p className="lower_nav_bar_divs_para">Men</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setMen(true)}
                onMouseLeave={() => setMen(false)}
              >
                <MenuGroup title="Top Wear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Top Wear
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    tshirts
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Shirts
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Bottom Wear" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Track Pants
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jeans
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Trousers
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Men Accessories" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Men Accessories
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Watches
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Belts
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    wallets
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jewellery
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sunglasses
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bags
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Men Footwear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Casual Shoes
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sports Shoes
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sandals
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Formal Shoes
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Ethinic Wear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Men Kurta
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Ethinic Jacket
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Inner & Sleep Wear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Inner & Sleep Wear
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Vests
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={kids}>
            <MenuButton
              onMouseEnter={() => setKids(true)}
              onMouseLeave={() => setKids(false)}
            >
              <p className="lower_nav_bar_divs_para">Kids</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setKids(true)}
                onMouseLeave={() => setKids(false)}
              >
                <MenuGroup title="Boys & Girls 2+ Year" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Dresses
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Infants 0-2 Years" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Rompers
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Toys & Accessories" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Soft Toys
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Footwares
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Stationary
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Watches
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bags & Backpacks
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Baby Care" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Baby Care
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={homeKitchen}>
            <MenuButton
              onMouseEnter={() => setHomeKitchen(true)}
              onMouseLeave={() => setHomeKitchen(false)}
            >
              <p className="lower_nav_bar_divs_para">Home & Kitchen</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setHomeKitchen(true)}
                onMouseLeave={() => setHomeKitchen(false)}
              >
                <MenuGroup title="Home Furnishing" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bedsheets
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Doormates
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cuurtains & Sheets
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cushion & Cushion Cover
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Mattress Protectors
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Home Decor" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Home Decor
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Stickers
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Clocks
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Showpieces
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Kitchen & Dinning" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Kitchen Storage
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Cookware & Bakeware
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={beautyHealth}>
            <MenuButton
              onMouseEnter={() => setBeautyHealth(true)}
              onMouseLeave={() => setBeautyHealth(false)}
            >
              <p className="lower_nav_bar_divs_para">Beauty & Health</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setBeautyHealth(true)}
                onMouseLeave={() => setBeautyHealth(false)}
              >
                <MenuGroup title="Make Up" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Face
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Eyes
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Lips
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Nails
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Wellness" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sanitizers
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Oral care
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Feminine Hygiene
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Skincare" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Deodorants
                  </MenuItem>
                </MenuGroup>

                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={jewelleryAccessories}>
            <MenuButton
              onMouseEnter={() => setJewelleryAccessories(true)}
              onMouseLeave={() => setJewelleryAccessories(false)}
            >
              <p className="lower_nav_bar_divs_para">Jewellery & Accessories</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setJewelleryAccessories(true)}
                onMouseLeave={() => setJewelleryAccessories(false)}
              >
                <MenuGroup title="Jewellery" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jewellery Ser
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Earrings
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Mangalsutras
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Studs
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bangles
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Neckless
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Rings
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Anklets
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Women Accessories" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bags
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Watches
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Hair Accessories
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sunglasses
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Socks
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={bagFootwears}>
            <MenuButton
              onMouseEnter={() => setBagFootwears(true)}
              onMouseLeave={() => setBagFootwears(false)}
            >
              <p className="lower_nav_bar_divs_para">Bag & Footwears</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setBagFootwears(true)}
                onMouseLeave={() => setBagFootwears(false)}
              >
                <MenuGroup title="Top Wear" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Top Wear
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    tshirts
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Shirts
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Bottom Wear" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Track Pants
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jeans
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Trousers
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Men Accessories" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Men Accessories
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Watches
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Belts
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    wallets
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Jewellery
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sunglasses
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Bags
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Men Footware" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Casual Shoes
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sports Shoes
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Sandals
                  </MenuItem>

                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Formal Shoes
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>

          <Menu isOpen={electronics}>
            <MenuButton
              onMouseEnter={() => setElectronics(true)}
              onMouseLeave={() => setElectronics(false)}
            >
              <p className="lower_nav_bar_divs_para">Electronics</p>
            </MenuButton>
            <MenuList marginTop="4px">
              <div
                className="xyz"
                onMouseEnter={() => setElectronics(true)}
                onMouseLeave={() => setElectronics(false)}
              >
                <MenuGroup title="Mobile & Accessories" color="#da60b0">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Mobile & Accessories
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Smartwatches
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Mobile Holders
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Mobile cases and covers
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Appliancees" color="#da60b0" bgColor="">
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    All Appliancees
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Grooming
                  </MenuItem>
                  <MenuItem fontSize={13} marginLeft={1} color="grey">
                    Home Appliancees
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
              </div>
            </MenuList>
          </Menu>
        </div>
      </div>

      <hr />
    </>
  );
};

export default LowerNavbar;
