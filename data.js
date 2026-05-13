/* ═══════════════════════════════════════════════════════
   QUESTION BANK
   All 400 questions from all 5 chapters
═══════════════════════════════════════════════════════ */
const QUESTION_BANK = {

  /* ─── UNIT 1: Environment & Climate Change (80 Qs) ── */
  1: {
    title: "Environment & Climate Change",
    questions: [
      { q: 'The word "Environment" is derived from which language?', opts: ['Latin','French','Greek','German'], ans: 1, expl: 'The word "Environment" is derived from the French word "Environner" meaning to surround.' },
      { q: 'Environment mainly refers to the ______ of surroundings.', opts: ['Artificial system','Natural system','Total surroundings','Living organisms only'], ans: 2, expl: 'Environment refers to the total surroundings — both living and non-living components.' },
      { q: 'Environmental studies is mainly an ______ subject.', opts: ['Technical','Interdisciplinary','Medical','Industrial'], ans: 1, expl: 'Environmental studies is interdisciplinary as it draws from biology, chemistry, physics, social sciences, etc.' },
      { q: 'Which of the following is NOT a component of environment?', opts: ['Abiotic','Biotic','Social','Mechanical'], ans: 3, expl: '"Mechanical" is not a standard component of the environment. The main components are abiotic, biotic, and social.' },
      { q: 'Which component of environment includes plants and animals?', opts: ['Abiotic component','Biotic component','Atmospheric component','Geological component'], ans: 1, expl: 'The biotic component includes all living organisms — plants, animals, and microorganisms.' },
      { q: 'Non-living components of the environment are called:', opts: ['Biotic components','Abiotic components','Ecosystem components','Organic components'], ans: 1, expl: 'Abiotic components are the non-living parts of the environment such as soil, water, air, and minerals.' },
      { q: 'The term biodiversity refers to:', opts: ['Variety of animals only','Variety of plants only','Variety of living organisms','Variety of soil types'], ans: 2, expl: 'Biodiversity refers to the variety of all living organisms on Earth.' },
      { q: 'Which process removes carbon dioxide from the atmosphere?', opts: ['Respiration','Photosynthesis','Combustion','Decomposition'], ans: 1, expl: 'Photosynthesis is the process by which plants absorb CO₂ and release O₂.' },
      { q: 'Conversion of forest land into non-forest land is called:', opts: ['Afforestation','Deforestation','Desertification','Urbanization'], ans: 1, expl: 'Deforestation is the conversion of forested land into non-forested land for agriculture, urban use, etc.' },
      { q: 'Creation of forest on barren land is known as:', opts: ['Deforestation','Reforestation','Afforestation','Desertification'], ans: 2, expl: 'Afforestation is planting trees on land that has never had forest or has been without forest for a long time.' },
      { q: 'Which of the following organisms break down organic matter?', opts: ['Producers','Consumers','Decomposers','Herbivores'], ans: 2, expl: 'Decomposers (bacteria, fungi) break down dead organic matter and return nutrients to the ecosystem.' },
      { q: 'Which of the following are producers in an ecosystem?', opts: ['Plants','Animals','Bacteria','Fungi'], ans: 0, expl: 'Plants are the primary producers as they manufacture food through photosynthesis.' },
      { q: 'The place where organisms live is called:', opts: ['Habitat','Biome','Ecosystem','Community'], ans: 0, expl: 'A habitat is the natural environment in which an organism lives.' },
      { q: 'The major gases responsible for global warming are called:', opts: ['Noble gases','Greenhouse gases','Industrial gases','Neutral gases'], ans: 1, expl: 'Greenhouse gases (CO₂, CH₄, N₂O, etc.) trap heat in the atmosphere, causing global warming.' },
      { q: 'Which gas contributes most to the greenhouse effect?', opts: ['Oxygen','Nitrogen','Carbon dioxide','Hydrogen'], ans: 2, expl: 'Carbon dioxide (CO₂) is the primary greenhouse gas contributing to global warming.' },
      { q: 'Climate change refers to:', opts: ['Daily temperature change','Seasonal weather change','Long-term change in weather patterns','Sudden weather changes'], ans: 2, expl: 'Climate change refers to long-term shifts in global temperatures and weather patterns.' },
      { q: 'Which layer of atmosphere contains the ozone layer?', opts: ['Troposphere','Stratosphere','Mesosphere','Thermosphere'], ans: 1, expl: 'The ozone layer is found in the stratosphere, 15–35 km above Earth\'s surface.' },
      { q: 'The thinning of the ozone layer is mainly caused by:', opts: ['CO₂','CFCs','Oxygen','Nitrogen'], ans: 1, expl: 'Chlorofluorocarbons (CFCs) release chlorine atoms that destroy ozone molecules.' },
      { q: 'Acid rain is mainly caused by the presence of:', opts: ['Carbon dioxide','Sulfur dioxide and nitrogen oxides','Oxygen and hydrogen','Methane'], ans: 1, expl: 'SO₂ and NOₓ react with water vapor in the atmosphere to form sulfuric and nitric acids.' },
      { q: 'Which international agreement aims to protect the ozone layer?', opts: ['Kyoto Protocol','Paris Agreement','Montreal Protocol','Stockholm Declaration'], ans: 2, expl: 'The Montreal Protocol (1987) is an international treaty designed to phase out ODS that deplete the ozone layer.' },
      { q: 'Which sphere of the Earth contains water bodies like oceans, rivers, and lakes?', opts: ['Lithosphere','Hydrosphere','Atmosphere','Biosphere'], ans: 1, expl: 'The hydrosphere includes all water on Earth — oceans, rivers, lakes, glaciers, and groundwater.' },
      { q: 'The solid outer layer of the Earth is called:', opts: ['Atmosphere','Hydrosphere','Lithosphere','Biosphere'], ans: 2, expl: 'The lithosphere is the solid, rocky outer layer of the Earth.' },
      { q: 'The zone where life exists on Earth is known as:', opts: ['Lithosphere','Atmosphere','Biosphere','Hydrosphere'], ans: 2, expl: 'The biosphere is the zone of life on Earth, encompassing the lithosphere, hydrosphere, and lower atmosphere.' },
      { q: 'The lowest layer of the atmosphere where weather occurs is:', opts: ['Mesosphere','Thermosphere','Troposphere','Stratosphere'], ans: 2, expl: 'The troposphere is the lowest layer of the atmosphere where all weather phenomena occur.' },
      { q: 'Which of the following is a renewable resource?', opts: ['Coal','Petroleum','Solar energy','Natural gas'], ans: 2, expl: 'Solar energy is renewable because it is continuously replenished by the sun.' },
      { q: 'The greenhouse effect helps to:', opts: ['Cool the Earth','Maintain Earth\'s temperature suitable for life','Destroy ozone layer','Produce acid rain'], ans: 1, expl: 'The natural greenhouse effect maintains Earth\'s average temperature at about 15°C, making life possible.' },
      { q: 'Which gas contributes the most to the greenhouse effect naturally?', opts: ['Methane','Carbon dioxide','Water vapour','Nitrous oxide'], ans: 2, expl: 'Water vapour is the most abundant and strongest natural greenhouse gas.' },
      { q: 'Which of the following is a major cause of global warming?', opts: ['Afforestation','Industrial emissions','Rainfall','Photosynthesis'], ans: 1, expl: 'Industrial emissions release large amounts of CO₂ and other greenhouse gases, accelerating global warming.' },
      { q: 'Which organization studies global climate change scientifically?', opts: ['WHO','IPCC','UNESCO','WTO'], ans: 1, expl: 'The IPCC (Intergovernmental Panel on Climate Change) assesses scientific information on climate change.' },
      { q: 'Which of the following effects is caused by global warming?', opts: ['Decrease in sea level','Increase in glacier formation','Rising sea levels','Decrease in temperature'], ans: 2, expl: 'Global warming causes melting of glaciers and ice caps, leading to rising sea levels.' },
      { q: 'Acid rain mainly damages:', opts: ['Buildings and monuments','Trees and plants','Aquatic life','All of the above'], ans: 3, expl: 'Acid rain damages buildings, corrodes metals, harms forests and crops, and kills aquatic life.' },
      { q: 'Which pollutant is mainly responsible for acid rain?', opts: ['Carbon monoxide','Sulfur dioxide','Hydrogen','Oxygen'], ans: 1, expl: 'Sulfur dioxide (SO₂), mainly from burning coal, is the primary cause of acid rain.' },
      { q: 'Ozone protects life on Earth from:', opts: ['Infrared radiation','Visible light','Ultraviolet radiation','X-rays'], ans: 2, expl: 'The ozone layer absorbs harmful ultraviolet (UV-B and UV-C) radiation from the sun.' },
      { q: 'The Montreal Protocol was adopted in:', opts: ['1985','1987','1992','1997'], ans: 1, expl: 'The Montreal Protocol was adopted on September 16, 1987.' },
      { q: 'Nuclear energy is produced mainly through:', opts: ['Chemical reaction','Nuclear fission','Combustion','Photosynthesis'], ans: 1, expl: 'Nuclear energy is produced through fission — splitting of heavy nuclei like Uranium-235.' },
      { q: 'The splitting of a heavy nucleus into smaller nuclei is called:', opts: ['Fusion','Radiation','Fission','Combustion'], ans: 2, expl: 'Nuclear fission is the splitting of a heavy nucleus (like uranium) into lighter nuclei, releasing energy.' },
      { q: 'The combining of two light nuclei to form a heavier nucleus is called:', opts: ['Fission','Fusion','Ionization','Radiation'], ans: 1, expl: 'Nuclear fusion combines light nuclei (like hydrogen) to form a heavier nucleus, releasing tremendous energy.' },
      { q: 'Radiation consisting of helium nuclei is called:', opts: ['Alpha radiation','Beta radiation','Gamma radiation','Infrared radiation'], ans: 0, expl: 'Alpha particles consist of 2 protons and 2 neutrons — essentially a helium nucleus.' },
      { q: 'Which nuclear accident occurred in Ukraine in 1986?', opts: ['Fukushima accident','Three Mile Island accident','Chernobyl disaster','Bhopal gas tragedy'], ans: 2, expl: 'The Chernobyl disaster occurred on April 26, 1986 in Chernobyl, Ukraine (then Soviet Union).' },
      { q: 'The Fukushima nuclear disaster occurred in which country?', opts: ['Russia','Japan','USA','Germany'], ans: 1, expl: 'The Fukushima Daiichi nuclear disaster occurred in Japan in March 2011 after a tsunami.' },
      { q: 'Which radiation has the highest penetrating power?', opts: ['Alpha rays','Beta rays','Gamma rays','X-rays'], ans: 2, expl: 'Gamma rays have the highest penetrating power and can pass through most materials.' },
      { q: 'Alpha radiation consists of:', opts: ['Electrons','Helium nuclei','Protons','Neutrons'], ans: 1, expl: 'Alpha particles consist of 2 protons and 2 neutrons, identical to a helium-4 nucleus.' },
      { q: 'Beta radiation consists of:', opts: ['Helium nuclei','Electrons','Neutrons','Photons'], ans: 1, expl: 'Beta radiation consists of high-energy electrons (or positrons) emitted from a nucleus.' },
      { q: 'A device used to control the rate of nuclear reaction is called:', opts: ['Moderator','Control rod','Coolant','Reactor core'], ans: 1, expl: 'Control rods (made of boron or cadmium) absorb neutrons and regulate the rate of fission.' },
      { q: 'The substance used to slow down neutrons in a nuclear reactor is called:', opts: ['Coolant','Moderator','Control rod','Shield'], ans: 1, expl: 'A moderator (like water or graphite) slows down fast neutrons to thermal speeds, sustaining the chain reaction.' },
      { q: 'Which material is commonly used as a nuclear fuel?', opts: ['Uranium','Copper','Aluminum','Iron'], ans: 0, expl: 'Uranium-235 and Plutonium-239 are the most common nuclear fuels.' },
      { q: 'The nuclear accident at Three Mile Island occurred in:', opts: ['USA','Japan','Russia','India'], ans: 0, expl: 'The Three Mile Island accident occurred near Harrisburg, Pennsylvania, USA in 1979.' },
      { q: 'Which nuclear disaster released large amounts of radioactive material into the environment?', opts: ['Three Mile Island','Chernobyl','Fukushima','Both B and C'], ans: 3, expl: 'Both Chernobyl (1986) and Fukushima (2011) released large amounts of radioactive material into the environment.' },
      { q: 'Which of the following is NOT an effect of nuclear accidents?', opts: ['Genetic mutation','Cancer','Loss of biodiversity','Increase in rainfall'], ans: 3, expl: 'Increase in rainfall is not an effect of nuclear accidents. Radiation causes mutations, cancer, and ecological damage.' },
      { q: 'Ionizing radiation can cause:', opts: ['Genetic mutation','Cell damage','Cancer','All of the above'], ans: 3, expl: 'Ionizing radiation can damage DNA, cause mutations, cancer, and destroy cells.' },
      { q: 'Industrialization causes which environmental problem?', opts: ['Air pollution','Water pollution','Land degradation','All of the above'], ans: 3, expl: 'Industrialization contributes to air, water, and land pollution simultaneously.' },
      { q: 'Rapid population growth leads to:', opts: ['Increased resource consumption','Decreased pollution','Reduced waste','Reduced environmental impact'], ans: 0, expl: 'More people means higher demand for food, water, energy, and space, increasing resource consumption.' },
      { q: 'Urbanization mainly leads to:', opts: ['Decrease in population density','Environmental pollution','Decrease in waste','Increase in forests'], ans: 1, expl: 'Urbanization concentrates people in cities, leading to increased pollution, waste, and resource consumption.' },
      { q: 'The increase in population in urban areas is called:', opts: ['Industrialization','Urbanization','Desertification','Migration'], ans: 1, expl: 'Urbanization is the process of population shift from rural to urban areas.' },
      { q: 'Social impacts of industrialization include:', opts: ['Migration','Urbanization','Health problems','All of the above'], ans: 3, expl: 'Industrialization leads to rural-urban migration, rapid urbanization, and health problems.' },
      { q: 'Which of the following is an economic impact of industrialization?', opts: ['Resource depletion','Economic inequality','Demand for renewable energy','All of the above'], ans: 3, expl: 'Industrialization leads to resource depletion, economic inequality, and changes in energy demand.' },
      { q: 'Waste disposal is considered a ______ issue.', opts: ['Social','Economic','Environmental','Medical'], ans: 2, expl: 'Improper waste disposal harms the environment — polluting land, water, and air.' },
      { q: 'Which waste management principle focuses on minimizing waste generation?', opts: ['Reuse','Reduce','Recycle','Recover'], ans: 1, expl: '"Reduce" means producing less waste in the first place — the most preferred option.' },
      { q: 'Recycling means:', opts: ['Burning waste','Converting waste into new products','Dumping waste','Storing waste'], ans: 1, expl: 'Recycling is the process of converting waste materials into new usable products.' },
      { q: 'Which of the following is the correct waste management hierarchy?', opts: ['Recycle → Reduce → Dispose','Reduce → Reuse → Recycle → Recover','Reuse → Reduce → Recover → Dispose','Dispose → Recycle → Reduce'], ans: 1, expl: 'The hierarchy is: Reduce → Reuse → Recycle → Recover (energy) → Dispose (last resort).' },
      { q: 'The principle of "Reduce" in waste management means:', opts: ['Increasing waste production','Minimizing waste generation','Burning waste','Storing waste'], ans: 1, expl: '"Reduce" means cutting down on the amount of waste we produce at the source.' },
      { q: 'Reusing products helps to:', opts: ['Increase waste','Save resources and energy','Increase pollution','Increase cost'], ans: 1, expl: 'Reusing products extends their life, conserving the materials and energy needed to produce new ones.' },
      { q: 'Which of the following materials is commonly recycled?', opts: ['Plastic','Glass','Paper','All of the above'], ans: 3, expl: 'Plastic, glass, paper, metals, and electronic waste are all commonly recycled materials.' },
      { q: 'Using cloth bags instead of plastic bags is an example of:', opts: ['Reduce','Reuse','Recycle','Recover'], ans: 0, expl: 'Using cloth bags reduces the need for single-use plastic bags, demonstrating the principle of Reduce.' },
      { q: 'Using old newspapers for packing materials is an example of:', opts: ['Recycling','Reusing','Disposal','Recovery'], ans: 1, expl: 'Reusing materials for a different purpose (like packing) is an example of Reuse.' },
      { q: 'Which of the following is an eco-friendly packaging option?', opts: ['Plastic packaging','Biodegradable packaging','Metal packaging','Polystyrene packaging'], ans: 1, expl: 'Biodegradable packaging breaks down naturally and does not persist in the environment.' },
      { q: 'Packaging waste mainly consists of:', opts: ['Paper','Plastic','Metal','All of the above'], ans: 3, expl: 'Packaging waste includes paper, plastics, metals, glass, and composite materials.' },
      { q: 'The process of converting waste materials into new products is called:', opts: ['Recovery','Recycling','Disposal','Reduction'], ans: 1, expl: 'Recycling converts waste into new raw materials or products.' },
      { q: 'Which item can be reused to reduce waste?', opts: ['Glass bottles','Cloth bags','Containers','All of the above'], ans: 3, expl: 'Glass bottles, cloth bags, and containers can all be cleaned and reused multiple times.' },
      { q: 'Buying products with less packaging helps in:', opts: ['Waste reduction','Increasing waste','Pollution increase','Resource depletion'], ans: 0, expl: 'Less packaging means less waste generated and less energy used in packaging production.' },
      { q: 'Waste reduction can be achieved by:', opts: ['Buying only required products','Avoiding single-use items','Reusing materials','All of the above'], ans: 3, expl: 'All these practices help reduce the total amount of waste generated.' },
      { q: 'Recycling helps to conserve:', opts: ['Natural resources','Energy','Raw materials','All of the above'], ans: 3, expl: 'Recycling conserves natural resources, saves energy, and reduces the need for raw material extraction.' },
      { q: 'Recycling industry provides:', opts: ['Employment opportunities','Environmental pollution','Resource depletion','Waste increase'], ans: 0, expl: 'The recycling industry creates jobs in collection, sorting, processing, and manufacturing.' },
      { q: 'Which of the following materials can be recycled multiple times without losing quality?', opts: ['Plastic','Glass','Paper','Wood'], ans: 1, expl: 'Glass can be recycled indefinitely without loss of quality or purity.' },
      { q: 'Composting is mainly used to recycle:', opts: ['Plastic waste','Organic waste','Metal waste','Electronic waste'], ans: 1, expl: 'Composting is the controlled decomposition of organic matter (food scraps, yard waste) into compost.' },
      { q: 'Organic waste includes:', opts: ['Food waste','Leaves','Vegetable peels','All of the above'], ans: 3, expl: 'Organic waste includes all biodegradable materials: food scraps, leaves, vegetable peels, etc.' },
      { q: 'Recycling reduces:', opts: ['Pollution','Energy consumption','Waste in landfills','All of the above'], ans: 3, expl: 'Recycling reduces pollution, saves energy, and diverts waste from landfills.' },
      { q: 'The concept of "closing the loop" in recycling means:', opts: ['Stopping recycling','Converting recycled materials back into products','Dumping waste','Burning waste'], ans: 1, expl: '"Closing the loop" means feeding recycled materials back into the production cycle as raw materials.' },
      { q: 'Recycling is important because it:', opts: ['Saves natural resources','Reduces pollution','Conserves energy','All of the above'], ans: 3, expl: 'Recycling helps conserve resources, reduce pollution, and save energy — all environmental benefits.' },
      { q: 'Which of the following is the most preferred option in waste management hierarchy?', opts: ['Disposal','Recycling','Reduce','Landfill'], ans: 2, expl: '"Reduce" is at the top of the waste management hierarchy as it prevents waste generation entirely.' },
    ]
  },

  /* ─── UNIT 2: Sustainability & Renewable Resources (80 Qs) ── */
  2: {
    title: "Sustainability & Renewable Resources",
    questions: [
      { q: 'Natural resources are defined as:', opts: ['Resources manufactured by humans','Resources obtained from nature','Resources produced in factories','Artificial materials'], ans: 1, expl: 'Natural resources are materials and substances that occur in nature and can be used by humans.' },
      { q: 'Which of the following is NOT a natural resource?', opts: ['Water','Soil','Plastic','Air'], ans: 2, expl: 'Plastic is a man-made material derived from petroleum; it is not a natural resource.' },
      { q: 'Which of the following is a forest resource?', opts: ['Coal','Timber','Petroleum','Uranium'], ans: 1, expl: 'Timber is a forest resource obtained from trees.' },
      { q: 'Forest ecosystems are dominated by:', opts: ['Animals','Trees','Minerals','Microorganisms'], ans: 1, expl: 'Trees are the dominant organisms in forest ecosystems, providing structure and habitat.' },
      { q: 'Which of the following is a major function of forests?', opts: ['Increase soil erosion','Prevent floods','Increase pollution','Destroy wildlife'], ans: 1, expl: 'Forests act as natural sponges, regulating water flow and preventing floods.' },
      { q: 'Forests help in maintaining atmospheric balance by:', opts: ['Increasing CO₂','Decreasing oxygen','Absorbing carbon dioxide','Increasing nitrogen'], ans: 2, expl: 'Forests absorb CO₂ and release O₂ through photosynthesis, maintaining atmospheric balance.' },
      { q: 'Which of the following resources provides food and shelter for wildlife?', opts: ['Mineral resources','Forest resources','Energy resources','Land resources'], ans: 1, expl: 'Forest resources provide habitat, food, and shelter for countless wildlife species.' },
      { q: 'Which of the following is a commercial product obtained from forests?', opts: ['Coal','Resin','Uranium','Bauxite'], ans: 1, expl: 'Resin (used in varnishes, adhesives, etc.) is an important forest product.' },
      { q: 'Water resources are mainly used for:', opts: ['Agriculture','Industrial activities','Domestic purposes','All of the above'], ans: 3, expl: 'Water is used for irrigation, industrial cooling and processing, and domestic needs.' },
      { q: 'Approximately what percentage of water on Earth is salt water?', opts: ['50%','75%','97%','30%'], ans: 2, expl: 'About 97% of Earth\'s water is salt water in oceans; only 3% is freshwater.' },
      { q: 'Groundwater is also known as:', opts: ['Surface water','Subsurface water','Rainwater','Ocean water'], ans: 1, expl: 'Groundwater (subsurface water) is found underground in aquifers.' },
      { q: 'The major sources of surface water include:', opts: ['Rivers','Lakes','Oceans','All of the above'], ans: 3, expl: 'Rivers, lakes, ponds, and oceans are all major sources of surface water.' },
      { q: 'Which energy resource is considered renewable?', opts: ['Coal','Petroleum','Solar energy','Natural gas'], ans: 2, expl: 'Solar energy from the sun is inexhaustible on human timescales — a renewable resource.' },
      { q: 'Non-renewable energy resources include:', opts: ['Wind energy','Coal','Solar energy','Biomass'], ans: 1, expl: 'Coal is a fossil fuel formed over millions of years and is non-renewable.' },
      { q: 'Which of the following is an example of green energy?', opts: ['Coal','Diesel','Wind energy','Petrol'], ans: 2, expl: 'Wind energy is a clean, green energy source with no direct carbon emissions.' },
      { q: 'The main cause of increasing demand for natural resources is:', opts: ['Decreasing population','Increasing population','Low industrialization','Reduced technology'], ans: 1, expl: 'Population growth increases demand for food, water, energy, and materials.' },
      { q: 'Which of the following is a land resource?', opts: ['Soil','Forest','Minerals','All of the above'], ans: 3, expl: 'Soil, forests, minerals, and other materials found on land are all land resources.' },
      { q: 'The process of degradation of land is called:', opts: ['Land pollution','Land degradation','Land formation','Land development'], ans: 1, expl: 'Land degradation is the reduction in land quality due to human activities and natural processes.' },
      { q: 'Which of the following activities causes land degradation?', opts: ['Deforestation','Mining','Overgrazing','All of the above'], ans: 3, expl: 'Deforestation, mining, overgrazing, and improper agriculture all cause land degradation.' },
      { q: 'A mineral is defined as:', opts: ['Artificial chemical substance','Naturally occurring inorganic substance','Man-made material','Biological compound'], ans: 1, expl: 'A mineral is a naturally occurring, inorganic solid with a definite chemical composition and crystal structure.' },
      { q: 'Minerals are generally found in:', opts: ['Plants','Animals','Earth\'s crust','Oceans only'], ans: 2, expl: 'Minerals are found in the Earth\'s crust, formed by geological processes over millions of years.' },
      { q: 'Which of the following is a metallic mineral?', opts: ['Coal','Iron ore','Limestone','Gypsum'], ans: 1, expl: 'Iron ore is a metallic mineral that is smelted to produce iron and steel.' },
      { q: 'Which of the following is a non-metallic mineral?', opts: ['Copper','Iron','Mica','Aluminium'], ans: 2, expl: 'Mica is a non-metallic mineral used as an electrical insulator.' },
      { q: 'Mining refers to:', opts: ['Growing crops','Extracting minerals from the earth','Producing electricity','Producing fertilizers'], ans: 1, expl: 'Mining is the extraction of valuable minerals or other geological materials from the earth.' },
      { q: 'Which type of mining is done near the surface of the earth?', opts: ['Underground mining','Open-cast mining','Deep mining','Shaft mining'], ans: 1, expl: 'Open-cast (open-pit) mining removes surface layers to extract minerals near the surface.' },
      { q: 'A major safety issue in mining is:', opts: ['Air pollution','Floods','Accidents in mines','Soil erosion'], ans: 2, expl: 'Mining is hazardous — accidents like roof collapses, explosions, and flooding are major safety concerns.' },
      { q: 'Renewable resources are resources that:', opts: ['Cannot be reused','Are available only once','Can be replenished naturally','Are artificial'], ans: 2, expl: 'Renewable resources naturally replenish themselves — e.g., solar, wind, water, and biomass.' },
      { q: 'Which of the following is a renewable resource?', opts: ['Coal','Petroleum','Wind energy','Natural gas'], ans: 2, expl: 'Wind energy is continuously available and does not get depleted with use.' },
      { q: 'Fossil fuels are classified as:', opts: ['Renewable resources','Non-renewable resources','Inexhaustible resources','Artificial resources'], ans: 1, expl: 'Fossil fuels (coal, oil, gas) take millions of years to form and are non-renewable.' },
      { q: 'Which of the following is a cyclic resource?', opts: ['Water','Coal','Petroleum','Uranium'], ans: 0, expl: 'Water cycles through evaporation, condensation, and precipitation — it is a cyclic resource.' },
      { q: 'Overexploitation of natural resources leads to:', opts: ['Sustainability','Resource depletion','Increased biodiversity','Environmental protection'], ans: 1, expl: 'Overexploitation means using resources faster than they can be replenished, leading to depletion.' },
      { q: 'Soil is formed mainly from:', opts: ['Rocks','Air','Water','Plants'], ans: 0, expl: 'Soil is formed through the weathering of rocks over long periods, enriched by organic matter.' },
      { q: 'Soil erosion refers to:', opts: ['Formation of soil','Removal of soil by wind or water','Increase in soil fertility','Soil development'], ans: 1, expl: 'Soil erosion is the removal of the topsoil layer by wind, water, or human activities.' },
      { q: 'Which activity causes soil erosion?', opts: ['Afforestation','Deforestation','Crop rotation','Soil conservation'], ans: 1, expl: 'Deforestation removes tree cover, leaving soil vulnerable to erosion by wind and water.' },
      { q: 'Soil conservation methods include:', opts: ['Crop rotation','Contour ploughing','Afforestation','All of the above'], ans: 3, expl: 'All these methods help prevent soil erosion and maintain soil fertility.' },
      { q: 'Water resource depletion mainly occurs due to:', opts: ['Overuse of water','Conservation of water','Rainfall','Water recycling'], ans: 0, expl: 'Overuse for irrigation, industry, and domestic purposes is the main cause of water resource depletion.' },
      { q: 'Groundwater depletion may lead to:', opts: ['Increased rainfall','Water scarcity','Increased fertility','Better agriculture'], ans: 1, expl: 'Excessive groundwater extraction depletes aquifers, causing water scarcity.' },
      { q: 'Mining can cause environmental problems such as:', opts: ['Soil erosion','Water pollution','Air pollution','All of the above'], ans: 3, expl: 'Mining causes habitat destruction, soil erosion, water pollution, and air pollution.' },
      { q: 'Deforestation leads to:', opts: ['Increased biodiversity','Soil erosion','Improved climate','Increased forest area'], ans: 1, expl: 'Without tree root systems, soil is easily eroded by rain and wind.' },
      { q: 'Deforestation is defined as:', opts: ['Planting trees','Cutting of forests permanently','Soil conservation','Forest protection'], ans: 1, expl: 'Deforestation is the permanent removal of trees and forest cover for other land uses.' },
      { q: 'The main cause of deforestation is:', opts: ['Industrialization','Urbanization','Agricultural expansion','All of the above'], ans: 3, expl: 'Deforestation results from agriculture, logging, urban expansion, and industrial development.' },
      { q: 'One of the major effects of deforestation is:', opts: ['Increase in rainfall','Loss of biodiversity','Increase in wildlife','Soil formation'], ans: 1, expl: 'Forests host 70-80% of land species; deforestation destroys their habitat causing biodiversity loss.' },
      { q: 'Forests help prevent:', opts: ['Soil erosion','Earthquakes','Cyclones','Tides'], ans: 0, expl: 'Tree roots bind soil particles, preventing erosion by rainfall and wind.' },
      { q: 'Which gas is mainly absorbed by plants during photosynthesis?', opts: ['Oxygen','Carbon dioxide','Nitrogen','Hydrogen'], ans: 1, expl: 'Plants absorb CO₂ and use sunlight energy to produce glucose and oxygen.' },
      { q: 'The main greenhouse gas responsible for global warming is:', opts: ['Oxygen','Carbon dioxide','Nitrogen','Helium'], ans: 1, expl: 'CO₂ from burning fossil fuels is the main driver of human-caused global warming.' },
      { q: 'A dam is primarily constructed to:', opts: ['Store water','Generate electricity','Control floods','All of the above'], ans: 3, expl: 'Dams serve multiple purposes: water storage, hydroelectric power generation, and flood control.' },
      { q: 'Construction of dams may cause:', opts: ['Displacement of people','Environmental changes','Loss of wildlife habitat','All of the above'], ans: 3, expl: 'Large dams flood valleys, displace communities, and destroy habitats.' },
      { q: 'Which of the following is a conventional energy source?', opts: ['Solar energy','Wind energy','Coal','Tidal energy'], ans: 2, expl: 'Coal is a conventional (traditional) fossil fuel energy source.' },
      { q: 'Non-conventional sources of energy are also known as:', opts: ['Fossil energy','Renewable energy','Mineral energy','Thermal energy'], ans: 1, expl: 'Non-conventional energy sources are renewable — solar, wind, tidal, geothermal, etc.' },
      { q: 'Which of the following is a non-conventional energy source?', opts: ['Coal','Petroleum','Solar energy','Natural gas'], ans: 2, expl: 'Solar energy is a non-conventional (renewable) energy source.' },
      { q: 'Energy obtained from sunlight is called:', opts: ['Thermal energy','Solar energy','Wind energy','Nuclear energy'], ans: 1, expl: 'Solar energy is energy derived directly from the sun\'s radiation.' },
      { q: 'Wind energy is produced by:', opts: ['Flowing water','Moving air','Sunlight','Fossil fuels'], ans: 1, expl: 'Wind turbines convert the kinetic energy of moving air into electricity.' },
      { q: 'Energy obtained from organic matter is called:', opts: ['Biomass energy','Nuclear energy','Wind energy','Geothermal energy'], ans: 0, expl: 'Biomass energy is derived from organic materials such as wood, agricultural waste, and animal dung.' },
      { q: 'Tidal energy is obtained from:', opts: ['Ocean tides','Wind currents','Sunlight','Underground heat'], ans: 0, expl: 'Tidal energy is generated from the kinetic and potential energy of ocean tides.' },
      { q: 'Geothermal energy is obtained from:', opts: ['Ocean waves','Sunlight','Heat inside the earth','Fossil fuels'], ans: 2, expl: 'Geothermal energy harnesses heat from within the Earth.' },
      { q: 'The major advantage of renewable energy is:', opts: ['Unlimited supply','Causes pollution','Expensive','Limited availability'], ans: 0, expl: 'Renewable energy sources are naturally replenished and have virtually unlimited supply.' },
      { q: 'Which of the following is a disadvantage of fossil fuels?', opts: ['Renewable','Cause pollution','Unlimited supply','Environment friendly'], ans: 1, expl: 'Burning fossil fuels releases CO₂ and pollutants, contributing to global warming and air pollution.' },
      { q: 'Fossil fuels include:', opts: ['Coal','Petroleum','Natural gas','All of the above'], ans: 3, expl: 'Coal, petroleum (oil), and natural gas are the three main fossil fuels.' },
      { q: 'Energy conservation means:', opts: ['Increasing energy use','Reducing energy waste','Producing more energy','Destroying energy sources'], ans: 1, expl: 'Energy conservation means using energy efficiently and reducing unnecessary consumption.' },
      { q: 'Turning off electrical appliances when not in use is an example of:', opts: ['Energy generation','Energy conservation','Energy pollution','Energy loss'], ans: 1, expl: 'Switching off unused appliances is a simple and effective form of energy conservation.' },
      { q: 'The efficient use of energy to reduce consumption is called:', opts: ['Energy production','Energy conservation','Energy distribution','Energy transformation'], ans: 1, expl: 'Energy conservation involves using technology and practices to use less energy for the same output.' },
      { q: 'Energy conservation helps to:', opts: ['Increase pollution','Reduce energy demand','Waste resources','Increase fuel consumption'], ans: 1, expl: 'Conservation reduces energy demand, saving money and reducing environmental impact.' },
      { q: 'Which device helps in saving electrical energy?', opts: ['Incandescent bulb','LED bulb','Halogen lamp','Tungsten bulb'], ans: 1, expl: 'LED bulbs use up to 80% less energy than traditional incandescent bulbs.' },
      { q: 'Energy audit is used to:', opts: ['Increase electricity bills','Analyze energy consumption','Produce electricity','Waste energy'], ans: 1, expl: 'An energy audit assesses how much energy a building or process uses and identifies savings opportunities.' },
      { q: 'Using public transport instead of private vehicles helps in:', opts: ['Increasing pollution','Saving energy','Increasing fuel consumption','Reducing efficiency'], ans: 1, expl: 'Public transport carries more people per unit of fuel, reducing per-capita energy use and emissions.' },
      { q: 'Planting trees helps in:', opts: ['Increasing carbon dioxide','Reducing oxygen','Improving environmental balance','Increasing pollution'], ans: 2, expl: 'Trees absorb CO₂, release O₂, provide shade, prevent erosion, and support biodiversity.' },
      { q: 'The major environmental impact of mining is:', opts: ['Soil erosion','Land degradation','Water pollution','All of the above'], ans: 3, expl: 'Mining causes habitat destruction, land degradation, water contamination, and air pollution.' },
      { q: 'Extraction of excessive groundwater may lead to:', opts: ['Water scarcity','Floods','Increased rainfall','Increased fertility'], ans: 0, expl: 'Over-extraction depletes aquifers, causing water scarcity and land subsidence.' },
      { q: 'Which of the following is a method of energy conservation?', opts: ['Switching off appliances when not in use','Using renewable energy','Using energy-efficient devices','All of the above'], ans: 3, expl: 'All these practices contribute to conserving energy.' },
      { q: 'Which renewable energy source uses flowing water?', opts: ['Wind energy','Solar energy','Hydroelectric energy','Biomass energy'], ans: 2, expl: 'Hydroelectric power converts the kinetic energy of flowing water into electricity.' },
      { q: 'Hydroelectric power is produced by:', opts: ['Burning coal','Flowing water in dams','Sunlight','Nuclear reaction'], ans: 1, expl: 'Water flowing through turbines in a dam generates hydroelectric power.' },
      { q: 'Nuclear energy is produced by:', opts: ['Burning fossil fuels','Splitting atomic nuclei','Solar radiation','Wind movement'], ans: 1, expl: 'Nuclear energy is produced through fission — splitting of uranium or plutonium nuclei.' },
      { q: 'Which of the following contributes to global warming?', opts: ['Carbon dioxide emissions','Oxygen release','Nitrogen fixation','Photosynthesis'], ans: 0, expl: 'CO₂ emissions from burning fossil fuels trap heat in the atmosphere, causing global warming.' },
      { q: 'Biodiversity refers to:', opts: ['Variety of living organisms','Variety of minerals','Variety of soil types','Variety of fuels'], ans: 0, expl: 'Biodiversity encompasses the variety of all life forms on Earth.' },
      { q: 'Sustainable development means:', opts: ['Using resources without concern for the future','Development that meets present needs without harming future generations','Increasing industrial pollution','Overexploiting resources'], ans: 1, expl: 'The Brundtland definition: "development that meets the needs of the present without compromising the ability of future generations to meet their own needs."' },
      { q: 'The main aim of environmental conservation is:', opts: ['Destroy natural resources','Protect and manage natural resources','Increase pollution','Reduce biodiversity'], ans: 1, expl: 'Environmental conservation aims to protect, preserve, and sustainably manage natural resources.' },
      { q: 'Recycling helps to:', opts: ['Increase waste','Conserve natural resources','Increase pollution','Destroy resources'], ans: 1, expl: 'Recycling reduces the need for virgin raw materials, conserving natural resources.' },
      { q: 'Which practice helps in reducing deforestation?', opts: ['Afforestation','Overgrazing','Mining','Urbanization'], ans: 0, expl: 'Afforestation (planting new trees) compensates for lost forests and helps restore ecosystems.' },
      { q: 'Sustainable use of resources helps to:', opts: ['Protect the environment','Maintain ecological balance','Ensure resources for future generations','All of the above'], ans: 3, expl: 'Sustainable resource use ensures environmental protection, ecological balance, and intergenerational equity.' },
      { q: 'The concept of sustainability mainly focuses on:', opts: ['Economic growth only','Environmental protection only','Balanced development of environment, economy, and society','Industrial development only'], ans: 2, expl: 'Sustainability is based on three pillars: environmental, economic, and social (the "triple bottom line").' },
    ]
  },

  /* ─── UNIT 3: Ecosystem & Biodiversity (80 Qs) ──── */
  3: {
    title: "Ecosystem & Biodiversity",
    questions: [
      { q: 'An ecosystem is best defined as:', opts: ['A community of plants only','Interaction between living organisms and their environment','Only animal populations','A group of organisms of same species'], ans: 1, expl: 'An ecosystem is the complex of living organisms, their physical environment, and all their interrelationships.' },
      { q: 'The term ecosystem was first proposed by:', opts: ['Darwin','Tansley','Mendel','Haeckel'], ans: 1, expl: 'A.G. Tansley coined the term "ecosystem" in 1935.' },
      { q: 'Which of the following is a terrestrial ecosystem?', opts: ['Pond','Ocean','Grassland','River'], ans: 2, expl: 'Grassland is a terrestrial (land-based) ecosystem.' },
      { q: 'A freshwater ecosystem example is:', opts: ['Sea','Pond','Desert','Grassland'], ans: 1, expl: 'A pond is a freshwater ecosystem containing freshwater organisms.' },
      { q: 'The physical and chemical factors of an ecosystem are called:', opts: ['Biotic components','Abiotic components','Producers','Consumers'], ans: 1, expl: 'Abiotic factors are the non-living physical and chemical components of an ecosystem.' },
      { q: 'Plants that synthesize their own food are called:', opts: ['Consumers','Decomposers','Producers','Parasites'], ans: 2, expl: 'Producers (autotrophs) synthesize organic compounds from inorganic substances using sunlight.' },
      { q: 'The organisms that obtain energy by eating other organisms are called:', opts: ['Producers','Consumers','Autotrophs','Saprophytes'], ans: 1, expl: 'Consumers (heterotrophs) obtain energy by eating other organisms.' },
      { q: 'Organisms that break down dead organic matter are known as:', opts: ['Herbivores','Carnivores','Decomposers','Producers'], ans: 2, expl: 'Decomposers (bacteria and fungi) break down dead organic matter and return nutrients to the soil.' },
      { q: 'Herbivores are also called:', opts: ['Primary consumers','Secondary consumers','Tertiary consumers','Decomposers'], ans: 0, expl: 'Herbivores eat plants and are primary consumers — the first level of consumers.' },
      { q: 'Animals that feed on herbivores are known as:', opts: ['Producers','Primary consumers','Secondary consumers','Decomposers'], ans: 2, expl: 'Secondary consumers eat primary consumers (herbivores).' },
      { q: 'In a food chain, energy originates from:', opts: ['Wind','Sun','Soil','Water'], ans: 1, expl: 'All energy in food chains ultimately comes from the sun through photosynthesis.' },
      { q: 'The sequence of organisms through which energy flows is called:', opts: ['Food web','Food chain','Ecological pyramid','Nutrient cycle'], ans: 1, expl: 'A food chain shows the linear sequence of organisms through which energy and nutrients pass.' },
      { q: 'A network of interconnected food chains is called:', opts: ['Food pyramid','Food web','Energy cycle','Trophic system'], ans: 1, expl: 'A food web represents the complex, interconnected feeding relationships in an ecosystem.' },
      { q: 'Each step in a food chain is known as:', opts: ['Ecological stage','Trophic level','Nutrient level','Species level'], ans: 1, expl: 'A trophic level is a position in the food chain defined by the organism\'s food source.' },
      { q: 'An organism that eats both plants and animals is called:', opts: ['Carnivore','Herbivore','Omnivore','Parasite'], ans: 2, expl: 'Omnivores eat both plants and animals (e.g., bears, humans, pigs).' },
      { q: 'Soil, water, air, and minerals belong to which ecosystem component?', opts: ['Biotic','Abiotic','Organic','Biological'], ans: 1, expl: 'Soil, water, air, and minerals are non-living (abiotic) components of the ecosystem.' },
      { q: 'Which ecosystem covers about 71% of Earth\'s surface?', opts: ['Desert ecosystem','Marine ecosystem','Forest ecosystem','Grassland ecosystem'], ans: 1, expl: 'Marine ecosystems cover about 71% of Earth\'s surface — the world\'s oceans.' },
      { q: 'Which of the following is a producer in an ecosystem?', opts: ['Goat','Grass','Lion','Bacteria'], ans: 1, expl: 'Grass is a producer — it manufactures food through photosynthesis.' },
      { q: 'An example of a decomposer is:', opts: ['Tiger','Mushroom','Deer','Snake'], ans: 1, expl: 'Mushrooms (fungi) are classic decomposers that break down organic matter.' },
      { q: 'Which factor influences the climatic conditions of an ecosystem?', opts: ['Temperature','Soil','Water','Minerals'], ans: 0, expl: 'Temperature is a key abiotic factor that influences species distribution and ecosystem function.' },
      { q: 'The structural organization of an ecosystem consists of:', opts: ['Producers only','Consumers only','Biotic and abiotic components','Plants and animals only'], ans: 2, expl: 'An ecosystem\'s structure includes both biotic (living) and abiotic (non-living) components.' },
      { q: 'The study of interactions between organisms and their environment is called:', opts: ['Genetics','Ecology','Taxonomy','Evolution'], ans: 1, expl: 'Ecology is the branch of biology studying relationships between organisms and their environment.' },
      { q: 'The main source of energy for ecosystems is:', opts: ['Moon','Sun','Wind','Soil'], ans: 1, expl: 'The sun provides the primary energy input for nearly all ecosystems through photosynthesis.' },
      { q: 'The transfer of energy from one trophic level to another is known as:', opts: ['Energy flow','Nutrient cycle','Food production','Biological cycle'], ans: 0, expl: 'Energy flow describes the passage of energy through the trophic levels of an ecosystem.' },
      { q: 'Which of the following is NOT a natural ecosystem?', opts: ['Forest','Pond','Cropland','Grassland'], ans: 2, expl: 'Cropland is an artificial (man-made) ecosystem managed by humans for agriculture.' },
      { q: 'A cropland ecosystem is considered:', opts: ['Natural ecosystem','Artificial ecosystem','Marine ecosystem','Desert ecosystem'], ans: 1, expl: 'Croplands are artificial ecosystems created and managed by humans.' },
      { q: 'The component responsible for recycling nutrients in an ecosystem is:', opts: ['Producers','Consumers','Decomposers','Herbivores'], ans: 2, expl: 'Decomposers break down dead matter, releasing nutrients back into the ecosystem.' },
      { q: 'Which of the following is an example of a primary consumer?', opts: ['Lion','Goat','Snake','Eagle'], ans: 1, expl: 'A goat eats grass (a producer), making it a primary consumer.' },
      { q: 'Carnivores feeding on herbivores are known as:', opts: ['Primary consumers','Secondary consumers','Producers','Decomposers'], ans: 1, expl: 'Secondary consumers are carnivores that feed on primary consumers (herbivores).' },
      { q: 'Organisms feeding on secondary consumers are called:', opts: ['Primary consumers','Secondary consumers','Tertiary consumers','Producers'], ans: 2, expl: 'Tertiary consumers are at the third level of consumption in a food chain.' },
      { q: 'The organisms that feed on dead organic matter are called:', opts: ['Carnivores','Herbivores','Detritivores','Parasites'], ans: 2, expl: 'Detritivores (like earthworms and dung beetles) feed on dead organic matter (detritus).' },
      { q: 'Which of the following is a climatic factor affecting ecosystems?', opts: ['Temperature','Soil nutrients','Organic matter','Microorganisms'], ans: 0, expl: 'Temperature is a climatic (abiotic) factor that shapes ecosystem structure and function.' },
      { q: 'Soil composition and structure fall under:', opts: ['Edaphic factors','Climatic factors','Biotic factors','Aquatic factors'], ans: 0, expl: 'Edaphic (soil) factors include soil composition, texture, pH, and nutrient content.' },
      { q: 'Which of the following belongs to inorganic substances of ecosystems?', opts: ['Proteins','Carbohydrates','Carbon dioxide','Lipids'], ans: 2, expl: 'CO₂ is an inorganic substance; proteins, carbohydrates, and lipids are organic.' },
      { q: 'Organic substances in an ecosystem include:', opts: ['Nitrogen','Phosphorus','Proteins','Oxygen'], ans: 2, expl: 'Proteins, carbohydrates, and fats are organic substances found in living organisms.' },
      { q: 'Phytoplankton in aquatic ecosystems act as:', opts: ['Producers','Consumers','Decomposers','Parasites'], ans: 0, expl: 'Phytoplankton are microscopic photosynthetic organisms — primary producers in aquatic ecosystems.' },
      { q: 'Zooplankton mainly act as:', opts: ['Producers','Primary consumers','Decomposers','Tertiary consumers'], ans: 1, expl: 'Zooplankton consume phytoplankton, making them primary consumers in aquatic food chains.' },
      { q: 'The bottom dwellers of aquatic ecosystems are called:', opts: ['Nekton','Benthos','Plankton','Producers'], ans: 1, expl: 'Benthos are organisms that live on or in the bottom sediment of aquatic ecosystems.' },
      { q: 'The plants growing in water are known as:', opts: ['Aquatic plants','Xerophytes','Epiphytes','Halophytes'], ans: 0, expl: 'Aquatic plants (hydrophytes) are adapted to grow in water or waterlogged conditions.' },
      { q: 'Which of the following represents the correct order in a food chain?', opts: ['Carnivore → Herbivore → Producer','Producer → Herbivore → Carnivore','Herbivore → Producer → Carnivore','Carnivore → Producer → Herbivore'], ans: 1, expl: 'Energy flows from producers to herbivores (primary consumers) to carnivores.' },
      { q: 'A food chain always starts with:', opts: ['Consumers','Decomposers','Producers','Carnivores'], ans: 2, expl: 'Food chains always begin with producers (plants) as they fix solar energy.' },
      { q: 'The ultimate source of energy for all food chains is:', opts: ['Moon','Sun','Water','Soil'], ans: 1, expl: 'The sun is the ultimate energy source for all food chains on Earth.' },
      { q: 'In a terrestrial ecosystem, the first trophic level is occupied by:', opts: ['Producers','Herbivores','Carnivores','Decomposers'], ans: 0, expl: 'Producers occupy the first trophic level, forming the base of the food chain.' },
      { q: 'Which organism is an example of a primary consumer in a grassland ecosystem?', opts: ['Grass','Grasshopper','Snake','Eagle'], ans: 1, expl: 'Grasshoppers eat grass and are primary consumers in a grassland ecosystem.' },
      { q: 'The organism that feeds on secondary consumers is called:', opts: ['Primary consumer','Secondary consumer','Tertiary consumer','Producer'], ans: 2, expl: 'Tertiary consumers feed on secondary consumers (e.g., a hawk eating a snake).' },
      { q: 'A predator occupying the highest trophic level is known as:', opts: ['Apex predator','Herbivore','Producer','Parasite'], ans: 0, expl: 'An apex predator is at the top of the food chain with no natural predators.' },
      { q: 'A food web represents:', opts: ['Single food chain','Only producers and consumers','Interconnected food chains','Only carnivores'], ans: 2, expl: 'A food web shows multiple interconnected food chains in an ecosystem.' },
      { q: 'In an ecosystem, energy flow is:', opts: ['Cyclic','One-way','Random','Infinite'], ans: 1, expl: 'Energy flow in ecosystems is unidirectional — from sun to producers to consumers.' },
      { q: 'The breakdown of organic matter into inorganic substances is called:', opts: ['Photosynthesis','Respiration','Decomposition','Assimilation'], ans: 2, expl: 'Decomposition is the process by which decomposers break down organic matter into inorganic compounds.' },
      { q: 'Which organisms are mainly responsible for decomposition?', opts: ['Plants','Herbivores','Fungi and bacteria','Carnivores'], ans: 2, expl: 'Fungi and bacteria are the main decomposers in most ecosystems.' },
      { q: 'Biodiversity refers to:', opts: ['Variety of plants only','Variety of animals only','Variety of life forms on Earth','Variety of ecosystems only'], ans: 2, expl: 'Biodiversity includes all living organisms — plants, animals, fungi, bacteria, etc.' },
      { q: 'The diversity within a species is called:', opts: ['Species diversity','Genetic diversity','Ecosystem diversity','Habitat diversity'], ans: 1, expl: 'Genetic diversity refers to variation in genes within a species.' },
      { q: 'The variety of species in a given region is called:', opts: ['Genetic diversity','Species diversity','Community diversity','Ecosystem diversity'], ans: 1, expl: 'Species diversity measures the number and relative abundance of species in an area.' },
      { q: 'The diversity of habitats, communities, and ecological processes is known as:', opts: ['Genetic diversity','Species diversity','Ecosystem diversity','Biological diversity'], ans: 2, expl: 'Ecosystem diversity encompasses the variety of habitats, ecosystems, and ecological processes.' },
      { q: 'The total number of species in a given area is known as:', opts: ['Species richness','Species density','Species abundance','Species variety'], ans: 0, expl: 'Species richness is the count of different species present in an area.' },
      { q: 'The variation of genes within species helps organisms in:', opts: ['Migration','Adaptation','Reproduction','Decomposition'], ans: 1, expl: 'Genetic diversity enables adaptation to changing environments and resistance to diseases.' },
      { q: 'Which level of biodiversity deals with different ecosystems such as forests and deserts?', opts: ['Genetic diversity','Species diversity','Ecosystem diversity','Population diversity'], ans: 2, expl: 'Ecosystem diversity refers to the variety of different ecosystems on Earth.' },
      { q: 'The number of individuals of a species in a given area is called:', opts: ['Population','Species richness','Ecosystem diversity','Community diversity'], ans: 0, expl: 'A population is all the individuals of a species living in a defined area.' },
      { q: 'Biodiversity helps maintain:', opts: ['Ecological balance','Economic imbalance','Pollution','Climate change'], ans: 0, expl: 'Biodiversity maintains ecological balance through complex species interactions.' },
      { q: 'The study of biodiversity is important mainly for:', opts: ['Economic growth only','Conservation of species and ecosystems','Industrial development','Urbanization'], ans: 1, expl: 'Studying biodiversity helps us conserve species and ecosystems for ecological and human wellbeing.' },
      { q: 'Biodiversity loss refers to:', opts: ['Increase in species','Extinction of species','Growth of ecosystems','Increase in forests'], ans: 1, expl: 'Biodiversity loss means the extinction or decline of species, reducing Earth\'s biological variety.' },
      { q: 'The major cause of biodiversity loss is:', opts: ['Habitat destruction','Rainfall','Wind','Sunlight'], ans: 0, expl: 'Habitat destruction (due to deforestation, urbanization, agriculture) is the leading cause of biodiversity loss.' },
      { q: 'Cutting down forests for agriculture mainly causes:', opts: ['Habitat loss','Pollution','Climate change','Soil formation'], ans: 0, expl: 'Clearing forests destroys the habitat of countless species.' },
      { q: 'Excessive use of biological resources such as hunting and fishing is called:', opts: ['Overexploitation','Conservation','Pollution','Migration'], ans: 0, expl: 'Overexploitation is harvesting species faster than they can reproduce.' },
      { q: 'When a species is introduced into a new habitat and harms native species, it is called:', opts: ['Habitat loss','Invasive species','Genetic mutation','Adaptation'], ans: 1, expl: 'Invasive species out-compete, prey on, or introduce disease to native species.' },
      { q: 'Climate change can affect biodiversity by:', opts: ['Stabilizing ecosystems','Changing habitats and temperatures','Increasing species diversity','Preventing extinction'], ans: 1, expl: 'Climate change alters habitats, temperatures, and seasonal patterns, threatening many species.' },
      { q: 'A biodiversity hotspot is a region that:', opts: ['Has low species diversity','Has high biodiversity and threatened species','Contains only plants','Has no human activity'], ans: 1, expl: 'Biodiversity hotspots are regions with exceptional species richness and high levels of endemic, threatened species.' },
      { q: 'To qualify as a biodiversity hotspot, a region must contain at least:', opts: ['500 endemic plant species','1500 endemic vascular plant species','100 animal species','1000 bird species'], ans: 1, expl: 'A biodiversity hotspot must have at least 1,500 endemic vascular plant species and have lost 70% of its habitat.' },
      { q: 'A biodiversity hotspot must have lost at least:', opts: ['50% of its habitat','70% of its habitat','30% of its habitat','10% of its habitat'], ans: 1, expl: 'To be a hotspot, a region must have lost at least 70% of its original habitat.' },
      { q: 'Which of the following is a biodiversity hotspot related to India?', opts: ['Sahara Desert','Western Ghats','Antarctica','Arctic region'], ans: 1, expl: 'The Western Ghats is one of the world\'s biodiversity hotspots, sharing status with Sri Lanka.' },
      { q: 'The Western Ghats hotspot is shared with:', opts: ['Sri Lanka','China','Nepal','Pakistan'], ans: 0, expl: 'The Western Ghats and Sri Lanka together form one biodiversity hotspot.' },
      { q: 'The Himalayas are considered important for biodiversity because they:', opts: ['Have no species','Contain diverse habitats and endemic species','Have only snow','Have no vegetation'], ans: 1, expl: 'The Himalayas contain diverse habitats from tropical forests to alpine tundra with many endemic species.' },
      { q: 'Conservation of biodiversity mainly aims to:', opts: ['Destroy habitats','Protect species and ecosystems','Increase pollution','Promote hunting'], ans: 1, expl: 'Biodiversity conservation aims to protect species and their ecosystems from degradation and extinction.' },
      { q: 'Conservation carried out in natural habitats is known as:', opts: ['Ex-situ conservation','In-situ conservation','Artificial conservation','Genetic conservation'], ans: 1, expl: 'In-situ conservation protects species in their natural habitats.' },
      { q: 'National parks and wildlife sanctuaries are examples of:', opts: ['Ex-situ conservation','In-situ conservation','Artificial ecosystems','Marine ecosystems'], ans: 1, expl: 'National parks and sanctuaries are protected areas — forms of in-situ conservation.' },
      { q: 'Conservation of species outside their natural habitat is called:', opts: ['In-situ conservation','Ex-situ conservation','Ecosystem conservation','Habitat conservation'], ans: 1, expl: 'Ex-situ conservation protects species outside their natural habitat — in zoos, botanical gardens, seed banks.' },
      { q: 'Which of the following is an example of ex-situ conservation?', opts: ['National park','Wildlife sanctuary','Zoo','Biosphere reserve'], ans: 2, expl: 'Zoos maintain animals outside their natural habitat for conservation purposes.' },
      { q: 'The Biological Diversity Act in India was passed in:', opts: ['1992','2002','2010','1995'], ans: 1, expl: 'India\'s Biological Diversity Act was enacted in 2002.' },
      { q: 'The National Biodiversity Authority (NBA) is headquartered in:', opts: ['Delhi','Mumbai','Chennai','Kolkata'], ans: 2, expl: 'The NBA is headquartered in Chennai, Tamil Nadu.' },
      { q: 'The main objective of biodiversity conservation is to:', opts: ['Increase industrialization','Maintain ecological balance','Increase pollution','Reduce forests'], ans: 1, expl: 'Biodiversity conservation maintains ecological balance for sustainable human and ecological wellbeing.' },
    ]
  },

  /* ─── UNIT 4: Environmental Pollution (80 Qs) ─── */
  4: {
    title: "Environmental Pollution",
    questions: [
      { q: 'Environmental pollution refers to:', opts: ['Protection of natural resources','Addition of harmful substances into the environment','Natural development of ecosystems','Conservation of biodiversity'], ans: 1, expl: 'Environmental pollution is the contamination of the environment with harmful substances that alter its natural state.' },
      { q: 'Pollution caused by natural phenomena like volcanic eruptions is called:', opts: ['Artificial pollution','Industrial pollution','Natural pollution','Urban pollution'], ans: 2, expl: 'Natural pollution occurs due to natural events like volcanic eruptions, forest fires, and dust storms.' },
      { q: 'Pollution produced by human activities is called:', opts: ['Natural pollution','Artificial pollution','Geological pollution','Seasonal pollution'], ans: 1, expl: 'Artificial (anthropogenic) pollution is caused by human industrial, agricultural, and domestic activities.' },
      { q: 'Which of the following is a natural source of pollutants?', opts: ['Industrial waste','Vehicular smoke','Forest fires','Chemical fertilizers'], ans: 2, expl: 'Forest fires are a natural source of pollutants releasing smoke and particulate matter.' },
      { q: 'Volcanic eruptions release which of the following pollutants?', opts: ['Nitrogen and oxygen','Smoke and trace gases','Chlorine gas','Methane only'], ans: 1, expl: 'Volcanic eruptions release sulfur dioxide, particulate matter, and trace gases.' },
      { q: 'Artificial sources of pollution mainly include:', opts: ['Volcanoes','Forest fires','Human activities','Ocean waves'], ans: 2, expl: 'Human activities — industries, vehicles, agriculture, and waste — are the main artificial pollution sources.' },
      { q: 'Which of the following is a major artificial source of pollution?', opts: ['Lightning','Industries','Earthquakes','Sea tides'], ans: 1, expl: 'Industries release toxic chemicals, gases, and waste into the environment.' },
      { q: 'Soil pollution can be caused by:', opts: ['Oil spills','Mining activities','Agricultural chemicals','All of the above'], ans: 3, expl: 'Soil pollution results from oil spills, mining wastes, pesticides, and industrial chemicals.' },
      { q: 'Which chemical practice contributes to soil pollution?', opts: ['Use of fertilizers','Use of herbicides','Use of pesticides','All of the above'], ans: 3, expl: 'Overuse of fertilizers, herbicides, and pesticides leaches into soil, causing pollution.' },
      { q: 'Industrial accidents can lead to:', opts: ['Soil conservation','Soil pollution','Soil fertility increase','Soil aeration'], ans: 1, expl: 'Industrial accidents release toxic chemicals that contaminate soil.' },
      { q: 'One major source of soil pollution is:', opts: ['Dumping of solid waste','Rainfall','Soil erosion','Photosynthesis'], ans: 0, expl: 'Dumping solid waste in landfills leaches chemicals into the soil.' },
      { q: 'Exposure to contaminated soil may cause:', opts: ['Respiratory diseases','Skin diseases','Genetic disorders','All of the above'], ans: 3, expl: 'Contact with contaminated soil can cause skin, respiratory, and other diseases.' },
      { q: 'Chronic exposure to benzene is associated with:', opts: ['Increased risk of leukemia','Improved immunity','Reduced infections','Increased hemoglobin'], ans: 0, expl: 'Benzene is a carcinogen strongly linked to leukemia and other blood cancers.' },
      { q: 'Pollution effects that disturb ecosystems are called:', opts: ['Biological effects','Ecological effects','Chemical effects','Physical effects'], ans: 1, expl: 'Ecological effects of pollution disrupt ecosystem structure and function.' },
      { q: 'Cleanup of environmental pollution is known as:', opts: ['Conservation','Remediation','Irrigation','Filtration'], ans: 1, expl: 'Remediation refers to the cleanup of polluted environments.' },
      { q: 'Which technique uses plants to remove contaminants from soil?', opts: ['Bioleaching','Phytoremediation','Filtration','Sedimentation'], ans: 1, expl: 'Phytoremediation uses plants to absorb, degrade, or contain soil contaminants.' },
      { q: 'Mycoremediation involves the use of:', opts: ['Bacteria','Algae','Fungi','Viruses'], ans: 2, expl: 'Mycoremediation uses fungi (especially mushroom mycelium) to degrade or contain pollutants.' },
      { q: 'Water pollution is defined as:', opts: ['Decrease in rainfall','Alteration in physical, chemical or biological properties of water','Increase in oxygen in water','Increase in water sources'], ans: 1, expl: 'Water pollution is any change in water that makes it harmful to living organisms or humans.' },
      { q: 'Which is the main natural source of surface water?', opts: ['Evaporation','Condensation','Precipitation','Filtration'], ans: 2, expl: 'Precipitation (rain, snow) is the primary natural source that replenishes surface water.' },
      { q: 'Surface water is commonly found in:', opts: ['Rivers and lakes','Underground rocks','Ocean trenches','Ice caps only'], ans: 0, expl: 'Surface water includes rivers, lakes, ponds, reservoirs, and wetlands.' },
      { q: 'Sub-surface water is commonly known as:', opts: ['River water','Groundwater','Rainwater','Sea water'], ans: 1, expl: 'Subsurface water, stored in aquifers, is commonly called groundwater.' },
      { q: 'Sub-surface water is stored in:', opts: ['Lakes','Oceans','Pores of soil and rocks','Clouds'], ans: 2, expl: 'Groundwater is stored in the spaces and pores of rock and sediment (aquifers).' },
      { q: 'The main difference between surface water and groundwater is that groundwater is:', opts: ['Always salty','Stored underground in soil and rock pores','Found only in oceans','Always polluted'], ans: 1, expl: 'Groundwater is stored in underground aquifers in the pores of soil and rocks.' },
      { q: 'Which of the following is a cause of water pollution?', opts: ['Industrial waste','Agricultural runoff','Oil spills','All of the above'], ans: 3, expl: 'Water pollution comes from multiple sources including industry, agriculture, and transportation.' },
      { q: 'Industries produce large quantities of wastewater containing:', opts: ['Nutrients','Toxic chemicals','Vitamins','Oxygen'], ans: 1, expl: 'Industrial effluents often contain heavy metals, chemicals, and other toxic substances.' },
      { q: 'Which sector contributes to water pollution through fertilizers and pesticides?', opts: ['Mining','Agriculture','Transportation','Tourism'], ans: 1, expl: 'Agricultural runoff carries fertilizers and pesticides into water bodies.' },
      { q: 'Oil spills in oceans mainly affect:', opts: ['Soil fertility','Marine life','Cloud formation','Mountain ecosystems'], ans: 1, expl: 'Oil spills coat marine organisms, block sunlight, and poison marine life.' },
      { q: 'Burning of fossil fuels releases ash and gases which:', opts: ['Purify water','Improve soil fertility','Contribute to environmental pollution','Increase rainfall'], ans: 2, expl: 'Burning fossil fuels releases SO₂, NOₓ, CO₂, and particulate matter, polluting air and water.' },
      { q: 'Leakage from landfills can contaminate:', opts: ['Air only','Soil and groundwater','Sunlight','Clouds'], ans: 1, expl: 'Leachate from landfills seeps into the ground, contaminating soil and groundwater.' },
      { q: 'Underground storage leakage mainly occurs from:', opts: ['Water tanks','Sewage pipes','Fuel pipelines and tanks','Rainwater harvesting systems'], ans: 2, expl: 'Underground storage tanks for fuel frequently leak, contaminating soil and groundwater.' },
      { q: 'Death of aquatic animals due to polluted water is called:', opts: ['Aquatic pollution effect','Biological destruction','Aquatic death syndrome','Water toxicity effect'], ans: 0, expl: 'Water pollution kills aquatic organisms by reducing oxygen and introducing toxic substances.' },
      { q: 'Consumption of contaminated seafood may cause:', opts: ['Food chain disruption','Bioaccumulation of toxic substances','Nutrient deficiency','Increased oxygen levels'], ans: 1, expl: 'Toxins concentrate as they move up food chains (biomagnification), harming consumers of contaminated seafood.' },
      { q: 'Diseases caused due to polluted water include:', opts: ['Cholera','Hepatitis','Dysentery','All of the above'], ans: 3, expl: 'Polluted water carries pathogens causing cholera, hepatitis, dysentery, typhoid, and other waterborne diseases.' },
      { q: 'Destruction of ecosystems due to water pollution results in:', opts: ['Loss of biodiversity','Increase in oxygen levels','Soil fertility','Water purification'], ans: 0, expl: 'Water pollution destroys aquatic habitats, causing loss of biodiversity.' },
      { q: 'Nutrient pollution in water bodies causes:', opts: ['Oxygen depletion','Increase in fish population','Soil formation','Air purification'], ans: 0, expl: 'Excess nutrients cause algal blooms that deplete oxygen when they die and decompose (eutrophication).' },
      { q: 'Excess nutrients in water lead to growth of:', opts: ['Trees','Algae','Rocks','Soil particles'], ans: 1, expl: 'Excess nutrients (nitrogen, phosphorus) in water fuel excessive algal growth.' },
      { q: 'Large growth of algae in water bodies is called:', opts: ['Water bloom','Algal bloom','Water cloud','Oxygen bloom'], ans: 1, expl: 'An algal bloom is the rapid accumulation of algae in a water body, often due to nutrient pollution.' },
      { q: 'One way to prevent water pollution at home is:', opts: ['Dump chemicals in drains','Throw waste in rivers','Use fewer detergents and chemicals','Burn waste in water'], ans: 2, expl: 'Reducing household chemical use prevents them from entering waterways.' },
      { q: 'Which practice helps in water conservation?', opts: ['Fixing leaking pipes','Keeping taps running','Wasting water while washing','Discharging waste in rivers'], ans: 0, expl: 'Fixing leaks prevents unnecessary water loss.' },
      { q: 'Water conservation helps to:', opts: ['Increase pollution','Reduce availability of water','Preserve water resources','Destroy ecosystems'], ans: 2, expl: 'Water conservation preserves scarce freshwater resources for future needs.' },
      { q: 'According to IS 10500:2012, acceptable pH value of drinking water is:', opts: ['4.5 – 6.5','5.5 – 7.5','6.5 – 8.5','7.5 – 9.5'], ans: 2, expl: 'IS 10500:2012 specifies that drinking water pH should be in the range 6.5–8.5.' },
      { q: 'Acceptable turbidity of drinking water should be:', opts: ['1 NTU','5 NTU','10 NTU','20 NTU'], ans: 0, expl: 'IS 10500 specifies acceptable turbidity as 1 NTU for drinking water.' },
      { q: 'Maximum permissible turbidity limit is:', opts: ['1 NTU','3 NTU','5 NTU','10 NTU'], ans: 2, expl: 'The maximum permissible turbidity is 5 NTU as per IS 10500.' },
      { q: 'Acceptable total dissolved solids (TDS) in drinking water is:', opts: ['100 mg/L','500 mg/L','1000 mg/L','2000 mg/L'], ans: 1, expl: 'IS 10500 specifies 500 mg/L as the acceptable TDS limit for drinking water.' },
      { q: 'Water treatment plants are mainly used for:', opts: ['Producing electricity','Removing impurities from water','Storing rainwater','Increasing water temperature'], ans: 1, expl: 'Water treatment plants remove physical, chemical, and biological impurities to make water safe.' },
      { q: 'The first step in water treatment is usually:', opts: ['Filtration','Disinfection','Screening','Chlorination'], ans: 2, expl: 'Screening removes large solid materials (leaves, sticks) from raw water in the first step.' },
      { q: 'The process of adding chemicals to form larger particles for easy removal is called:', opts: ['Sedimentation','Coagulation','Filtration','Disinfection'], ans: 1, expl: 'Coagulation uses chemicals (like alum) to clump fine particles together.' },
      { q: 'Formation of larger particles during water treatment is called:', opts: ['Filtration','Flocculation','Disinfection','Screening'], ans: 1, expl: 'Flocculation is the gentle mixing stage where coagulated particles form larger flocs.' },
      { q: 'The process in which suspended particles settle at the bottom is:', opts: ['Filtration','Sedimentation','Coagulation','Aeration'], ans: 1, expl: 'Sedimentation allows gravity to settle flocculated particles to the bottom of a tank.' },
      { q: 'Removal of pathogens from water is done by:', opts: ['Chlorination','Sedimentation','Screening','Coagulation'], ans: 0, expl: 'Chlorination (disinfection) kills bacteria, viruses, and other pathogens.' },
      { q: 'Sewage treatment involves:', opts: ['One stage','Two stages','Three stages','Five stages'], ans: 2, expl: 'Sewage treatment typically involves primary, secondary, and tertiary treatment stages.' },
      { q: 'The first stage of sewage treatment is called:', opts: ['Secondary treatment','Primary treatment','Tertiary treatment','Final treatment'], ans: 1, expl: 'Primary treatment physically removes large solids from sewage.' },
      { q: 'Removal of large solid materials from sewage occurs in:', opts: ['Screening','Chlorination','Filtration','Distillation'], ans: 0, expl: 'Screening removes large materials (rags, papers, sticks) from incoming sewage.' },
      { q: 'Grit chambers in sewage treatment are used to remove:', opts: ['Oil','Sand and gravel','Microorganisms','Bacteria'], ans: 1, expl: 'Grit chambers allow heavy materials like sand, gravel, and grit to settle.' },
      { q: 'The biological degradation of organic matter occurs in:', opts: ['Secondary treatment','Primary treatment','Screening','Sedimentation'], ans: 0, expl: 'Secondary treatment uses microorganisms to biologically degrade dissolved organic matter.' },
      { q: 'Activated sludge process is used in:', opts: ['Primary treatment','Secondary treatment','Tertiary treatment','Preliminary treatment'], ans: 1, expl: 'The activated sludge process is a biological secondary treatment using aerated mixed liquor.' },
      { q: 'Sludge produced during sewage treatment is:', opts: ['Burned immediately','Used for agriculture after treatment','Discharged into rivers','Stored permanently'], ans: 1, expl: 'Treated sewage sludge (biosolids) can be applied to agricultural land as a soil conditioner.' },
      { q: 'Industrial wastewater usually contains:', opts: ['Pure water','Toxic chemicals and pollutants','Only organic waste','Oxygen'], ans: 1, expl: 'Industrial effluents contain heavy metals, chemicals, acids, and various toxic pollutants.' },
      { q: 'Wastewater from industries must be treated before:', opts: ['Drinking','Discharging into environment','Storing','Cooling'], ans: 1, expl: 'Industrial wastewater must be treated to remove pollutants before discharge into the environment.' },
      { q: 'Proper wastewater treatment helps to:', opts: ['Increase pollution','Protect environment and health','Reduce water supply','Destroy ecosystems'], ans: 1, expl: 'Treating wastewater protects both human health and aquatic ecosystems.' },
      { q: 'Air pollution is defined as:', opts: ['Increase of oxygen in air','Presence of harmful substances in the atmosphere','Decrease of carbon dioxide','Increase of rainfall'], ans: 1, expl: 'Air pollution is the presence of substances in the atmosphere at concentrations harmful to life.' },
      { q: 'Which of the following is a primary air pollutant?', opts: ['Ozone','Sulphur dioxide','Photochemical smog','Acid rain'], ans: 1, expl: 'Sulphur dioxide (SO₂) is a primary pollutant emitted directly from sources.' },
      { q: 'Pollutants emitted directly from sources are called:', opts: ['Secondary pollutants','Primary pollutants','Artificial pollutants','Natural pollutants'], ans: 1, expl: 'Primary pollutants are emitted directly into the atmosphere (SO₂, CO, NOₓ, particulates).' },
      { q: 'Pollutants formed by chemical reactions in the atmosphere are called:', opts: ['Primary pollutants','Secondary pollutants','Natural pollutants','Biological pollutants'], ans: 1, expl: 'Secondary pollutants form when primary pollutants react with each other or sunlight (e.g., ozone, smog).' },
      { q: 'Sulphur dioxide is mainly produced from:', opts: ['Burning fossil fuels','Photosynthesis','Ocean evaporation','Plant respiration'], ans: 0, expl: 'Burning coal and oil releases SO₂ from the sulfur content in fuel.' },
      { q: 'Nitrogen oxides are mainly produced during:', opts: ['Low temperature reactions','High temperature combustion','Evaporation','Condensation'], ans: 1, expl: 'NOₓ forms when nitrogen and oxygen in air react at the high temperatures of combustion.' },
      { q: 'Carbon monoxide is produced due to:', opts: ['Complete combustion of fuels','Incomplete combustion of fuels','Photosynthesis','Water evaporation'], ans: 1, expl: 'CO forms when there is insufficient oxygen for complete combustion of carbon-containing fuels.' },
      { q: 'Carbon dioxide mainly contributes to:', opts: ['Soil erosion','Greenhouse effect','Ozone depletion','Water purification'], ans: 1, expl: 'CO₂ is a major greenhouse gas that traps heat in the atmosphere.' },
      { q: 'Photochemical smog is mainly formed due to reaction of:', opts: ['CO₂ and O₂','Hydrocarbons and nitrogen oxides','Oxygen and nitrogen','Hydrogen and oxygen'], ans: 1, expl: 'Photochemical smog forms when hydrocarbons and NOₓ react with sunlight to form ozone and other compounds.' },
      { q: 'Which pollutant is responsible for ozone layer depletion?', opts: ['Carbon monoxide','Chlorofluorocarbons (CFCs)','Nitrogen gas','Oxygen'], ans: 1, expl: 'CFCs release chlorine atoms that catalytically destroy ozone molecules in the stratosphere.' },
      { q: 'Particulate matter (PM) includes:', opts: ['Dust and smoke particles','Oxygen molecules','Water vapor','Nitrogen gas'], ans: 0, expl: 'Particulate matter (PM) consists of tiny solid particles and liquid droplets suspended in air.' },
      { q: 'Fine particulate matter can cause:', opts: ['Respiratory diseases','Heart diseases','Lung damage','All of the above'], ans: 3, expl: 'PM2.5 penetrates deep into lungs and bloodstream, causing respiratory and cardiovascular diseases.' },
      { q: 'Acid rain is mainly caused by:', opts: ['Oxygen and nitrogen','Sulphur dioxide and nitrogen oxides','Hydrogen and oxygen','Carbon and hydrogen'], ans: 1, expl: 'SO₂ and NOₓ in the atmosphere react with water to form sulfuric and nitric acids.' },
      { q: 'One major indoor air pollutant is:', opts: ['Carbon monoxide','Nitrogen gas','Helium','Neon'], ans: 0, expl: 'Carbon monoxide from incomplete combustion of gas, oil, and coal is a dangerous indoor pollutant.' },
      { q: 'Exposure to air pollution may cause:', opts: ['Asthma','Lung cancer','Respiratory infections','All of the above'], ans: 3, expl: 'Air pollution is linked to asthma, lung cancer, respiratory infections, and other health problems.' },
      { q: 'Smog is a combination of:', opts: ['Smoke and fog','Sand and fog','Dust and rain','Smoke and rain'], ans: 0, expl: 'Smog is a mixture of smoke and fog, reducing visibility and causing health problems.' },
      { q: 'Major sources of air pollution include:', opts: ['Vehicles','Industries','Burning fossil fuels','All of the above'], ans: 3, expl: 'Vehicles, industries, power plants, and agricultural burning are all major air pollution sources.' },
      { q: 'Radon gas pollution mainly occurs from:', opts: ['Ocean water','Earth\'s crust','Clouds','Plants'], ans: 1, expl: 'Radon is a naturally occurring radioactive gas that seeps from soil and rock.' },
      { q: 'Long-term exposure to polluted air may result in:', opts: ['Cardiovascular diseases','Respiratory problems','Reduced lung function','All of the above'], ans: 3, expl: 'Chronic air pollution exposure causes cardiovascular disease, COPD, and reduced lung function.' },
      { q: 'One of the worst industrial gas disasters mentioned in the chapter is:', opts: ['Chernobyl disaster','Fukushima disaster','Bhopal gas tragedy','Hiroshima bombing'], ans: 2, expl: 'The Bhopal gas tragedy (1984) was one of the world\'s worst industrial disasters, releasing toxic methyl isocyanate.' },
    ]
  },

  /* ─── UNIT 5: Environmental Legislation & Sustainable Practices (80 Qs) ── */
  5: {
    title: "Environmental Legislation & Sustainable Practices",
    questions: [
      { q: 'Article 48A of the Indian Constitution deals with:', opts: ['Fundamental Rights','Environmental protection','Industrial policy','Education system'], ans: 1, expl: 'Article 48A directs the State to protect and improve the environment.' },
      { q: 'Article 51A(g) is related to:', opts: ['Duties of government','Duties of citizens towards environment','Industrial safety','Taxation'], ans: 1, expl: 'Article 51A(g) is a fundamental duty that requires every citizen to protect the natural environment.' },
      { q: 'Which amendment added environmental protection provisions?', opts: ['42nd Amendment','44th Amendment','73rd Amendment','86th Amendment'], ans: 0, expl: 'The 42nd Constitutional Amendment (1976) added Article 48A and 51A(g) related to the environment.' },
      { q: 'Article 48A is part of:', opts: ['Fundamental Rights','Directive Principles of State Policy','Legal Acts','Environmental treaties'], ans: 1, expl: 'Article 48A is a Directive Principle of State Policy directing the state to protect the environment.' },
      { q: 'The responsibility to protect wildlife is assigned to:', opts: ['Only government','Only NGOs','Every citizen','Industries'], ans: 2, expl: 'Article 51A(g) makes it a fundamental duty of every Indian citizen to protect wildlife.' },
      { q: 'CPCB stands for:', opts: ['Central Pollution Control Board','Clean Power Control Board','Central Protection Council Board','Control Pollution Central Body'], ans: 0, expl: 'CPCB = Central Pollution Control Board, the national regulatory body for pollution control in India.' },
      { q: 'CPCB was established in:', opts: ['1972','1974','1986','1991'], ans: 1, expl: 'CPCB was established in 1974 under the Water (Prevention and Control of Pollution) Act.' },
      { q: 'CPCB functions under:', opts: ['Ministry of Health','Ministry of Environment and Forests','Ministry of Industry','Ministry of Science'], ans: 1, expl: 'CPCB operates under India\'s Ministry of Environment, Forest and Climate Change.' },
      { q: 'CPCB mainly deals with:', opts: ['Education','Pollution control','Tax collection','Transport'], ans: 1, expl: 'CPCB\'s primary mandate is pollution prevention and control across India.' },
      { q: 'SPCB stands for:', opts: ['State Pollution Control Board','System Pollution Control Bureau','State Power Control Board','Safety Pollution Control Board'], ans: 0, expl: 'SPCB = State Pollution Control Board, which implements environmental regulations at the state level.' },
      { q: 'SPCB is responsible for:', opts: ['National policies only','State-level pollution control','International agreements','Military operations'], ans: 1, expl: 'SPCBs implement pollution control laws at the state level.' },
      { q: 'CPCB advises:', opts: ['Only industries','Central government','NGOs','Citizens'], ans: 1, expl: 'CPCB advises the central government on matters concerning water and air quality standards.' },
      { q: 'SPCB prepares programs for:', opts: ['Economic growth','Pollution prevention','Trade development','Export promotion'], ans: 1, expl: 'SPCBs develop and implement state-level pollution prevention programs.' },
      { q: 'CPCB maintains data related to:', opts: ['Population','Pollution levels','GDP','Agriculture'], ans: 1, expl: 'CPCB collects and maintains data on pollution levels across India.' },
      { q: 'Which board grants consent for industrial discharge?', opts: ['RBI','CPCB','SPCB','WHO'], ans: 2, expl: 'SPCBs grant consent to establish (CTE) and consent to operate (CTO) for industries.' },
      { q: 'Environmental education helps in:', opts: ['Economic growth only','Understanding environment interactions','Political awareness','Business management'], ans: 1, expl: 'Environmental education helps people understand human-environment interactions and encourages sustainable behavior.' },
      { q: 'Public awareness includes:', opts: ['Industrial training','Media campaigns','Tax reforms','Military drills'], ans: 1, expl: 'Media campaigns, public campaigns, and educational programs are tools for environmental awareness.' },
      { q: 'Environmental awareness is promoted by:', opts: ['Only schools','NGOs and media','Banks','Courts'], ans: 1, expl: 'NGOs and media play a crucial role in spreading environmental awareness.' },
      { q: 'Education helps in:', opts: ['Ignoring environment','Sustainable development','Pollution increase','Resource wastage'], ans: 1, expl: 'Environmental education promotes sustainable development by informing people about environmental issues.' },
      { q: 'Sustainable development means:', opts: ['Using all resources quickly','Meeting present needs without harming future','Industrial expansion only','Population growth'], ans: 1, expl: 'Sustainable development meets present needs while ensuring future generations can meet their own needs.' },
      { q: 'NGO stands for:', opts: ['National Government Organization','Non-Governmental Organization','Natural Growth Organization','Non-General Office'], ans: 1, expl: 'NGO = Non-Governmental Organization — a non-profit group working for social or environmental causes.' },
      { q: 'NGOs mainly work for:', opts: ['Profit','Environmental awareness','Military services','Tax collection'], ans: 1, expl: 'Environmental NGOs work to protect the environment, conserve resources, and raise public awareness.' },
      { q: 'Greenpeace is an example of:', opts: ['Industry','NGO','Government body','Bank'], ans: 1, expl: 'Greenpeace is a global environmental NGO known for direct action campaigns.' },
      { q: 'WWF stands for:', opts: ['World Wildlife Fund','World Water Forum','Wildlife Welfare Federation','Water World Fund'], ans: 0, expl: 'WWF = World Wildlife Fund (now World Wide Fund for Nature), the world\'s largest conservation NGO.' },
      { q: 'NGOs help in:', opts: ['Pollution increase','Environmental protection','Resource wastage','Industrial expansion only'], ans: 1, expl: 'NGOs advocate for environmental policies, carry out conservation projects, and raise awareness.' },
      { q: 'Greenpeace focuses on:', opts: ['Education','Global environmental issues','Banking','Transport'], ans: 1, expl: 'Greenpeace campaigns on climate change, deforestation, ocean protection, and other global issues.' },
      { q: 'WWF mainly works for:', opts: ['Wildlife conservation','Banking','Transport','Education'], ans: 0, expl: 'WWF\'s mission is conservation of nature and reduction of the most pressing threats to biodiversity.' },
      { q: 'NGOs create awareness through:', opts: ['War','Campaigns','Taxes','Law enforcement'], ans: 1, expl: 'NGOs use campaigns, events, social media, and education to create environmental awareness.' },
      { q: 'NGOs act as:', opts: ['Political parties','Advisory bodies','Military units','Banks'], ans: 1, expl: 'NGOs advise governments and communities on environmental issues and policy.' },
      { q: 'NGOs support:', opts: ['Environmental policies','Industrial pollution','Resource wastage','Illegal activities'], ans: 0, expl: 'NGOs advocate for and support strong environmental policies and regulations.' },
      { q: 'Sustainable development balances:', opts: ['Profit only','Environment, economy, and society','Industry only','Population only'], ans: 1, expl: 'The three pillars of sustainable development are environmental, economic, and social sustainability.' },
      { q: 'Sustainable development concept was defined by:', opts: ['UN Commission (Brundtland)','WHO','NASA','WTO'], ans: 0, expl: 'The Brundtland Commission (1987) defined sustainable development in "Our Common Future."' },
      { q: 'Sustainability focuses on:', opts: ['Present only','Future only','Present and future','Past only'], ans: 2, expl: 'Sustainability ensures that both present and future generations have access to resources.' },
      { q: 'Sustainable practices reduce:', opts: ['Awareness','Pollution','Resources','Education'], ans: 1, expl: 'Sustainable practices minimize waste, reduce pollution, and conserve resources.' },
      { q: 'Sustainability includes:', opts: ['Social, economic, environmental aspects','Only economy','Only environment','Only society'], ans: 0, expl: 'Sustainability encompasses three pillars: social equity, economic viability, and environmental health.' },
      { q: 'Solar desalination uses:', opts: ['Wind energy','Solar energy','Nuclear energy','Coal'], ans: 1, expl: 'Solar desalination uses solar energy to evaporate and purify saline water.' },
      { q: 'Solar desalination removes:', opts: ['Oxygen','Salt from water','Nitrogen','Carbon'], ans: 1, expl: 'Solar desalination uses heat from the sun to evaporate water and separate it from salt.' },
      { q: 'Advantage of solar desalination:', opts: ['High cost','Renewable source','Pollution increase','Complex system'], ans: 1, expl: 'Solar desalination uses a renewable, clean energy source with no carbon emissions.' },
      { q: 'Green architecture focuses on:', opts: ['Cost only','Environmental-friendly design','Large buildings','Luxury'], ans: 1, expl: 'Green architecture designs buildings to minimize environmental impact, using renewable materials and energy.' },
      { q: 'Vertical farming involves:', opts: ['Horizontal land use','Multi-layer crop growth','Desert farming','Ocean farming'], ans: 1, expl: 'Vertical farming grows crops in stacked layers indoors, maximizing production with minimal land.' },
      { q: 'Hydroponics is a method of growing plants:', opts: ['In soil','Without soil','In desert','In forest'], ans: 1, expl: 'Hydroponics grows plants in nutrient-rich water solutions, without the need for soil.' },
      { q: 'In hydroponics, plants get nutrients from:', opts: ['Soil','Air','Nutrient solution','Fertilizers only'], ans: 2, expl: 'Plants in hydroponic systems receive a carefully balanced nutrient solution directly to their roots.' },
      { q: 'Aeroponics involves:', opts: ['Plants grown in water','Plants grown in soil','Roots suspended in air','Desert farming'], ans: 2, expl: 'Aeroponics grows plants with roots suspended in air and misted with nutrient solution.' },
      { q: 'NFT technique stands for:', opts: ['Nutrient Film Technique','Natural Farming Technology','New Fertilizer Technique','Nutrient Flow Transfer'], ans: 0, expl: 'NFT (Nutrient Film Technique) is a hydroponic method where a thin film of nutrient solution flows over roots.' },
      { q: 'Ebb and Flow method is used in:', opts: ['Hydroponics','Forestry','Mining','Transport'], ans: 0, expl: 'Ebb and Flow (flood and drain) is a hydroponic technique that periodically floods the root zone with nutrient solution.' },
      { q: 'Advantage of hydroponics:', opts: ['High water usage','Reduced crop yield','Faster growth','Soil erosion'], ans: 2, expl: 'Hydroponics can produce crops 50% faster than traditional soil farming with less water.' },
      { q: 'A disadvantage of hydroponics is:', opts: ['Low cost','No expertise needed','High initial cost','No maintenance'], ans: 2, expl: 'Hydroponic systems require significant initial investment in equipment and infrastructure.' },
      { q: 'Aeroponics saves:', opts: ['Land only','Water and space','Money only','Energy only'], ans: 1, expl: 'Aeroponics uses up to 95% less water than soil farming and takes less space.' },
      { q: 'Drip irrigation in hydroponics supplies:', opts: ['Air','Nutrients','Soil','Heat'], ans: 1, expl: 'Drip systems in hydroponics deliver nutrient solution directly to the plant root zone.' },
      { q: 'Hydroponics is mainly used in:', opts: ['Traditional farming','Controlled environments','Forest areas','Oceans'], ans: 1, expl: 'Hydroponics is primarily used in greenhouses and indoor controlled environment agriculture.' },
      { q: 'Electric vehicles run on:', opts: ['Petrol','Diesel','Electricity','Gas'], ans: 2, expl: 'Electric vehicles (EVs) use electricity stored in batteries to power electric motors.' },
      { q: 'EVs use batteries and:', opts: ['Engines','Electric motors','Boilers','Turbines'], ans: 1, expl: 'EVs store electricity in batteries and use electric motors to drive the wheels.' },
      { q: 'Hybrid Electric Vehicles use:', opts: ['Only battery','Only fuel','Battery + engine','Solar only'], ans: 2, expl: 'Hybrid EVs combine a conventional internal combustion engine with an electric motor and battery.' },
      { q: 'Advantage of EVs:', opts: ['High pollution','Zero emissions','Noise pollution','Fuel consumption'], ans: 1, expl: 'Battery-electric vehicles produce zero tailpipe emissions, reducing urban air pollution.' },
      { q: 'EVs reduce:', opts: ['Air pollution','Water pollution','Soil erosion','Noise only'], ans: 0, expl: 'EVs eliminate exhaust emissions, significantly reducing air pollution in urban areas.' },
      { q: 'A limitation of EVs is:', opts: ['Low cost','Unlimited charging','Limited battery life','No maintenance'], ans: 2, expl: 'EV batteries degrade over time and have limited range, requiring regular recharging.' },
      { q: 'EV charging infrastructure is:', opts: ['Fully developed','Limited','Not required','Cheap'], ans: 1, expl: 'EV charging infrastructure is still being developed and is limited in many areas.' },
      { q: 'EVs produce:', opts: ['High emissions','Zero tailpipe emissions','Smoke','Dust'], ans: 1, expl: 'EVs produce zero direct (tailpipe) emissions, though electricity generation may have emissions.' },
      { q: 'Example of EV company:', opts: ['Honda','Tesla','Samsung','Intel'], ans: 1, expl: 'Tesla is a leading EV manufacturer known for its long-range battery electric vehicles.' },
      { q: 'EVs help in:', opts: ['Climate change increase','Environmental protection','Resource depletion','Pollution increase'], ans: 1, expl: 'EVs contribute to environmental protection by reducing dependence on fossil fuels.' },
      { q: 'Plant-based packaging is made from:', opts: ['Metals','Petroleum','Renewable resources','Glass'], ans: 2, expl: 'Plant-based packaging uses renewable bio-based materials like corn starch, sugarcane, or cellulose.' },
      { q: 'PLA is derived from:', opts: ['Oil','Corn starch','Iron','Coal'], ans: 1, expl: 'PLA (Polylactic Acid) is a bioplastic derived from fermented plant starches like corn.' },
      { q: 'PHA is:', opts: ['Plastic polymer','Biodegradable material','Metal','Fuel'], ans: 1, expl: 'PHA (Polyhydroxyalkanoates) is a biodegradable polymer produced by microorganisms from organic materials.' },
      { q: 'Cellulose-based packaging comes from:', opts: ['Petroleum','Wood pulp','Plastic','Rubber'], ans: 1, expl: 'Cellulose packaging is derived from wood pulp or other plant fiber sources.' },
      { q: 'Advantage of plant-based packaging:', opts: ['Non-biodegradable','Reduces pollution','Expensive only','Heavy'], ans: 1, expl: 'Plant-based packaging biodegrades naturally, reducing plastic pollution.' },
      { q: 'Plant-based packaging reduces:', opts: ['Waste','Energy','Food','Oxygen'], ans: 0, expl: 'Biodegradable plant-based packaging reduces plastic waste in landfills and oceans.' },
      { q: 'Disadvantage of plant packaging:', opts: ['Low cost','High cost','Biodegradable','Eco-friendly'], ans: 1, expl: 'Plant-based packaging typically costs more than conventional petroleum-based plastics.' },
      { q: 'Plant-based plastics are:', opts: ['Non-renewable','Biodegradable','Toxic','Metallic'], ans: 1, expl: 'Most plant-based plastics are biodegradable under the right conditions.' },
      { q: 'Main aim of plant packaging:', opts: ['Increase waste','Sustainability','Pollution','Profit only'], ans: 1, expl: 'Plant-based packaging aims to provide sustainable, eco-friendly alternatives to fossil fuel plastics.' },
      { q: 'Bioplastics are derived from:', opts: ['Fossil fuels','Plants','Metals','Gas'], ans: 1, expl: 'Bioplastics are made from plant-derived materials (corn, sugarcane, cassava, etc.).' },
      { q: 'IT helps in:', opts: ['Pollution increase','Data management','Resource wastage','Deforestation'], ans: 1, expl: 'IT enables efficient data collection, management, and analysis for environmental monitoring.' },
      { q: 'GIS stands for:', opts: ['Global Information System','Geographic Information System','General Info System','Geo Internet System'], ans: 1, expl: 'GIS (Geographic Information System) maps and analyzes spatial/geographic data.' },
      { q: 'Remote sensing is used for:', opts: ['Cooking','Data collection from distance','Farming only','Banking'], ans: 1, expl: 'Remote sensing collects data about Earth\'s surface from satellites or aircraft.' },
      { q: 'ENVIS stands for:', opts: ['Environmental Information System','Energy Information System','Environment Value Info System','Eco Network System'], ans: 0, expl: 'ENVIS (Environmental Information System) is India\'s network of environmental information databases.' },
      { q: 'NMIS stands for:', opts: ['National Management Info System','National Medical Info System','National Mission Info System','Network Management Info System'], ans: 0, expl: 'NMIS is a national data management system.' },
      { q: 'IT helps in monitoring:', opts: ['Pollution','Weather','Disasters','All of the above'], ans: 3, expl: 'IT-based systems monitor air quality, weather patterns, and natural disasters in real time.' },
      { q: 'GIS is useful in:', opts: ['Mapping','Pollution tracking','Resource management','All of the above'], ans: 3, expl: 'GIS is used for environmental mapping, pollution monitoring, and natural resource management.' },
      { q: 'Remote sensing helps in:', opts: ['Predicting disasters','Cooking food','Driving','Banking'], ans: 0, expl: 'Remote sensing data is used for early warning systems for floods, droughts, and other disasters.' },
      { q: 'IT in healthcare helps in:', opts: ['Disease tracking','Treatment planning','Data storage','All of the above'], ans: 3, expl: 'IT in healthcare enables disease surveillance, personalized treatment, and efficient health data management.' },
      { q: 'IT improves:', opts: ['Environmental monitoring','Data analysis','Decision making','All of the above'], ans: 3, expl: 'IT improves all aspects of environmental management — monitoring, analysis, and policy decision-making.' },
    ]
  },

  /* ─── Unit Test 1 Question Bank ─── */
  'ut1': {
  "title": "Unit Test 1 Question Bank",
  "questions": [
    {
      "q": "What is the primary cause of global warming?",
      "opts": ["Deforestation", "Greenhouse gas emissions", "Ocean currents", "Solar radiation"],
      "ans": 1,
      "expl": "Greenhouse gases trap heat in the atmosphere, causing the Earth's average temperature to rise."
    },
    {
      "q": "Which of the following gases is a major contributor to global warming?",
      "opts": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      "ans": 1,
      "expl": "Carbon dioxide is the most significant greenhouse gas released through human activities."
    },
    {
      "q": "Which of the following human activities is most responsible for increasing carbon dioxide levels in the atmosphere?",
      "opts": ["Agricultural activities", "Industrial processes", "Fossil fuel combustion", "Solar energy production"],
      "ans": 2,
      "expl": "Burning coal, oil, and gas is the primary source of anthropogenic CO2 emissions."
    },
    {
      "q": "What is the effect of global warming on sea levels?",
      "opts": ["Sea levels decrease", "Sea levels remain the same", "Sea levels rise", "Sea levels fluctuate unpredictably"],
      "ans": 2,
      "expl": "Global warming causes thermal expansion of water and melting of glaciers, leading to sea level rise."
    },
    {
      "q": "Which of the following is a consequence of melting ice caps due to global warming?",
      "opts": ["Increased crop yields", "Loss of biodiversity", "Decreased ocean acidity", "Improved air quality"],
      "ans": 1,
      "expl": "Melting ice caps destroy habitats for polar species, leading to a loss of biodiversity."
    },
    {
      "q": "The Kyoto Protocol aimed to reduce emissions of which of the following?",
      "opts": ["Methane only", "Greenhouse gases", "Sulfur compounds", "Nitrogen oxides"],
      "ans": 1,
      "expl": "The Kyoto Protocol is an international treaty that commits state parties to reduce greenhouse gas emissions."
    },
    {
      "q": "Which of the following is NOT a renewable energy source that can help reduce global warming?",
      "opts": ["Wind energy", "Solar energy", "Natural gas", "Hydropower"],
      "ans": 2,
      "expl": "Natural gas is a fossil fuel and a non-renewable source of energy."
    },
    {
      "q": "What is the greenhouse effect?",
      "opts": ["A natural process where the Earth's atmosphere traps heat from the sun", "A phenomenon where the ozone layer blocks sunlight", "The cooling of the Earth due to cloud cover", "The warming of the Earth caused by volcanic eruptions"],
      "ans": 0,
      "expl": "The greenhouse effect is a natural process that warms the Earth's surface."
    },
    {
      "q": "Which international agreement aims to limit global warming to below 2°C compared to pre-industrial levels?",
      "opts": ["The Paris Agreement", "The Montreal Protocol", "The Rio Earth Summit", "The Geneva Convention"],
      "ans": 0,
      "expl": "The Paris Agreement's goal is to keep global temperature rise well below 2 degrees Celsius."
    },
    {
      "q": "What is one of the main effects of global warming on the weather?",
      "opts": ["Decreased frequency of extreme weather events", "A decrease in average global temperatures", "Increased frequency of extreme weather events", "More stable weather patterns"],
      "ans": 2,
      "expl": "Global warming leads to more frequent and intense storms, droughts, and heatwaves."
    },
    {
      "q": "What is acid rain?",
      "opts": ["Rainwater with a pH greater than 7", "Rainwater with a pH less than 7", "Rainwater that has high levels of oxygen", "Rainwater that is neutral in pH"],
      "ans": 1,
      "expl": "Any form of precipitation with acidic components, such as sulfuric or nitric acid, results in a pH lower than 7."
    },
    {
      "q": "Which of the following gases are primarily responsible for the formation of acid rain?",
      "opts": ["Nitrogen dioxide and sulfur dioxide", "Oxygen and carbon dioxide", "Methane and ozone", "Nitrogen and hydrogen"],
      "ans": 0,
      "expl": "Sulfur dioxide (SO2) and Nitrogen oxides (NOx) react with water molecules in the atmosphere to form acids."
    },
    {
      "q": "Which of the following is a major natural source of acid rain?",
      "opts": ["Volcanoes", "Automobiles", "Power plants", "Agricultural activities"],
      "ans": 0,
      "expl": "Volcanic eruptions release significant amounts of sulfur dioxide into the atmosphere."
    },
    {
      "q": "What is the typical pH value of acid rain?",
      "opts": ["5.0 to 6.0", "6.5 to 7.5", "7.0 to 8.0", "8.0 to 9.0"],
      "ans": 0,
      "expl": "While normal rain has a pH of about 5.6, acid rain typically has a pH between 5.0 and 6.0."
    },
    {
      "q": "Which of the following is an environmental impact of acid rain?",
      "opts": ["It improves soil fertility", "It harms aquatic life by lowering water pH", "It increases plant growth", "It improves air quality"],
      "ans": 1,
      "expl": "Acid rain makes waters acidic and causes them to absorb aluminum that makes its way from soil into lakes and streams, harming aquatic life."
    },
    {
      "q": "Acid rain can damage buildings and monuments, particularly those made of which material?",
      "opts": ["Glass", "Marble and limestone", "Wood", "Steel"],
      "ans": 1,
      "expl": "Acid rain reacts with calcium carbonate in marble and limestone, causing them to dissolve and crumble."
    },
    {
      "q": "What is the primary method to reduce acid rain formation?",
      "opts": ["Using more fossil fuels", "Reducing emissions of sulfur dioxide and nitrogen oxides", "Increasing the use of pesticides", "Increasing the amount of water vapor in the atmosphere"],
      "ans": 1,
      "expl": "Limiting the release of SO2 and NOx from power plants and vehicles is the most effective strategy."
    },
    {
      "q": "What term is used for the process in which acid rain affects the soil, making it less fertile?",
      "opts": ["Eutrophication", "Soil acidification", "Ozone depletion", "Desertification"],
      "ans": 1,
      "expl": "Soil acidification occurs when acid rain leaches essential nutrients like calcium and magnesium from the soil."
    },
    {
      "q": "Which of the following human activities contributes the most to the formation of acid rain?",
      "opts": ["Burning of fossil fuels for energy production", "Agricultural activities", "Deforestation", "Overfishing"],
      "ans": 0,
      "expl": "The combustion of fossil fuels in power plants is the largest source of SO2 and NOx emissions."
    },
    {
      "q": "What is the main cause of ozone depletion?",
      "opts": ["Air pollution", "CFCs (Chlorofluorocarbons)", "Carbon dioxide", "Nitrogen oxides"],
      "ans": 1,
      "expl": "CFCs released into the atmosphere break down and release chlorine atoms that destroy ozone molecules."
    },
    {
      "q": "Which layer of the Earth's atmosphere contains the ozone layer?",
      "opts": ["Thermosphere", "Stratosphere", "Mesosphere", "Troposphere"],
      "ans": 1,
      "expl": "The stratosphere contains the highest concentration of ozone, which protects Earth from UV radiation."
    },
    {
      "q": "What is the effect of ozone depletion on humans?",
      "opts": ["Increases plant growth", "Reduces the incidence of skin cancer", "Increases the risk of skin cancer", "Improves air quality"],
      "ans": 2,
      "expl": "Thinning of the ozone layer allows more UV radiation to reach Earth, increasing the risk of skin cancer and cataracts."
    },
    {
      "q": "Which of the following compounds is primarily responsible for ozone depletion?",
      "opts": ["Sulfur dioxide", "CFCs", "Methane", "Carbon monoxide"],
      "ans": 1,
      "expl": "Chlorofluorocarbons (CFCs) are the primary chemicals responsible for the breakdown of the ozone layer."
    },
    {
      "q": "Which international agreement aimed at reducing ozone-depleting substances?",
      "opts": ["Kyoto Protocol", "Paris Agreement", "Montreal Protocol", "Geneva Convention"],
      "ans": 2,
      "expl": "The Montreal Protocol is a global agreement to protect the stratospheric ozone layer by phasing out ODS."
    },
    {
      "q": "Ozone depletion is most significant over which region of the Earth?",
      "opts": ["Equator", "Tropics", "Poles, especially the South Pole", "Near the Himalayas"],
      "ans": 2,
      "expl": "The 'ozone hole' is most pronounced over Antarctica due to unique atmospheric conditions."
    },
    {
      "q": "What is the 'ozone hole'?",
      "opts": ["A region of low ozone concentration in the stratosphere", "A hole in the ozone layer caused by human activities", "A permanent gap in the Earth's atmosphere", "A space between the ozone layer and the troposphere"],
      "ans": 0,
      "expl": "It refers to the severe depletion of the ozone layer in the stratosphere over the Antarctic."
    },
    {
      "q": "What happens when ozone in the stratosphere is depleted?",
      "opts": ["Increased UV radiation reaches Earth", "Air quality improves", "Greenhouse gases are reduced", "Temperature of the Earth's surface decreases"],
      "ans": 0,
      "expl": "The primary role of ozone is to filter UV-B radiation; less ozone means more radiation reaches the surface."
    },
    {
      "q": "Which of the following is a natural source of ozone depletion?",
      "opts": ["Volcanic eruptions", "Car emissions", "Air conditioners", "Forest fires"],
      "ans": 0,
      "expl": "Large volcanic eruptions can inject aerosol particles into the stratosphere, facilitating ozone-destroying reactions."
    },
    {
      "q": "Which of the following is NOT a component of the environment?",
      "opts": ["Air", "Water", "Solar energy", "Gravity"],
      "ans": 3,
      "expl": "Gravity is a fundamental force, whereas air, water, and energy are physical/biological components of the environment."
    },
    {
      "q": "The biotic components of the environment include:",
      "opts": ["Air and water", "Plants and animals", "Soil and minerals", "Light and temperature"],
      "ans": 1,
      "expl": "Biotic components refer to all living organisms in an ecosystem."
    },
    {
      "q": "Which of these is an example of an abiotic component?",
      "opts": ["Human beings", "Plants", "Sunlight", "Animals"],
      "ans": 2,
      "expl": "Abiotic components are the non-living physical and chemical elements in the environment."
    },
    {
      "q": "The ozone layer protects the Earth from:",
      "opts": ["Acid rain", "UV radiation", "Flooding", "Climate change"],
      "ans": 1,
      "expl": "The ozone layer absorbs most of the Sun's harmful ultraviolet radiation."
    },
    {
      "q": "Which of the following gases is primarily responsible for global warming?",
      "opts": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      "ans": 2,
      "expl": "Carbon dioxide is the primary greenhouse gas emitted through human activities."
    },
    {
      "q": "The term 'biodiversity' refers to:",
      "opts": ["The variety of life on Earth", "The extinction of species", "The impact of pollution on the environment", "The process of environmental conservation"],
      "ans": 0,
      "expl": "Biodiversity encompasses the variety of all living organisms on Earth."
    },
    {
      "q": "Which of the following is an example of a renewable resource?",
      "opts": ["Coal", "Oil", "Wind energy", "Natural gas"],
      "ans": 2,
      "expl": "Wind energy is naturally replenished and does not get exhausted."
    },
    {
      "q": "Which of these is a major environmental issue caused by deforestation?",
      "opts": ["Soil erosion", "Water scarcity", "Increased biodiversity", "Global cooling"],
      "ans": 0,
      "expl": "Removing trees removes the roots that hold soil in place, leading to significant erosion."
    },
    {
      "q": "The 'carbon cycle' is important for:",
      "opts": ["Recycling water in ecosystems", "Regulating Earth's temperature", "Producing oxygen in plants", "The flow of energy in food chains"],
      "ans": 1,
      "expl": "The carbon cycle regulates the concentration of CO2 in the atmosphere, helping to control the climate."
    },
    {
      "q": "Which of the following is a non-renewable resource?",
      "opts": ["Solar energy", "Wind energy", "Coal", "Geothermal energy"],
      "ans": 2,
      "expl": "Coal is a fossil fuel that takes millions of years to form and cannot be replaced once used."
    },
    {
      "q": "What does the 'Refuse' principle in the 5R concept primarily encourage?",
      "opts": ["Reusing materials", "Recycling products", "Rejecting items that are unnecessary or harmful", "Rotting organic waste"],
      "ans": 2,
      "expl": "Refusing means saying no to items like single-use plastics to prevent waste from being created."
    },
    {
      "q": "Which of the following best describes the principle of 'Reduce' in the 5R concept?",
      "opts": ["Cutting down on the use of single-use plastics", "Reusing old products", "Limiting the amount of waste generated", "Composting organic waste"],
      "ans": 2,
      "expl": "Reducing involves making choices that result in less waste, such as buying in bulk or choosing less packaging."
    },
    {
      "q": "What is the main focus of the 'Reuse' principle in the 5R concept?",
      "opts": ["Recycling materials into new products", "Buying more products", "Using items more than once to extend their life", "Reducing carbon footprints"],
      "ans": 2,
      "expl": "Reuse focuses on finding new ways to use items instead of throwing them away."
    },
    {
      "q": "Recycle in the 5R concept means:",
      "opts": ["Creating new products from used materials", "Refusing to buy new items", "Planting trees to offset waste", "Rotting organic waste for compost"],
      "ans": 0,
      "expl": "Recycling involves processing used materials into new products to prevent waste of potentially useful materials."
    },
    {
      "q": "The principle of 'Rot' in the 5R concept is best associated with:",
      "opts": ["Making compost from organic waste", "Recycling paper products", "Refusing to buy products with excessive packaging", "Reducing energy consumption"],
      "ans": 0,
      "expl": "Rot refers to composting organic matter like food scraps and yard waste to return nutrients to the soil."
    },
    {
      "q": "Which of the following is NOT part of the 5Rs concept?",
      "opts": ["Refuse", "Recycle", "Restore", "Reuse"],
      "ans": 2,
      "expl": "The standard 5Rs are Refuse, Reduce, Reuse, Recycle, and Rot."
    },
    {
      "q": "The 'Reduce' principle helps in:",
      "opts": ["Minimizing the waste generated by purchasing fewer goods", "Maximizing the use of resources in production", "Increasing the number of recyclable items", "Improving waste management facilities"],
      "ans": 0,
      "expl": "By purchasing fewer goods, we directly decrease the volume of waste that enters the system."
    },
    {
      "q": "Which of the following activities aligns with the 'Reuse' concept?",
      "opts": ["Turning plastic bottles into new plastic products", "Using cloth bags instead of disposable ones", "Turning waste into compost", "Refusing packaging materials"],
      "ans": 1,
      "expl": "Using cloth bags repeatedly instead of single-use bags is a classic example of reuse."
    },
    {
      "q": "What is the environmental benefit of practicing the 'Recycle' principle?",
      "opts": ["Reduces the need for virgin resources", "Encourages waste production", "Increases plastic pollution", "Encourages faster disposal of waste"],
      "ans": 0,
      "expl": "Recycling reduces the demand for raw (virgin) materials, saving energy and preserving natural habitats."
    },
    {
      "q": "Which of the following is NOT a Sustainable Development Goal (SDG)?",
      "opts": ["Quality Education", "Zero Hunger", "Economic Growth", "Peace and Justice"],
      "ans": 2,
      "expl": "While 'Decent Work and Economic Growth' is SDG 8, 'Economic Growth' on its own is not listed as a standalone goal in the same wording."
    },
    {
      "q": "How many Sustainable Development Goals (SDGs) are there in total?",
      "opts": ["10", "12", "17", "20"],
      "ans": 2,
      "expl": "The United Nations set 17 interlinked global goals designed to be a 'blueprint to achieve a better and more sustainable future for all'."
    },
    {
      "q": "Which SDG aims to 'end poverty in all its forms everywhere'?",
      "opts": ["SDG 1", "SDG 2", "SDG 3", "SDG 4"],
      "ans": 0,
      "expl": "SDG 1 is 'No Poverty', aiming to eradicate extreme poverty for all people everywhere."
    },
    {
      "q": "Which SDG focuses on 'ensuring inclusive and equitable quality education'?",
      "opts": ["SDG 4", "SDG 5", "SDG 6", "SDG 7"],
      "ans": 0,
      "expl": "SDG 4 is 'Quality Education', ensuring that all girls and boys complete free, equitable, and quality primary and secondary education."
    },
    {
      "q": "Which of the following is the goal of SDG 7?",
      "opts": ["Affordable and Clean Energy", "Clean Water and Sanitation", "Climate Action", "Responsible Consumption and Production"],
      "ans": 0,
      "expl": "SDG 7 aims to ensure access to affordable, reliable, sustainable and modern energy for all."
    },
    {
      "q": "What is the target year for achieving the Sustainable Development Goals (SDGs)?",
      "opts": ["2025", "2030", "2040", "2050"],
      "ans": 1,
      "expl": "The SDGs were adopted in 2015 with a target completion date of 2030."
    },
    {
      "q": "Which SDG focuses on 'gender equality and empowerment of women and girls'?",
      "opts": ["SDG 2", "SDG 3", "SDG 5", "SDG 8"],
      "ans": 2,
      "expl": "SDG 5 is dedicated to achieving gender equality and empowering all women and girls."
    },
    {
      "q": "What is the primary focus of SDG 13?",
      "opts": ["Climate Action", "Responsible Consumption", "Clean Water and Sanitation", "Good Health and Well-being"],
      "ans": 0,
      "expl": "SDG 13 calls for urgent action to combat climate change and its impacts."
    },
    {
      "q": "Which SDG aims to 'ensure healthy lives and promote well-being for all at all ages'?",
      "opts": ["SDG 1", "SDG 3", "SDG 6", "SDG 9"],
      "ans": 1,
      "expl": "SDG 3 is 'Good Health and Well-being', focusing on health outcomes across the lifespan."
    },
    {
      "q": "Which SDG is concerned with 'clean water and sanitation'?",
      "opts": ["SDG 6", "SDG 7", "SDG 8", "SDG 11"],
      "ans": 0,
      "expl": "SDG 6 aims to ensure availability and sustainable management of water and sanitation for all."
    },
    {
      "q": "Which of the following texts mentions the reverence for natural elements and emphasizes the protection of the environment?",
      "opts": ["Vedas", "Upanishads", "Ramayana", "Mahabharata"],
      "ans": 0,
      "expl": "The Vedas contain numerous hymns (Suktas) that deify and show deep respect for natural elements."
    },
    {
      "q": "Which of the following was a primary concern for the Vedic people with regard to the environment?",
      "opts": ["Tree cutting", "Water conservation", "Soil erosion", "Wildlife protection"],
      "ans": 1,
      "expl": "Water was considered the source of life in Vedic culture, and its conservation was a primary focus."
    },
    {
      "q": "In Vedic times, which natural element was considered sacred and worshipped as a deity?",
      "opts": ["Fire (Agni)", "Sun (Surya)", "Wind (Vayu)", "All of the above"],
      "ans": 3,
      "expl": "Vedic people worshipped various aspects of nature as deities, including Agni, Surya, and Vayu."
    },
    {
      "q": "The Pre-Vedic period was characterized by which of the following practices to conserve natural resources?",
      "opts": ["Agricultural development", "Sacred groves and natural sanctuaries", "Animal sacrifice", "Metal working"],
      "ans": 1,
      "expl": "Sacred groves were patches of forest protected by local communities due to religious beliefs."
    },
    {
      "q": "Which of the following was an integral part of environmental conservation as mentioned in the Atharvaveda?",
      "opts": ["Preservation of rivers", "Conservation of animal species", "Agricultural practices", "Water rituals"],
      "ans": 0,
      "expl": "The Atharvaveda emphasizes the purity and preservation of rivers as vital lifelines."
    },
    {
      "q": "In Vedic culture, how was the river Ganga regarded?",
      "opts": ["As a source of irrigation", "As a purifier and sacred river", "As a trade route", "As a source of spiritual teachings"],
      "ans": 1,
      "expl": "The Ganga has historically been revered as a goddess and a purifier of sins in Indian culture."
    },
    {
      "q": "The term 'Vanaspati' in Vedic literature refers to what?",
      "opts": ["Forest deity", "Sacred tree", "Mountain god", "River goddess"],
      "ans": 1,
      "expl": "Vanaspati generally refers to the 'Lord of the Forest' or large, sacred trees in Vedic texts."
    },
    {
      "q": "Which of the following is NOT a primary function of forests?",
      "opts": ["Oxygen production", "Carbon dioxide absorption", "Soil erosion prevention", "Manufacturing of agricultural equipment"],
      "ans": 3,
      "expl": "While forests provide wood for tools, manufacturing equipment is an industrial activity, not a biological function of the forest."
    },
    {
      "q": "What is the main reason for deforestation?",
      "opts": ["Increased wildlife population", "Urbanization and agriculture expansion", "Soil fertility improvement", "Protection of endangered species"],
      "ans": 1,
      "expl": "Growing populations lead to the clearing of forests for housing, industry, and farming."
    },
    {
      "q": "What is the term for the process of planting trees to restore forests that have been cut down?",
      "opts": ["Afforestation", "Reforestation", "Deforestation", "Desertification"],
      "ans": 1,
      "expl": "Reforestation is the replanting of trees on land that was previously forested."
    },
    {
      "q": "Which of the following forest types is most threatened by human activity?",
      "opts": ["Boreal forests", "Tropical rainforests", "Temperate forests", "Savannah forests"],
      "ans": 1,
      "expl": "Tropical rainforests are being cleared at alarming rates for timber, palm oil, and cattle ranching."
    },
    {
      "q": "What is the main purpose of forest conservation?",
      "opts": ["Increase timber production", "Maintain ecological balance and biodiversity", "Reduce the need for agricultural land", "Boost urban development"],
      "ans": 1,
      "expl": "Conservation aims to protect the natural functions of the forest and the variety of species living within it."
    },
    {
      "q": "Which of the following is an example of a non-timber forest product?",
      "opts": ["Timber", "Resin", "Pulpwood", "Wood chips"],
      "ans": 1,
      "expl": "Resin is a substance collected from trees that does not involve harvesting the wood itself."
    },
    {
      "q": "What is overexploitation of natural resources?",
      "opts": ["The sustainable use of natural resources", "The excessive use of natural resources beyond their capacity to regenerate", "The controlled use of natural resources", "The preservation of natural resources"],
      "ans": 1,
      "expl": "Overexploitation refers to the excessive use of natural resources beyond their capacity to regenerate."
    },
    {
      "q": "Which of the following is a major consequence of overexploitation of forests?",
      "opts": ["Biodiversity conservation", "Soil erosion", "Increase in wildlife population", "Decrease in atmospheric CO2"],
      "ans": 1,
      "expl": "Overexploitation of forests leads to soil erosion due to the loss of tree cover."
    },
    {
      "q": "Overexploitation of groundwater can result in which of the following?",
      "opts": ["Replenishment of water sources", "Depletion of aquifers and reduced water availability", "Increase in water table levels", "Improvement of agricultural productivity"],
      "ans": 1,
      "expl": "Overexploitation of groundwater leads to the depletion of aquifers and reduced water availability."
    },
    {
      "q": "Which of the following is an example of overexploitation in mining?",
      "opts": ["Sustainable extraction of minerals", "Mining at a rate faster than natural replenishment", "Reclamation of mined lands", "Reduced extraction due to conservation efforts"],
      "ans": 1,
      "expl": "Overexploitation in mining occurs when minerals are extracted at a rate faster than their natural replenishment."
    },
    {
      "q": "Which of the following practices is most likely to help mitigate overexploitation of natural resources?",
      "opts": ["Deforestation and urban expansion", "Sustainable resource management and conservation", "Overharvesting and depletion of ecosystems", "Excessive use of fossil fuels"],
      "ans": 1,
      "expl": "Sustainable resource management and conservation are key to mitigating overexploitation."
    },
    {
      "q": "How does overexploitation contribute to climate change?",
      "opts": ["By reducing greenhouse gas emissions", "By increasing atmospheric carbon dioxide through deforestation and fossil fuel use", "By reducing the effects of global warming", "By enhancing the carbon absorption capacity of ecosystems"],
      "ans": 1,
      "expl": "Overexploitation contributes to climate change by increasing atmospheric CO2 through deforestation and the burning of fossil fuels."
    },
    {
      "q": "Which of the following is a type of solar energy technology used to convert sunlight into electricity?",
      "opts": ["Wind turbine", "Photovoltaic cells", "Hydroelectric power", "Geothermal energy"],
      "ans": 1,
      "expl": "Photovoltaic cells (PV) convert light directly into electricity using semiconducting materials."
    },
    {
      "q": "What is the efficiency range of most commercial photovoltaic solar panels?",
      "opts": ["1% to 5%", "5% to 20%", "20% to 40%", "40% to 60%"],
      "ans": 1,
      "expl": "Most current commercial solar panels convert between 15% and 20% of sunlight into electricity."
    },
    {
      "q": "What is the term for the process of converting sunlight directly into electricity?",
      "opts": ["Solar thermal energy", "Photovoltaic effect", "Solar radiation", "Conduction"],
      "ans": 1,
      "expl": "The photovoltaic effect is a process that generates voltage or electric current in a photovoltaic cell when exposed to sunlight."
    },
    {
      "q": "Which of the following is a disadvantage of solar energy?",
      "opts": ["It is non-renewable", "It causes air pollution", "It is dependent on weather conditions", "It requires fuel for operation"],
      "ans": 2,
      "expl": "Solar energy production decreases during cloudy days and is unavailable at night."
    },
    {
      "q": "What is the main component of a solar panel?",
      "opts": ["Copper wire", "Glass", "Silicon", "Aluminum"],
      "ans": 2,
      "expl": "Silicon is the primary semiconductor material used in the manufacturing of solar cells."
    },
    {
      "q": "What is the most common use of solar energy in residential areas?",
      "opts": ["Heating water", "Charging batteries", "Lighting streets", "Cooking food"],
      "ans": 0,
      "expl": "Solar water heaters are a very common and efficient residential application of solar thermal energy."
    },
    {
      "q": "Which of the following is a significant advantage of solar energy?",
      "opts": ["It can be stored in batteries", "It is a non-renewable resource", "It is expensive to install", "It is polluting to the environment"],
      "ans": 0,
      "expl": "Excess electricity generated during the day can be stored in battery systems for use at night."
    },
    {
      "q": "How does solar energy contribute to reducing greenhouse gas emissions?",
      "opts": ["It produces electricity without burning fossil fuels", "It requires large amounts of water", "It releases carbon dioxide into the atmosphere", "It produces harmful waste materials"],
      "ans": 0,
      "expl": "Solar panels generate clean energy without emitting CO2 or other harmful pollutants."
    },
    {
      "q": "Which of the following is a major benefit of wind energy?",
      "opts": ["It is a non-renewable energy source.", "It produces no greenhouse gases during operation.", "It causes significant air pollution.", "It is more expensive than fossil fuels."],
      "ans": 1,
      "expl": "Wind turbines produce clean electricity by harnessing the wind without any operational emissions."
    },
    {
      "q": "What type of wind turbines are most commonly used today?",
      "opts": ["Vertical-axis wind turbines", "Horizontal-axis wind turbines", "Circular-axis wind turbines", "Inclined-axis wind turbines"],
      "ans": 1,
      "expl": "Horizontal-axis turbines (with three blades) are the most efficient and widely used design."
    },
    {
      "q": "What is the main component of a wind turbine that captures wind energy?",
      "opts": ["Blades", "Generator", "Tower", "Rotor"],
      "ans": 0,
      "expl": "The blades are designed to catch the wind and rotate the hub."
    },
    {
      "q": "What is the term used to describe the amount of electricity generated by a wind turbine?",
      "opts": ["Capacity factor", "Wind speed", "Wind capacity", "Energy output"],
      "ans": 3,
      "expl": "Energy output refers to the actual amount of electricity produced over a specific period."
    },
    {
      "q": "What factor primarily determines the efficiency of a wind turbine?",
      "opts": ["Wind speed", "Height of the turbine", "Age of the turbine", "Size of the blades"],
      "ans": 0,
      "expl": "The energy available in the wind is proportional to the cube of the wind speed."
    },
    {
      "q": "Which of the following is a disadvantage of wind energy?",
      "opts": ["High greenhouse gas emissions", "Dependency on favorable wind conditions", "Lack of space for turbines", "Non-renewable"],
      "ans": 1,
      "expl": "Wind is an intermittent resource; if the wind doesn't blow, electricity isn't generated."
    },
    {
      "q": "What is the principle behind the operation of wind turbines?",
      "opts": ["Turning wind energy into chemical energy", "Converting mechanical energy into electrical energy", "Converting solar energy into electrical energy", "Using wind to produce steam for turbines"],
      "ans": 1,
      "expl": "Wind turns the blades (mechanical energy), which spins a generator to create electricity (electrical energy)."
    },
    {
      "q": "What is biomass energy?",
      "opts": ["Energy derived from fossil fuels", "Energy obtained from organic materials", "Energy obtained from wind", "Energy derived from water"],
      "ans": 1,
      "expl": "Biomass is organic matter derived from plants and animals used as fuel."
    },
    {
      "q": "Which of these is the primary advantage of biomass energy?",
      "opts": ["High energy efficiency", "Low cost and renewable", "No greenhouse gas emissions", "Easy storage"],
      "ans": 1,
      "expl": "Biomass is a renewable source that is often available locally at a lower cost than fossil fuels."
    },
    {
      "q": "Biomass energy is considered carbon neutral because:",
      "opts": ["It releases no carbon dioxide into the atmosphere", "The carbon dioxide released is absorbed by plants during growth", "It produces only oxygen", "It is made from waste materials"],
      "ans": 1,
      "expl": "The CO2 released during combustion is roughly equal to the amount the plants absorbed while growing."
    },
    {
      "q": "Which of these feedstocks is commonly used for producing bioethanol?",
      "opts": ["Sunflower oil", "Corn", "Wood chips", "Cow dung"],
      "ans": 1,
      "expl": "Corn and sugarcane are the most common feedstocks for producing ethanol through fermentation."
    },
    {
      "q": "Which of the following is NOT a type of ocean energy?",
      "opts": ["Tidal Energy", "Wave Energy", "Geothermal Energy", "Ocean Thermal Energy"],
      "ans": 2,
      "expl": "Geothermal energy comes from the Earth's internal heat, not from ocean processes."
    },
    {
      "q": "Which technology is used to capture energy from the temperature difference between warm surface water and cold deep water?",
      "opts": ["Tidal turbines", "Ocean thermal energy conversion (OTEC)", "Wave energy converters", "Solar panels"],
      "ans": 1,
      "expl": "OTEC uses the temperature gradient in the ocean to run a power cycle and produce electricity."
    },
    {
      "q": "Tidal energy is primarily generated from which natural phenomenon?",
      "opts": ["Solar radiation", "Wind currents", "Gravitational pull of the moon and sun", "Earth's rotation"],
      "ans": 2,
      "expl": "Tides are caused by the gravitational forces exerted by the Moon and the Sun on the Earth's oceans."
    },
    {
      "q": "Which of the following is a disadvantage of tidal energy?",
      "opts": ["It is unpredictable", "It requires high water velocity", "It can impact marine ecosystems", "It cannot be used in coastal regions"],
      "ans": 2,
      "expl": "Tidal barrages and turbines can alter local water levels and affect fish and other marine life."
    },
    {
      "q": "Which of the following is the primary source of hydrogen?",
      "opts": ["Water", "Coal", "Petroleum", "Uranium"],
      "ans": 0,
      "expl": "While hydrogen can be extracted from fossil fuels, water is its most abundant source through electrolysis."
    },
    {
      "q": "What is the process of extracting hydrogen from water called?",
      "opts": ["Electrolysis", "Distillation", "Combustion", "Carbonization"],
      "ans": 0,
      "expl": "Electrolysis uses electricity to split water ($H_2O$) into hydrogen and oxygen."
    },
    {
      "q": "Which of these is a major advantage of hydrogen energy?",
      "opts": ["High carbon emissions", "High energy density and zero emissions", "Availability of resources", "Low cost of production"],
      "ans": 1,
      "expl": "Hydrogen has a high energy content and produces only water vapor as a byproduct when used."
    },
    {
      "q": "Which of the following is a method of producing hydrogen?",
      "opts": ["Thermal decomposition of methane", "Water electrolysis", "Gasification of coal", "All of the above"],
      "ans": 3,
      "expl": "Hydrogen can be produced via various methods including steam methane reforming, electrolysis, and gasification."
    },
    {
      "q": "Which is the most common fuel cell used for hydrogen-powered vehicles?",
      "opts": ["Alkaline fuel cells (AFC)", "Proton Exchange Membrane (PEM) fuel cells", "Solid Oxide Fuel Cells (SOFC)", "Molten Carbonate Fuel Cells (MCFC)"],
      "ans": 1,
      "expl": "PEM fuel cells are preferred for vehicles due to their high power density and low operating temperature."
    },
    {
      "q": "What is a major challenge in the widespread use of hydrogen energy?",
      "opts": ["High storage and transportation costs", "Low energy efficiency", "Lack of raw materials", "High emissions"],
      "ans": 0,
      "expl": "Hydrogen is difficult to store and transport because it has a very low density."
    },
    {
      "q": "Hydrogen is considered a clean energy source because it produces only which of the following when used in a fuel cell?",
      "opts": ["Carbon dioxide", "Water vapor", "Methane", "Nitrogen oxides"],
      "ans": 1,
      "expl": "The chemical reaction in a hydrogen fuel cell combines hydrogen and oxygen to produce electricity and water."
    },
    {
      "q": "Which of the following is a common component of a hydropower plant?",
      "opts": ["Wind turbine", "Penstock", "Solar panels", "Heat exchanger"],
      "ans": 1,
      "expl": "A penstock is a pipe or channel that carries water from the reservoir to the turbines."
    },
    {
      "q": "What does the penstock in a hydropower plant do?",
      "opts": ["Transports water to the turbine", "Stores water", "Generates electricity", "Filters water"],
      "ans": 0,
      "expl": "The penstock directs the pressurized water onto the turbine blades."
    },
    {
      "q": "The energy of falling water is converted into which type of energy in a hydropower plant?",
      "opts": ["Thermal energy", "Chemical energy", "Mechanical energy", "Electrical energy"],
      "ans": 2,
      "expl": "The kinetic/potential energy of water is first used to spin a turbine, which is mechanical energy."
    },
    {
      "q": "Which of the following best describes the 'head' in a hydropower plant?",
      "opts": ["The width of the river", "The difference in height between the water source and the turbine", "The amount of electricity generated", "The capacity of the dam"],
      "ans": 1,
      "expl": "The 'head' refers to the vertical distance the water falls."
    },
    {
      "q": "In a hydropower plant, what is the role of the turbine?",
      "opts": ["To store water", "To convert mechanical energy into electrical energy", "To regulate water flow", "To generate heat for power production"],
      "ans": 1,
      "expl": "The turbine captures the energy of flowing water and uses it to turn a generator shaft."
    },
    {
      "q": "In which part of the Earth is geothermal energy primarily stored?",
      "opts": ["Crust", "Mantle", "Core", "Atmosphere"],
      "ans": 0,
      "expl": "While the heat originates from the core, accessible geothermal energy is tapped from the Earth's crust."
    },
    {
      "q": "Geothermal energy is considered renewable because:",
      "opts": ["It can be replenished by the Earth's heat", "It does not release harmful emissions", "It is inexhaustible", "All of the above"],
      "ans": 3,
      "expl": "Geothermal energy is a clean, sustainable, and virtually inexhaustible source of heat from within the Earth."
    },
    {
      "q": "What is the main disadvantage of geothermal energy?",
      "opts": ["It is non-renewable", "High initial costs", "Excessive emissions", "Inconsistent energy production"],
      "ans": 1,
      "expl": "The exploration, drilling, and construction of geothermal plants require significant upfront investment."
    },
    {
      "q": "Which of the following is a type of geothermal power plant?",
      "opts": ["Dry steam plant", "Flash steam plant", "Binary cycle power plant", "All of the above"],
      "ans": 3,
      "expl": "There are three main types of geothermal plants: dry steam, flash steam, and binary cycle."
    },
    {
      "q": "What is the key factor for the successful location of geothermal energy plants?",
      "opts": ["Proximity to large water bodies", "High temperature of the Earth's crust", "Earth core heat", "Abundant geothermal energy"],
      "ans": 1,
      "expl": "Plants must be located where high-temperature hydrothermal resources are close to the surface."
    }
  ]
  },

  /* ─── Unit Test 2 Question Bank ─── */
  'ut2': {
  "title": "Unit Test 2 Question Bank",
  "questions": [
    {
      q: "Which of the following countries has the highest biodiversity?",
      opts: ["Brazil", "Russia", "South Africa", "India"],
      ans: 0,
      expl: "Brazil is widely considered to have the highest biodiversity of any country on Earth. [cite: 703, 708]"
    },
    {
      q: "Maximum nutritional diversity is found in the group?",
      opts: ["Monera", "Plantae", "Fungi", "Animalia"],
      ans: 0,
      expl: "The kingdom Monera shows the most extensive metabolic and nutritional diversity among organisms. [cite: 709, 714]"
    },
    {
      q: "The active chemical drug reserpine is obtained from?",
      opts: ["Datura", "Rauwolfia", "Atropa", "Papaver"],
      ans: 1,
      expl: "Reserpine is an alkaloid derived from the roots of Rauwolfia serpentina. [cite: 715, 720]"
    },
    {
      q: "Which of the following group of plants exhibit more species diversity?",
      opts: ["Angiosperms", "Algae", "Bryophytes", "Fungi"],
      ans: 0,
      expl: "Angiosperms (flowering plants) represent the most diverse group of land plants. [cite: 721, 726]"
    },
    {
      q: "What organism is near extinction due to overexploitation?",
      opts: ["Exotic pets", "Rare Cacti", "Siberian Tiger", "All of the above"],
      ans: 3,
      expl: "Overexploitation for trade and hunting threatens various species including tigers, rare plants, and exotic animals. [cite: 727, 732]"
    },
    {
      q: "What percentage of coral reefs have already been destroyed?",
      opts: ["10%", "25%", "60%", "100%"],
      ans: 1,
      expl: "Approximately 25% of the world's coral reefs are estimated to have been destroyed. [cite: 733, 738]"
    },
    {
      q: "The grazing food chain derives energy from",
      opts: ["Plant", "Fish", "Animals", "Sun"],
      ans: 0,
      expl: "In a grazing food chain, the primary energy source for consumers is green plants. [cite: 739, 744]"
    },
    {
      q: "The edge effect reduces the amount of habitat typical to an ecosystem?",
      opts: ["Increases", "Reduces", "Keeps same", "None"],
      ans: 1,
      expl: "Edge effects alter the boundary conditions of a habitat, often reducing the core area suitable for interior species. [cite: 746, 752]"
    },
    {
      q: "The study of ecosystem is called as?",
      opts: ["Environment", "Ecology", "E-study", "Cosmos"],
      ans: 1,
      expl: "Ecology is the scientific study of the interactions between organisms and their environment. [cite: 753, 758]"
    },
    {
      q: "The term ecology was given by",
      opts: ["Earnest Haeckel", "Newton", "S.W. Fleming", "S. D. Lal"],
      ans: 0,
      expl: "The term 'oekologie' was coined by German biologist Ernst Haeckel in 1866. [cite: 759, 760, 764]"
    },
    {
      q: "Photosynthesis is also known as?",
      opts: ["Photo Citosis", "Photo crysis", "Photo Autotrops", "Photo-Geology"],
      ans: 2,
      expl: "Organisms that perform photosynthesis are known as photoautotrophs. [cite: 765, 770]"
    },
    {
      q: "Food web is a network of?",
      opts: ["Food resort", "Food balance", "Food chains", "Food supply"],
      ans: 2,
      expl: "A food web consists of many interconnected food chains within an ecosystem. [cite: 771, 776]"
    },
    {
      q: "Dal Lake is in?",
      opts: ["Srinagar", "Delhi", "Yavatmal", "Nainital"],
      ans: 0,
      expl: "Dal Lake is located in Srinagar, the summer capital of Jammu and Kashmir. [cite: 777, 783]"
    },
    {
      q: "Fishes are example of organisms?",
      opts: ["Neustons", "Nektons", "Benthos", "Periphytons"],
      ans: 1,
      expl: "Nektons are aquatic animals that can swim against currents, such as fish. [cite: 784, 789]"
    },
    {
      q: "Herbivores means?",
      opts: ["Plant eaters", "Meat eaters", "Both", "None"],
      ans: 0,
      expl: "Herbivores are animals that anatomically and physiologically adapted to eating plant material. [cite: 790, 795]"
    },
    {
      q: "Carnivores means?",
      opts: ["Plant eaters", "Meat eaters", "Fish eaters", "None"],
      ans: 1,
      expl: "Carnivores are organisms that derive their energy and nutrient requirements from a diet consisting mainly of animal tissue. [cite: 796, 801]"
    },
    {
      q: "Carnivores are also called as?",
      opts: ["Primary consumers", "Secondary consumers", "Tertiary consumers", "Omnivores"],
      ans: 1,
      expl: "Carnivores that eat herbivores are categorized as secondary consumers. [cite: 802, 807]"
    },
    {
      q: "Pyramid of is always upright?",
      opts: ["Energy", "Biomass", "Forest", "Mass"],
      ans: 0,
      expl: "The pyramid of energy is always upright because energy is lost as heat at each trophic level. [cite: 808, 813]"
    },
    {
      q: "Only species of mammals are known to science?",
      opts: ["2100", "2760", "4650", "1111"],
      ans: 2,
      expl: "Scientific records identify approximately 4650 different species of mammals. [cite: 814, 819]"
    },
    {
      q: "Thar in India is a?",
      opts: ["Desert", "Sea", "River", "Muddy land"],
      ans: 0,
      expl: "The Thar Desert is a large arid region in the northwestern part of the Indian subcontinent. [cite: 820, 825]"
    },
    {
      q: "Chilka lake is in?",
      opts: ["Maharashtra", "Bihar", "Orissa", "U.P"],
      ans: 2,
      expl: "Chilka Lake is a brackish water lagoon located in the state of Odisha (Orissa). [cite: 826, 831]"
    },
    {
      q: "The evolution of new species is called as?",
      opts: ["Ciation", "Mutation", "Mitigation", "Speciation"],
      ans: 3,
      expl: "Speciation is the evolutionary process by which populations evolve to become distinct species. [cite: 832, 837]"
    },
    {
      q: "The diversity within the community is?",
      opts: ["Sigma diversity", "Beta diversity", "Gamma diversity", "Alpha diversity"],
      ans: 3,
      expl: "Alpha diversity refers to the diversity within a particular area or ecosystem. [cite: 838, 843]"
    },
    {
      q: "Diversity between the communities is?",
      opts: ["Sigma diversity", "Beta diversity", "Gamma diversity", "Alpha diversity"],
      ans: 1,
      expl: "Beta diversity is the variation in species composition between different communities or ecosystems. [cite: 844, 849]"
    },
    {
      q: "Exotic species are also called as?",
      opts: ["Extra species", "Modular species", "Alien species", "Modern species"],
      ans: 2,
      expl: "Exotic or alien species are species introduced to a region outside their natural distribution. [cite: 850, 855]"
    },
    {
      q: "In situ conservation is also called as?",
      opts: ["On site", "Ex-situ", "Over site", "Global site"],
      ans: 0,
      expl: "In situ conservation involves protecting species in their natural habitats. [cite: 856, 861]"
    },
    {
      q: "WCMC stands for?",
      opts: ["World Conservation Monitoring Centre", "Wild Conservation Monitoring Centre", "World Control Monitoring Centre", "World Conservation Management Centre"],
      ans: 0,
      expl: "The WCMC is the World Conservation Monitoring Centre of the United Nations Environment Programme. [cite: 862, 866]"
    },
    {
      q: "The earliest National Park in USA is?",
      opts: ["Yellow park", "Yellow wildlife", "Yellowstone", "Yellow centre"],
      ans: 2,
      expl: "Yellowstone National Park, established in 1872, was the first national park in the USA. [cite: 867, 872]"
    },
    {
      q: "Jim Corbett National Park is near?",
      opts: ["Nainital", "Delhi", "Mumbai", "Nagpur"],
      ans: 0,
      expl: "Jim Corbett National Park is located in the Nainital district of Uttarakhand. [cite: 873, 878]"
    },
    {
      q: "Kaziranga National Park is in?",
      opts: ["Maharashtra", "Bihar", "Assam", "Delhi"],
      ans: 2,
      expl: "Kaziranga National Park is a protected area in the state of Assam, India. [cite: 879, 884]"
    },
    {
      q: "At present there are biosphere reserves in India?",
      opts: ["3", "24", "20", "13"],
      ans: 1,
      expl: "According to the provided question bank, there are 24 biosphere reserves in India. [cite: 885, 890]"
    },
    {
      q: "Biosphere reserve consists of zones?",
      opts: ["1", "2", "3", "4"],
      ans: 2,
      expl: "Biosphere reserves are typically organized into three zones: core, buffer, and transition. [cite: 891, 896]"
    },
    {
      q: "The book containing record of threatened species is called?",
      opts: ["Yellow data book", "Red data book", "Orange data book", "Wild data book"],
      ans: 1,
      expl: "The Red Data Book is the state document established for documenting rare and endangered species. [cite: 898, 903]"
    },
    {
      q: "CBD signed by almost nations?",
      opts: ["100", "200", "300", "400"],
      ans: 1,
      expl: "Nearly 200 nations have signed the Convention on Biological Diversity (CBD). [cite: 904, 909]"
    },
    {
      q: "Tundra is an example of ecosystem?",
      opts: ["Terrestrial", "Non terrestrial", "Aquatic", "Physical"],
      ans: 0,
      expl: "The Tundra is a type of terrestrial ecosystem characterized by low temperatures and short growing seasons. [cite: 910, 915]"
    },
    {
      q: "Plants, algae and bacteria are examples of?",
      opts: ["Reducers", "Producers", "Abiotic", "Non-abiotic"],
      ans: 1,
      expl: "Organisms that produce their own food through photosynthesis or chemosynthesis are producers. [cite: 916, 921]"
    },
    {
      q: "Lions and tigers are examples of?",
      opts: ["Non-omnivores", "Omnivores", "Producers", "Non-producers"],
      ans: 0,
      expl: "Lions and tigers are strict carnivores (non-omnivores). [cite: 922, 927]"
    },
    {
      q: "There are levels of biodiversity?",
      opts: ["One", "Two", "Three", "Four"],
      ans: 2,
      expl: "Biodiversity is typically divided into three levels: genetic, species, and ecosystem diversity. [cite: 928, 933]"
    },
    {
      q: "A biosphere reserve consists of core, buffer and zones?",
      opts: ["Pure", "Integral", "Natural", "Transition"],
      ans: 3,
      expl: "The three zones of a biosphere reserve are the core, buffer, and transition zones. [cite: 934, 939]"
    },
    {
      q: "Characteristics of ecosystem are given by?",
      opts: ["Newton", "Smith", "Charles", "Stoke"],
      ans: 1,
      expl: "Ecosystem characteristics were defined by Smith. [cite: 940, 945]"
    },
    {
      q: "The process of removing sludge and settled material from water is called as:",
      opts: ["Dehydration", "Sedimentation", "Filtration", "Disinfectant"],
      ans: 1,
      expl: "Sedimentation is the process of allowing particles in suspension to settle out of the fluid. [cite: 947, 952]"
    },
    {
      q: "Ozone gets ruptured by reaction of NOx with:",
      opts: ["Sunlight", "Water", "Volatile organic compounds", "None"],
      ans: 2,
      expl: "Volatile organic compounds (VOCs) react with nitrogen oxides to disrupt the ozone layer. [cite: 953, 958]"
    },
    {
      q: "Central nervous system gets affected by:",
      opts: ["Oxygen", "Phosphorus", "Lead", "Titanium"],
      ans: 2,
      expl: "Lead is a neurotoxin that specifically affects the central nervous system. [cite: 959, 964]"
    },
    {
      q: "Radioactive waste can also affect soil.",
      opts: ["True", "False"],
      ans: 0,
      expl: "Radioactive contaminants can persist in soil and impact land health. [cite: 965, 968]"
    },
    {
      q: "Lithosphere, Hydrosphere, Biosphere and atmosphere form:",
      opts: ["Environment", "Pollution", "Pollutant", "None"],
      ans: 0,
      expl: "The interaction of these four spheres constitutes the natural environment. [cite: 969, 974]"
    },
    {
      q: "Temporary hearing problem caused due to:",
      opts: ["High noise", "Noise above 140 dB", "Noise pollution", "All the above"],
      ans: 3,
      expl: "Extreme or prolonged noise can lead to temporary or permanent hearing loss. [cite: 975, 980]"
    },
    {
      q: "Soil waste material include:",
      opts: ["Paper waste", "Plastic waste", "Metal waste", "All the above"],
      ans: 3,
      expl: "Solid waste in soil includes various materials like paper, plastic, and metals. [cite: 981, 986]"
    },
    {
      q: "Necrosis means:",
      opts: ["Damaging the ozone layer", "Damaging the leaves", "Premature fall of leaves", "Damaging the leaves"],
      ans: 3,
      expl: "Necrosis in plants refers to the death of cells in leaves or other tissues. [cite: 987, 992]"
    },
    {
      q: "Foul smell is an indication of pollution:",
      opts: ["Soil", "Earth", "Water", "Air"],
      ans: 3,
      expl: "Unpleasant odors are often a primary indicator of air pollution. [cite: 993, 998]"
    },
    {
      q: "In case of automobile pollution use of better quality and use of converters will help to reduce air pollution.",
      opts: ["Fuel, catalyst", "Fuel, isotopes", "Fuel, water", "Fuel, air"],
      ans: 0,
      expl: "Using higher quality fuel and catalytic converters reduces harmful vehicle emissions. [cite: 1000, 1008]"
    },
    {
      q: "The pollutants that can be broken down rapidly by natural processes are called:",
      opts: ["Organic pollutants", "Inorganic pollutants", "Non-degradable pollutants", "Degradable pollutants"],
      ans: 3,
      expl: "Degradable pollutants are those that can be decomposed by natural biological or chemical means. [cite: 1009, 1013]"
    },
    {
      q: "The process of eutrophication in water:",
      opts: ["Increases water level and decreases soil level", "Increases organic level and decreases inorganic level", "Increases oxygen level and decreases CO2 level", "Decreases oxygen level and increases CO2 level"],
      ans: 3,
      expl: "Eutrophication leads to excessive algal growth, which depletes dissolved oxygen when it decomposes. [cite: 1015, 1021]"
    },
    {
      q: "Indirect source of water pollution is:",
      opts: ["Discharged from factories", "Discharge from power plants", "Agricultural fields", "Oil wells"],
      ans: 2,
      expl: "Agricultural runoff is a non-point or indirect source of water pollution. [cite: 1022, 1027]"
    },
    {
      q: "Acid rain formed due to chemical reaction of:",
      opts: ["Water + SOx", "Water + sunlight", "Water + Lead", "Water + Salt"],
      ans: 0,
      expl: "Acid rain is primarily formed when water reacts with sulfur oxides (SOx) and nitrogen oxides. [cite: 1028, 1034]"
    },
    {
      q: "Use of natural fertilizer doesn't create soil pollution:",
      opts: ["False", "True", "Neither true nor false", "None"],
      ans: 1,
      expl: "Natural fertilizers are generally eco-friendly and do not cause the pollution associated with synthetic chemicals. [cite: 1035, 1040]"
    },
    {
      q: "The unpleasant, high intensity sound is called as:",
      opts: ["Music", "Song", "Noise", "All the above"],
      ans: 2,
      expl: "Noise is defined as unwanted or unpleasant sound. [cite: 1041, 1045]"
    },
    {
      q: "Presence/addition of any contaminant in air which causes harm to health of living organisms is called:",
      opts: ["Water pollution", "Acid rain", "Air pollutants", "Air pollution"],
      ans: 3,
      expl: "Air pollution is the contamination of air by harmful substances. [cite: 1046, 1050]"
    },
    {
      q: "Indirect source of water pollution includes:",
      opts: ["Agricultural fields", "Feed lots", "Domestication", "All of these"],
      ans: 3,
      expl: "Runoff from farms, livestock areas, and domestic activities are all indirect sources. [cite: 1051, 1056]"
    },
    {
      q: "Human activities creating primary pollutants are:",
      opts: ["Chemical & atomic processes", "Combustion/heating process", "Farming/mining", "All the above"],
      ans: 3,
      expl: "Various industrial, agricultural, and heating processes release primary pollutants directly into the air. [cite: 1057, 1062]"
    },
    {
      q: "A harmful mixture formed by gases of nitrogen and particulate matter due to photochemical reaction under strong sunlight is called:",
      opts: ["Photosynthesis", "Chlorosis", "Photochemical smog", "Smoke"],
      ans: 2,
      expl: "Photochemical smog is a type of air pollution produced when sunlight reacts with nitrogen oxides and at least one volatile organic compound. [cite: 1063, 1069]"
    },
    {
      q: "Minamata disease is caused by the release of:",
      opts: ["Methyl phosphate", "Methyl nitrate", "Methyl carbonate", "Methyl mercury"],
      ans: 3,
      expl: "Minamata disease is a neurological syndrome caused by severe mercury poisoning, specifically methylmercury. [cite: 1070, 1075]"
    },
    {
      q: "Global warming causes over flooding:",
      opts: ["False", "True", "None", "All the above"],
      ans: 1,
      expl: "Rising temperatures lead to glacier melting and sea-level rise, increasing flood risks. [cite: 1076, 1081]"
    },
    {
      q: "Weedicides is which type of pollutant:",
      opts: ["Agro-pesticides", "Domestic waste", "Gases", "None of these"],
      ans: 0,
      expl: "Weedicides used in farming are a category of agricultural pesticides. [cite: 1082, 1087]"
    },
    {
      q: "The acidic gases like O3, SO2, NO2 affect the strength of",
      opts: ["Building", "Bridges", "Textile", "Iron bars"],
      ans: 3,
      expl: "Acidic pollutants cause corrosion in metals such as iron bars. [cite: 1088, 1093]"
    },
    {
      q: "Radioactive dust causes:",
      opts: ["Physical disorder", "Mental disorder", "Genetic effect", "All the above"],
      ans: 3,
      expl: "Radioactive exposure can lead to a wide range of severe health and genetic issues. [cite: 1094, 1099]"
    },
    {
      q: "To remove hardness of water methods are used:",
      opts: ["Boiling water", "Adding lime", "Both (i) and (ii)", "None of these"],
      ans: 2,
      expl: "Both boiling and the addition of lime are methods used to soften water. [cite: 1100, 1106]"
    },
    {
      q: "Excess amount of fluorides causes:",
      opts: ["Mental problem", "Typhoid", "Dental problem", "Both (ii) and (iii)"],
      ans: 2,
      expl: "High fluoride intake primarily leads to dental fluorosis and skeletal issues. [cite: 1107, 1112]"
    },
    {
      q: "Pollen and spores are natural pollutant:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "Bioaerosols like pollen and spores are naturally occurring air pollutants that can cause allergies. [cite: 1113, 1118]"
    },
    {
      q: "The metals such as lead, nickel, tin are present in the form of solid particles produced by:",
      opts: ["Metallurgical process", "Metabolism process", "Salinization process", "Degradation process"],
      ans: 0,
      expl: "Industrial metallurgical processes release particulate heavy metals into the environment. [cite: 1119, 1124]"
    },
    {
      q: "To reduce air pollution due to industrial activities, what step should be taken?",
      opts: ["Use electrostatic precipitators", "Use gravitational settling chamber", "Construction of tall chimneys", "All the above"],
      ans: 3,
      expl: "Implementing filtration systems, settling chambers, and tall chimneys helps disperse or remove pollutants. [cite: 1125, 1130]"
    },
    {
      q: "The consumption of oxygen from water by algae leads to decomposition of plants and produces toxins such as:",
      opts: ["Cadmium", "Strychnine", "Chlorosis", "Chloro-Fluoro-Carbon"],
      ans: 0,
      expl: "According to the provided text, the decomposition process can involve cadmium toxins. [cite: 1131, 1136]"
    },
    {
      q: "Natural mechanism to control air pollution includes:",
      opts: ["Centrifugal separators", "Absorption", "Wet scrubbers bag filter", "Gravitational settling chambers"],
      ans: 1,
      expl: "Nature controls pollution through processes like absorption by water and vegetation. [cite: 1137, 1142]"
    },
    {
      q: "Nature has its own mechanism to remove pollutants. This mechanism is called:",
      opts: ["Photosynthesis", "Scavenging", "Dispersion", "Chlorosis"],
      ans: 1,
      expl: "Scavenging is a natural process where the atmosphere cleanses itself of pollutants. [cite: 1143, 1148]"
    },
    {
      q: "The main toxic solid substances released in water from industry are:",
      opts: ["Mercury and carbon", "Lead and mercury", "Phosphate and nitrate", "Oxygen and hydrogen"],
      ans: 1,
      expl: "Heavy metals like lead and mercury are primary industrial toxic pollutants in water. [cite: 1149, 1154]"
    },
    {
      q: "Primary pollutants means those pollutants:",
      opts: ["Released by chemical reaction", "Released by process of hydration", "Released by process of photosynthesis", "Released directly into air"],
      ans: 3,
      expl: "Primary pollutants are substances emitted directly from a source into the atmosphere. [cite: 1155, 1160]"
    },
    {
      q: "Agricultural discharge alters of water:",
      opts: ["pH", "Oxygen", "Both (i) and (ii)", "None of these"],
      ans: 2,
      expl: "Runoff from agriculture changes both the pH and dissolved oxygen levels in water bodies. [cite: 1161, 1167]"
    },
    {
      q: "Due to fast transport linkage the 'sound' has been converted into:",
      opts: ["Noise", "Song", "Music", "Both (i) and (ii)"],
      ans: 0,
      expl: "Increased transportation has led to a rise in unwanted sound levels, categorized as noise. [cite: 1168, 1173]"
    },
    {
      q: "Damage to tympanic membrane caused due to:",
      opts: ["Noise pollution", "Soil pollution", "Air pollution", "None"],
      ans: 0,
      expl: "High-intensity noise pollution can physically damage the eardrum (tympanic membrane). [cite: 1174, 1179]"
    },
    {
      q: "Primary pollutants created by nature and not emphasized by human are:",
      opts: ["Bacteria and fire", "Pollen and breaking seas", "Volcanoes and blowing dust", "Bacteria and viruses"],
      ans: 1,
      expl: "Pollen and sea spray are natural primary pollutants often overlooked compared to industrial sources. [cite: 1180, 1185]"
    },
    {
      q: "The from combustion of fossil fuel affects the nerves, brain, and kidney:",
      opts: ["Lead", "Uranium", "Tungsten", "Mercury"],
      ans: 3,
      expl: "Mercury released from coal burning is highly toxic to the nervous system and organs. [cite: 1186, 1192]"
    },
    {
      q: "helps the growth of algae in water:",
      opts: ["Hydrogen", "Mercury", "Phosphates", "Calcium"],
      ans: 2,
      expl: "Phosphates act as nutrients that promote rapid algal growth, leading to eutrophication. [cite: 1193, 1198]"
    },
    {
      q: "Man-made mechanism to control air pollution includes:",
      opts: ["Dispersion", "Settling", "Centrifugal separators", "Absorption"],
      ans: 2,
      expl: "Centrifugal separators are industrial mechanical devices used to remove particles from air. [cite: 1199, 1204]"
    },
    {
      q: "The dissolved material in water not be less than 150 p.p.m is desirable:",
      opts: ["True", "False", "Neither true nor false", "None of these"],
      ans: 1,
      expl: "This statement is false as water quality standards vary, but 150 ppm is not a universal minimum 'desirable' limit. [cite: 1205, 1210]"
    },
    {
      q: "Minamata disease is caused by:",
      opts: ["Lead poisoning", "Mercury poisoning", "Phosphate poisoning", "Nitrate poisoning"],
      ans: 1,
      expl: "The disease originated in Minamata, Japan, due to industrial discharge of methylmercury. [cite: 1212, 1217]"
    },
    {
      q: "The high biological oxygen demand (BOD) makes water useless for other domestic uses:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "High BOD indicates high organic pollution, making water unsafe for domestic use. [cite: 1218, 1223]"
    },
    {
      q: "The paints get decolourised by:",
      opts: ["SO2 and HCl", "SO2 and H2S", "SO2 and O3", "SO2 and HO2"],
      ans: 1,
      expl: "Sulfur dioxide and Hydrogen sulfide gases react with paint pigments, causing discoloration. [cite: 1224, 1229]"
    },
    {
      q: "Salinization means:",
      opts: ["Increase of salt in soil", "Increase of Na+, K+, Ca2+, Mg2+ and Cl", "All above (i) and (ii)", "None of these"],
      ans: 2,
      expl: "Salinization involves the accumulation of various water-soluble salts in the soil. [cite: 1230, 1235]"
    },
    {
      q: "In Bhopal Gas Tragedy which toxic gas got released:",
      opts: ["Methane gas", "Butane gas", "Methyl isocyanate gas", "Propane gas"],
      ans: 2,
      expl: "The 1984 tragedy was caused by the leak of methyl isocyanate (MIC) gas. [cite: 1236, 1241]"
    },
    {
      q: "D.D.T, Aldrin, benzene are used as:",
      opts: ["Insecticides", "Fertilizers", "Weedicides", "Pesticides"],
      ans: 0,
      expl: "These chemicals are primarily used to kill insects in agricultural and domestic settings. [cite: 1242, 1247]"
    },
    {
      q: "Noise pollution can have physiological and psychological effects:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "Noise affects both bodily functions and mental well-being. [cite: 1248, 1253]"
    },
    {
      q: "SO2 causes approximately 16% of air pollution:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "Sulfur dioxide is a major pollutant contributing significantly to overall air pollution. [cite: 1254, 1259]"
    },
    {
      q: "Fuel combustion creates of air pollution.",
      opts: ["Approx 27%", "Approx 20%", "Approx 28%", "Approx 23%"],
      ans: 0,
      expl: "The combustion of fuels for various purposes accounts for about 27% of air pollution. [cite: 1260, 1266]"
    },
    {
      q: "By treating heavy metals and toxic material from industries we can measure/control soil pollution:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "Proper industrial waste treatment is essential to prevent soil contamination. [cite: 1267, 1272]"
    },
    {
      q: "Landslides and earthquakes are natural sources of noise pollution:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "Significant natural events produce high-intensity sounds that constitute natural noise pollution. [cite: 1273, 1278]"
    },
    {
      q: "Which of them are pollutants?",
      opts: ["Spores", "Soot", "Pollen grains", "All the above"],
      ans: 3,
      expl: "Particulates like soot and biological agents like spores/pollen can act as pollutants. [cite: 1280, 1285]"
    },
    {
      q: "Nitrogen oxide sources of air pollution include:",
      opts: ["NO", "NO2", "HNO3", "All the above"],
      ans: 3,
      expl: "Nitrogen oxides exist in various forms including nitric oxide and nitrogen dioxide. [cite: 1286, 1291]"
    },
    {
      q: "Industrial, transport, and cultural activities are main source of:",
      opts: ["Noise pollution", "Generation of sound", "Both (i) and (ii)", "None"],
      ans: 0,
      expl: "Human societal activities are the primary drivers of environmental noise pollution. [cite: 1292, 1297]"
    },
    {
      q: "The process to remove suspended material from water is called:",
      opts: ["Sedimentation", "Dehydration", "Filtration", "Disinfectant"],
      ans: 0,
      expl: "Sedimentation uses gravity to remove suspended solids from water. [cite: 1298, 1303]"
    },
    {
      q: "If fluorides are absorbed by crops and consumed by humans, it causes:",
      opts: ["Chlorosis", "Neurosis", "Fluorosis", "Photosynthesis"],
      ans: 2,
      expl: "Fluorosis is the chronic condition resulting from excessive fluoride ingestion. [cite: 1304, 1309]"
    },
    {
      q: "Air pollution was traced back to the period of:",
      opts: ["Hippocrates", "Homo sapiens", "Homo sapiens sapiens", "None"],
      ans: 0,
      expl: "Historical records show that figures as early as Hippocrates recognized air quality issues. [cite: 1310, 1315]"
    },
    {
      q: "Softening of water is done by:",
      opts: ["Boiling and adding lime", "Cooling and heating", "Adding chloride and fluoride", "None"],
      ans: 0,
      expl: "Chemical treatment with lime and physical boiling help remove hardness-causing minerals. [cite: 1316, 1321]"
    },
    {
      q: "Presence of impurities in water making it unfit for consumption is called:",
      opts: ["pH of water", "Pollutant in soil", "Water pollution", "None"],
      ans: 2,
      expl: "Water pollution refers to the contamination of water bodies, typically as a result of human activities. [cite: 1322, 1327]"
    },
    {
      q: "Environmental pollution includes:",
      opts: ["Air pollution", "Noise pollution", "Nuclear pollution", "All the above"],
      ans: 3,
      expl: "Pollution manifests in many forms across air, water, land, and energy fields. [cite: 1328, 1333]"
    },
    {
      q: "Abscission caused by NO2:",
      opts: ["True", "False", "Neither true nor false", "None"],
      ans: 0,
      expl: "Exposure to nitrogen dioxide can lead to the premature shedding of plant parts (abscission). [cite: 1334, 1339]"
    },
    {
      q: "Noise pollution causes:",
      opts: ["Physical effect", "Physiological effect", "Psychological effect", "All the above"],
      ans: 3,
      expl: "Noise impacts human health physically (hearing), physiologically (blood pressure), and mentally. [cite: 1340, 1345]"
    },
    {
      q: " 'The Clean Air Act of 1970' - which is the secondary pollutant?",
      opts: ["Smog", "Ozone", "Smoke", "Fog"],
      ans: 1,
      expl: "Ozone is a secondary pollutant formed by reactions between primary pollutants in the presence of sunlight. [cite: 1346, 1351]"
    },
    {
      q: "Water stored using rain water harvesting is useful for",
      opts: ["All purposes", "Drinking only", "Agriculture only", "None of the above"],
      ans: 0,
      expl: "Harvested rainwater can be treated and used for domestic, agricultural, and industrial needs. [cite: 1353, 1358]"
    },
    {
      q: "Use of renewable energy sources can replace",
      opts: ["Fossil fuels", "Solar power", "Hydropower", "None of the above"],
      ans: 0,
      expl: "Renewables offer a sustainable alternative to finite and polluting fossil fuels. [cite: 1359, 1364]"
    },
    {
      q: "The development of current condition, but not capable of helping further is named by one of following term",
      opts: ["Overall development", "Un-sustainable development", "Human development", "None of the above"],
      ans: 1,
      expl: "Unsustainable development consumes resources faster than they can be replenished, compromising the future. [cite: 1365, 1370]"
    },
    {
      q: "Shortage of water faced can be solved by",
      opts: ["Water storage", "Well digging", "Rain water harvesting", "None of the above"],
      ans: 2,
      expl: "Rainwater harvesting is a key strategy for enhancing water security. [cite: 1371, 1376]"
    },
    {
      q: "Article 48-A is about",
      opts: ["Protection and improvement of environment and safeguarding of forests and wildlife", "Water pollution", "Use of solar energy", "None of the above"],
      ans: 0,
      expl: "Article 48-A of the Indian Constitution mandates the state to protect and improve the environment. [cite: 1377, 1382]"
    },
    {
      q: "Rain water harvesting is done by",
      opts: ["Local catchments, capturing rain water and watershed management", "Local catchment only", "Capturing runoff water only", "None of the above"],
      ans: 0,
      expl: "Integrated water management involves collecting rain where it falls and managing the broader watershed. [cite: 1383, 1388]"
    },
    {
      q: "If the rate of destruction of natural resources is higher than its replenishment, the outcome is described by one of following term",
      opts: ["Tolerable condition", "Unsustainable situation", "Pleasant condition", "None of the above"],
      ans: 1,
      expl: "Resource depletion beyond regeneration rates creates an unsustainable environmental situation. [cite: 1389, 1395]"
    },
    {
      q: "Runoff water from surface is conserved by method",
      opts: ["Rain water conservation", "Rain water harvesting", "Water storage and conservation", "None of the above"],
      ans: 1,
      expl: "Harvesting techniques capture surface runoff to recharge groundwater or for direct use. [cite: 1396, 1401]"
    },
    {
      q: "The prime objective of watershed management is focus on water",
      opts: ["Utilisation", "Conservation", "Analysis", "None of the above"],
      ans: 1,
      expl: "Watershed management focuses on the conservation and sustainable use of water resources within a basin. [cite: 1403, 1408]"
    },
    {
      q: "Environmental, economical and social developments are constituents of a good",
      opts: ["Sustainable development", "Un-sustainable development", "Human development", "None of the above"],
      ans: 0,
      expl: "The three pillars of sustainability are environment, economy, and society. [cite: 1409, 1414]"
    },
    {
      q: "The main advantage of watershed approach is",
      opts: ["High cost", "Time consuming method", "Environment friendly", "None of the above"],
      ans: 2,
      expl: "Watershed management is a holistic, ecologically sound way to manage land and water. [cite: 1415, 1420]"
    },
    {
      q: "The open water reservoirs face of water",
      opts: ["Evaporation", "Reduction", "Waste waters", "None of the above"],
      ans: 0,
      expl: "Significant water loss in open reservoirs occurs through solar-driven evaporation. [cite: 1421, 1426]"
    },
    {
      q: "CPCB stands for",
      opts: ["Control of Pollution by Central Bureau", "Central Pollution Control Board", "Control and Prevention by Central Board", "None of the above"],
      ans: 1,
      expl: "The Central Pollution Control Board is India's statutory organization for pollution monitoring. [cite: 1427, 1432]"
    },
    {
      q: "Which of the following grants permission to establish an industrial unit in Air pollution",
      opts: ["SPCB", "CPCB", "APCB", "None of the above"],
      ans: 0,
      expl: "State Pollution Control Boards (SPCB) grant 'consent to establish' for industrial units. [cite: 1434, 1439]"
    },
    {
      q: "Which of following statement is correct",
      opts: ["Environmental law provides framework for regulating use of environment and its management in India", "Environmental law provides guidelines to save environment", "Environmental law plays a crucial role in regulating the ecosystems", "None of the above"],
      ans: 0,
      expl: "Laws provide the legal structure necessary for environmental governance and regulation. [cite: 1440, 1446]"
    },
    {
      q: "Chairman on SPCB is nominated by",
      opts: ["Central Government", "Prime minister", "State Government", "None of the above"],
      ans: 2,
      expl: "State governments are responsible for appointing the leadership of their respective SPCBs. [cite: 1447, 1452]"
    },
    {
      q: "In sustainable development, the rate at which natural resources destroyed to its replenishment should be",
      opts: ["Same", "Higher", "Lower", "None of the above"],
      ans: 0,
      expl: "Sustainability implies an equilibrium where resource use matches regeneration. [cite: 1453, 1458]"
    },
    {
      q: "Air (prevention and control of pollution) Act has following objectives(s)",
      opts: ["Prevention, control and abatement of air pollution", "Maintenance of air quality", "Establishment of Boards for prevention and control of air pollution", "None of the above"],
      ans: 0,
      expl: "The primary focus of the Air Act is the direct mitigation and prevention of air pollutants. [cite: 1459, 1464]"
    },
    {
      q: "The Environmental (Protection) Act in India came in existence in",
      opts: ["1976", "1996", "1986", "None of the above"],
      ans: 2,
      expl: "The EPA was enacted in 1986 in the wake of the Bhopal gas tragedy. [cite: 1465, 1470]"
    },
    {
      q: "Wildlife (protection) Rules came in force in year",
      opts: ["1972", "1973", "1976", "None of the above"],
      ans: 0,
      expl: "The Wildlife Protection Act, providing the legal framework for animal protection, was established in 1972. [cite: 1471, 1476]"
    },
    {
      q: "SPCB collaborates with CPCB for",
      opts: ["For organizing educational programmes for public awareness", "To get funds for expenses", "To get guidelines for programmes", "None of the above"],
      ans: 2,
      expl: "SPCBs work within the national guidelines established by the central board (CPCB). [cite: 1477, 1482]"
    },
    {
      q: "Environmental (Protection) Rules were amended in 1994 for EIA which stands for",
      opts: ["Environmental Impact Assessment of various development projects", "Economical Investment Assessment of various development projects", "Evaluation of Importance and Assessment of various development projects", "None of the above"],
      ans: 0,
      expl: "EIA is a tool used to identify the environmental, social, and economic impacts of a project prior to decision-making. [cite: 1483, 1488]"
    },
    {
      q: "SPCB stands for",
      opts: ["State Pollution Control Board", "Service Protection Control Bureau", "Security Protection Control Board", "None of the above"],
      ans: 0,
      expl: "SPCB is the State-level body for pollution control in India. [cite: 1489, 1494]"
    },
    {
      q: "Environmental Laboratories are established by",
      opts: ["State government", "Municipal corporation", "Central government", "None of the above"],
      ans: 2,
      expl: "The Central Government has the authority to establish or recognize laboratories for environmental analysis. [cite: 1495, 1500]"
    },
    {
      q: "Environmental (Protection) Rules 1986 empower central Government",
      opts: ["To prevent, control and abate environment pollution", "To follow up the formation of Act", "To prevent industrial activities causing environmental pollution", "None of the above"],
      ans: 0,
      expl: "The Act gives the center broad powers to take necessary measures for environmental protection. [cite: 1501, 1506]"
    },
    {
      q: "Which of the following are objective(s) of Environmental (protection) Act 1986",
      opts: ["Prevention of hazards to all living creatures and property", "Protection and improvement of environment", "Maintenance of harmonious relationship between human and their environment", "all (i), (ii), (iii)"],
      ans: 3,
      expl: "The EPA aims for a holistic protection of the environment and all its inhabitants. [cite: 1507, 1515]"
    },
    {
      q: "The chairman of CPCB is nominated by",
      opts: ["Central government", "State government", "Prime minister", "None of the above"],
      ans: 0,
      expl: "The central government appoints the head of the national pollution board. [cite: 1516, 1521]"
    },
    {
      q: "Environmental (protection) Act 1986 extends to",
      opts: ["Entire world", "Asia-pacific", "India", "None of the above"],
      ans: 2,
      expl: "This is a national legislation applicable across the territory of India. [cite: 1522, 1527]"
    },
    {
      q: "Chair person of wildlife advisory Board is",
      opts: ["Governor of state", "President of India", "Prime minister of India", "None of the above"],
      ans: 0,
      expl: "At the state level, the Governor typically chairs the advisory board for wildlife. [cite: 1528, 1533]"
    },
    {
      q: "Environment protection act was enacted in",
      opts: ["1995", "1936", "1947", "1986"],
      ans: 3,
      expl: "The Act was passed in 1986 and came into force shortly after. [cite: 1534, 1539]"
    },
    {
      q: "Environment protection act is about",
      opts: ["Discharge of pollutants into air, land and water", "Noise pollution", "Photosynthesis", "None of the above"],
      ans: 0,
      expl: "The Act focuses on regulating the release of contaminants into all environmental media. [cite: 1540, 1545]"
    },
    {
      q: "Indian forest Act was established in",
      opts: ["1927", "1951", "1947", "All of the above"],
      ans: 0,
      expl: "The landmark Indian Forest Act was enacted in 1927 during the colonial period. [cite: 1546, 1551]"
    },
    {
      q: "N.G.O. is the full form of",
      opts: ["Non-Government organization", "National Government organization", "National Growth organization", "All of the above"],
      ans: 0,
      expl: "NGOs are non-profit groups that operate independently of government. [cite: 1552, 1557]"
    },
    {
      q: "Importance of EIA is that it avoids the adverse effects on environmental",
      opts: ["Before launching a project", "After launching a project", "Before and after launching a project", "None of the above"],
      ans: 0,
      expl: "The primary purpose of EIA is preventive—to identify risks before a project begins. [cite: 1558, 1563]"
    },
    {
      q: "Environmental morality considers moral relationship between",
      opts: ["Human and non-human elements", "Animals and birds", "Birds and human beings", "All of the above"],
      ans: 3,
      expl: "Environmental ethics explores the moral obligations humans have toward the natural world. [cite: 1564, 1569]"
    },
    {
      q: "Purpose of interlinking rivers is",
      opts: ["Flood control", "Limiting droughts", "Boosting farm outputs", "All the above"],
      ans: 3,
      expl: "Interlinking aims to transfer water from surplus basins to deficit basins to manage floods and droughts. [cite: 1570, 1575]"
    },
    {
      q: "Information technology can impact",
      opts: ["Medical awareness", "Environmental awareness", "None of the above", "Theft awareness"],
      ans: 1,
      expl: "IT facilitates the rapid spread of environmental data and awareness campaigns. [cite: 1576, 1581]"
    },
    {
      q: "Information technology help in",
      opts: ["Traffic jams", "Fire accidents", "Floods", "All of the above"],
      ans: 3,
      expl: "IT systems are critical for disaster monitoring, emergency response, and urban management. [cite: 1582, 1587]"
    },
    {
      q: "I.T. can give information about",
      opts: ["died", "medical expenses", "health care units", "all of the above"],
      ans: 3,
      expl: "Information systems manage health records and infrastructure data efficiently. [cite: 1588, 1593]"
    },
    {
      q: "Air Act came in force in",
      opts: ["1972", "1986", "1981", "None"],
      ans: 2,
      expl: "The Air (Prevention and Control of Pollution) Act was enacted in 1981. [cite: 1594, 1599]"
    },
    {
      q: "Rainwater harvesting improve",
      opts: ["the levels of groundwater", "the levels of surface water", "water pollution", "All of the above"],
      ans: 0,
      expl: "Recharging rainwater back into the earth is a direct way to raise groundwater tables. [cite: 1600, 1605]"
    },
    {
      q: "Groundwater is found",
      opts: ["below the earth surface", "above the earth surface", "on the earth surface", "none"],
      ans: 0,
      expl: "Groundwater is the water present beneath Earth's surface in soil pore spaces and rock fractures. [cite: 1606, 1611]"
    },
    {
      q: "Ground water recharge is also called",
      opts: ["deep drainage", "deep percolation", "both", "none"],
      ans: 2,
      expl: "Recharge involves the downward movement of water from the surface into the aquifer. [cite: 1612, 1617]"
    },
    {
      q: "Green belt means",
      opts: ["reserved land area on open space", "reserved land area in closed space", "both", "none"],
      ans: 0,
      expl: "Green belts are open areas around urban centers reserved for vegetation to prevent sprawl. [cite: 1618, 1622]"
    },
    {
      q: "Green belt zone",
      opts: ["improves aesthetics", "improves mental health", "conserves biodiversity", "all"],
      ans: 3,
      expl: "Urban greenery provides ecological, social, and psychological benefits. [cite: 1623, 1628]"
    },
    {
      q: "Renewable energy sources include",
      opts: ["sun", "wind", "earth", "none"],
      ans: 0,
      expl: "The sun is the primary source of solar energy, a key renewable resource. [cite: 1629, 1634]"
    },
    {
      q: "Parameters governing watershed effectiveness are",
      opts: ["Climate", "Land", "Length of ridges", "None"],
      ans: 0,
      expl: "Climatic conditions like rainfall intensity directly impact how a watershed functions. [cite: 1635, 1640]"
    },
    {
      q: "Interlinking of river is a large scale",
      opts: ["civil engineering project", "mechanical engineering project", "electrical engineering project", "None"],
      ans: 0,
      expl: "Building canals and reservoirs for river interlinking is a massive civil engineering undertaking. [cite: 1641, 1646]"
    }
  ]
  }
};