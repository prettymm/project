class Filterthinking extends MLP.apps.MLPModule {

  defaults() {
    this.defaults = {
      property: 'foo'
    };
  }

  init() {
    this.el = {
      jsElems: $('.js-elems'),
      filterAll:$('.filter-link.all'),
      filter:$('.filter-link.filter'),
      filterLink:$('.filter-link'),
      taggedElem:$('.tagged-elem')
    };
    this.sel = {
      selected: 'selected'
    };
    super.init();
    this.datas();
    this.events();
    this.topics = null;
    this.types = null;
  }

  datas() {
    this.setItems();
  }

  events() {
    this.initTagFilter();
  }

  setItems() {
    var Obj = {
      "datas":[
        {
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Let the Molecule Decide",
          "text":"Each new drug is unique and deserves a fresh approach to formulation. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"['eBook']",
          "title":"Strategies for Clinical Supply Management and Forecasting",
          "text":"Utilizing forecasting throughout the clinical study to plan clinical supply budgets and timelines. "
        },{
          "dataTopic":"['Delivery']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Gelatin Capsules Shapes and Sizes",
          "text":"Discover the variety of shapes and sizes available for Gelatin Capsules. "
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Vegicaps® Capsules Shapes and Sizes",
          "text":"Discover the variety of shapes and sizes available for Vegicaps® Capsules. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Case Study']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Case Study",
          "title":"Innovative Solution to Meet Primary Packaging Requirements",
          "text":"Innovative packaging solution meeting the needs both patients and the clinical sites "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"['eBook']",
          "title":"Aseptic Processing Trends",
          "text":"Modern aseptic performance demands new flexibility in both mindset and technology"
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"Smart Drug Development &amp; Design from Candidate to Phase I",
          "text":"Key considerations for transitioning a molecule from discovery to phase 1 readiness"
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Consumer Global OTC Product Library",
          "text":"A proven track record of delivering more differentiated products, faster."
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Brochure']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Brochure",
          "title":"Skin Rescue CosmoPod™ Twist-Off Capsules",
          "text":"Introducing Catalent’s Skin Rescue CosmoPod™ Twist-Off Capsules"
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Optiform® Solution Suite",
          "text":"Quick facts about OptiForm® Solution Suite"
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Customized Manufacturing",
          "text":"Customize and unique manufacturing solutions to manufacture your drug."
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Data-Driven Approach to Overcome Bioavailability Challenges",
          "text":"Unbiased &amp; data-driven approach to select bioavailability enhancement technology."
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Brochure']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Brochure",
          "title":"Clinical Supply Services Offerings and Capabilities",
          "text":"Improve efficiency and reduce your trial timelines."
        },{
          "dataTopic":"[]",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Optimizing clinical outcomes for challenging molecules",
          "text":"How lipid-based drug delivery systems (LBDDS) can be used as a bioavailability enhancing technology."
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Case Study']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Case Study",
          "title":"Vitamin C and Retinol CosmoPod Twist-Off Capsules",
          "text":"Scientifically designed skin care formulation to deliver Ratinol and Vitamin C for skin care. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Making Clinical Studies More Patient Centric",
          "text":"New strategies and innovations for the evolving patient-centric clinical trials "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Questions You Need to Ask About Clinical Supply",
          "text":"Questions to ask your CRO better understand your clinical supply needs."
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Accelerating Biologics and Biosimilar Development",
          "text":"Synergistic clonal and process screen to identify master cell bank candidates "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Business &amp; Cultural Norms for APAC Clinical Supply",
          "text":"Cultural and business norms for conducting successful clinical study in APAC region."
        },{
          "dataTopic":"[]",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Solid Dose Trends",
          "text":"How the industry’s most stable drug form is innovating and evolving to stay relevant. "
        },{
          "dataTopic":"[]",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Formulating Candidates with Bioavailability Issues",
          "text":"How formulation screening early in the process can reduce development timelines. "
        },{
          "dataTopic":"[]",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Optimizing speed to market with flexible manufacturing",
          "text":"Get the seven steps to implement a new manufacturing technology. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Around the World in Clinical Trials",
          "text":"Identify transit strategies in emerging regions to ensure movement of clinical supplies. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Improve Patient Experience and Therapeutic Outcomes",
          "text":" Advanced formulation and drug delivery technologies for patient-centric drug design. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Developing Oral Dosage Forms",
          "text":"Agnostic &amp; data-driven approach for early stages to find optimal formulation technology "
        },{
          "dataTopic":"['Delivery']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"The Challenges in Developing Therapeutic Cannabis",
          "text":"Development of Cannabis- based drugs can offer a consistent, reliable dose with minimal side effects.  "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Brochure']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Brochure",
          "title":"Customized Manufacturing Solutions",
          "text":"Customized Manufacturing Solutions to meet your complex manufacturing needs "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Accelerate your early drug development Journey",
          "text":"Learn how to move from the bench to the clinic quickly using advanced technologies"
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Orally Disintegrating Tablets- A Patient-Centric Dosage Form",
          "text":"Discover how orally disintegrating tablets (ODTs) can be both patient friendly and offer numerous formulation advantages.  "
        },{
          "dataTopic":"[]",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Expedite Early Drug Development",
          "text":"How pre-formulation techniques can accelerate early phase development to animal PK and first-in-human studies. "
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Evolution of Flexible Commerical Biologics Manufacturing",
          "text":"As the Biopharma market evolves, the demand increases for bioprocess technologies. "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Importance of Defining &amp; Characterizing Solid State Forms",
          "text":"The effect of salt form selection and polymorphic screening on formulation development."
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Omega-3 Fatty Acids: Trends, Challenges &amp; Innovation",
          "text":"Brand strategies to leverage innovative consumer preferred dose forms for Omega-3 market. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Primary Packaging",
          "text":"Best packaging strategies to achieve longer stability and adherence.  "
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Complex Protein Production",
          "text":"Innovative products and techniques to develop, scale-up, analyze and process complex biologics."
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Preclinical &amp; First-in-Human Development Strategies",
          "text":" Crucial factors to transform a pre-clinical compound into a first-in-human candidate. "
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Accelerated Development Through Analytical Partnerships",
          "text":"Learn about the new strategy model for outsourcing. "
        },{
          "dataTopic":"['Delivery', 'Oral Technologies']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Pediatric Drug Delivery Challenges and Solutions",
          "text":"Key development challenges and promising technologies for delivering pediatric formulations.  "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Early-Phase Pharmaceutical Development Strategies",
          "text":"Insight on early development, characterizing solid state forms and first-in-human strategies. "
        },{
          "dataTopic":"['Delivery', 'Oral Technologies']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Oral Delivery of Macromolecule Drugs for Localized Treatment",
          "text":"Latest formulation approaches on enabling oral route for macromolecule drugs for local treatment. "
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"Accelerated Biopharmaceutical Development ",
          "text":"Effective outsourcing strategies and demonstrating how these can be effective through a case study. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Clinical Trials: New Regulations &amp; Regional Challenges",
          "text":"Explore best practices for clinical trial materials logistics for different global region &amp; more. "
        },{
          "dataTopic":"['Sterile Technologies']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"Beyond Fill/Finish: A successful commercial supply",
          "text":"How novel innovations and integrated fill/finish services can bring your product faster to market."
        },{
          "dataTopic":"['Supply']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Strategic Approach for Manufacturing Solid Dosage Forms",
          "text":"Unique roller compaction platform designed to achieve clinical and commercial success. "
        },{
          "dataTopic":"['Supply']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Flexible Manufacturing Gets Pharma Products to Market Faster",
          "text":"Designing state-of-the-art facilities and suites address customers’ current and future needs. "
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Vegetarian Softgels: Clean Labels, Stable Manufacturing",
          "text":"Revolutionize the way vegetarian products are encapsulated. "
        },{
          "dataTopic":"['Delivery']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":">Considering Patient’s Voice in Drug Design",
          "text":"Strategies on incorporating patient opinion into early drug design and boost patient adherence. "
        },{
          "dataTopic":"['Supply']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Advances in Manufacturing Technology",
          "text":"Technology management approach &amp; process capabilities for reliable supply of drug products. "
        },{
          "dataTopic":"['Supply']",
          "dataType":"['eBook']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"eBook",
          "title":"Trends in Manufacturing of Specialty Products",
          "text":"A guide on creating flexible and custom manufacturing solutions for speciality products.  "
        },{
          "dataTopic":"['Development Solutions', 'Oral Technologies']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Improve Your Phase I Success Rate",
          "text":"A parallel formulation feasibility assessment approach to enhance bioavailability.  "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"ODT: A patient-centric dosage form",
          "text":"Discover new developments in ODT technology including delivery of peptides and vaccines. "
        },{
          "dataTopic":"['Supply']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Best of Pharma Manufacturing 2016",
          "text":"Explore the most-read articles from 2016, chosen by the Pharmaceutical Manufacturing audience. "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Preclinical &amp; First-in-Man Drug Development Strategies",
          "text":"Methods for developing a sound, phase-appropriate formulation for early development."
        },{
          "dataTopic":"['Supply']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Facilities and Operational Investment",
          "text":"A systematic approach to tech transfers and how to focus on technical expertise &amp; flexibility. "
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Biopharma Manufacturing Trends",
          "text":"Explore the latest biopharma facility investment trends. "
        },{
          "dataTopic":"['Delivery', 'Oral Technologies']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"Lipid Workshop Part 1: Early Development with Lipids",
          "text":"Softgel technology for early development to achieve successful formulation and patient outcomes.  "
        },{
          "dataTopic":"['Delivery', 'Oral Technologies']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"Lipid Workshop Part 2: Expanding Lipid Formulation Platform",
          "text":"Latest softgel technology for targeted and controlled delivery of challenging molecules. "
        },{
          "dataTopic":"['Brochure']",
          "dataType":"['Brochure']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Brochure",
          "title":"Brochure: Development Solutions",
          "text":"A toolkit of superior technologies to overcome all your molecule’s challenges and processing difficulties to get the optimal dosage form. "
        },{
          "dataTopic":"['Biologics']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Novel Analytical Techniques For Monoclonal Antibodies",
          "text":"Achieve a faster assessment of monoclonal antibody functionality—well before the final molecule is selected. "
        },{
          "dataTopic":"['Delivery']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"A Dosage Form Designed for Difficult Patient Populations",
          "text":"Explore how orally disintegrating tablets (ODTs) provide an alternative to overcome several challenges."
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Case Study']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Case Study",
          "title":"Improved Bioavailability of Trio Medicines TML-2 ",
          "text":"Utilize OptiForm Solution Suite to provide options for candidate formulations with extensive supporting data. "
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Twist-off for Oral &amp; Topical Technology",
          "text":"Expand your offerings with Twist-Off technology for oral &amp; topical OTC applications."
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Forecasting to Optimize Clinical Trial Supply Management",
          "text":"Solutions for better informed decision making and contingency planning in inherently dynamic trials. "
        },{
          "dataTopic":"['Consumer']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"The Softgel Revolution",
          "text":"Innovative dosage forms that are likely to succeed &amp; create a differentiated products in an increasingly crowded market space. "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Article/Whitepaper']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Article/Whitepaper",
          "title":"Particle Size Reduction to Improve Drug Performance",
          "text":"Create market differentiation and enable products that meet the specific medical needs of individual patients.  "
        },{
          "dataTopic":"['Delivery', 'Development Solutions', 'Oral Technologies']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"AAPS 2016 Presentations",
          "text":"Discover the latest solutions and advancement in drug delivery technologies. "
        },{
          "dataTopic":"['Clinical Supply Services']",
          "dataType":"['Webinars']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Webinars",
          "title":"Address the Hidden Root Causes of Supply Chain Inefficiency",
          "text":"Create a supply chain structure that is better suited to meeting the changing demands of today’s more complex studies. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Clinical Supply Services', 'Development Solutions', 'Supply']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Clinical Supply Services', 'Delivery', 'Development Solutions', 'Oral Technologies', 'Supply']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Development Solutions', 'Oral Technologies']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Delivery', 'Development Solutions', 'Sterile Technologies', 'Supply']",
          "dataType":"['Brochure']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Brochure",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Clinical Supply Services', 'Supply']",
          "dataType":"['Case Study']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Case Study",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Oral Technologies']",
          "dataType":"['Presentation']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Presentation",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Development Solutions']",
          "dataType":"['Poster']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Poster",
          "title":"Designing Complex Release Oral Solids",
          "text":"Controlled and Modified Release dosage form can improve patient experience. "
        },{
          "dataTopic":"['Delivery', 'Development Solutions', 'Inhalation', 'Supply']",
          "dataType":"['Offering Info']",
          "href": "http://www.catalent.com/index.php/thinking/science/Designing-Complex-Release-Oral-Solids",
          "fileType":"Offering Info",
          "title":"Inhalation Product Development: Expertise To Overcome Your Inhalation Challenges",
          "text":"With over twenty years in inhalation product development, Catalent has the broadest range of development services across all inhaled dose forms. "
        }
      ]
    };

    var html = '';
    for(var i=0, len=Obj.datas.length; i<len; i++){
      html+='<div data-topic="'+ Obj.datas[i].dataTopic + '" data-type="' + Obj.datas[i].dataType + '" class="tagged-elem show" >'
              +'<a href="'+ Obj.datas[i].href +'">'
                +'<div class="file-type">'+ Obj.datas[i].fileType +'</div>'
                +'<div class="tagged-elem-title">'+ Obj.datas[i].title +'</div>'
                +'<p>'+ Obj.datas[i].text +'</p>'
              +'</a></div>';
    }

    this.el.jsElems.append(html);
  }

  containTag(id, array){
    for(var i=0, len=array.length; i<len; i++){
      var a = array[i];
      if(id=== a+''){
        return true;
      }
    }
    return false;
  }

  filterResults() {
    var _m, k, _len4;
    var filter_topic = [];
    var filter_type = [];
    $('.tagged-elem').removeClass('show');
    var elems = $('.tagged-elem');
    if(this.topics !== null){
      for(var i=0, len=this.topics.length; i<len; i++){
        var t = this.topics[i];

        for(var j=0, lens =elems.length; j<lens; j++){
          var el=elems[j];
          var json_data = eval('('+$(el).attr('data-topic')+')');
          console.log(t);
          if(this.containTag(t, json_data)){
            filter_topic.push(el);
          }
        }
      }
    }else{
      filter_topic = elems;
    }

    if (this.types !== null) {
      for(var k=0, len1=this.types.length; k<len1; k++){
        var t=this.types[k];
        for(var l=0, len2=filter_topic.length; l<len2; l++){
          var el=filter_topic[l];
          var json_data = eval('('+ $(el).attr('data-type') +')');
          if(this.containTag(t, json_data)){
            filter_type.push(el);
          }
        }
      }
    }else{
      filter_type = filter_topic;
    }

    for (k = _m = 0, _len4 = filter_type.length; _m < _len4; k = ++_m) {
      var el = filter_type[k];
      $(el).addClass('show');
    }
  }

  initTagFilter() {
    var _this = this;
    $('.filter-link[data-topic]').on('click', function(){
      var topic = $(this).attr('data-topic');
      _this.topics = null;
      var selected;
      if(topic === ''){
        $('.filter-link[data-topic]').removeClass('selected');
        $(this).addClass('selected');
      }else{
        $('.filter-link[data-topic=""]').removeClass('selected');
        $(this).toggleClass('selected');
        if($('.filter-link[data-topic].selected').length === 0){
          $('.filter-link[data-topic=""]').click();
          return;
        }else{
          _this.topics = [];
        }

        selected = $('.filter-link[data-topic].selected');
        for(var i=0, len=selected.length; i<len; i++){
          var el = selected[i];
          _this.topics.push($(el).attr('data-topic'));
        }
      }
      return _this.filterResults();
    });


    $('.filter-link[data-type]').on('click', function(){
      var type = $(this).attr('data-type');
      _this.types = null;
      var selected;
      if(type === ''){
        $('.filter-link[data-type]').removeClass('selected');
        $(this).addClass('selected');
      }else{
        $('.filter-link[data-type=""]').removeClass('selected');
        $(this).toggleClass('selected');
        if($('.filter-link[data-type].selected').length === 0){
          $('.filter-link[data-type=""]').click();
          return;
        }else{
          _this.types = [];
        }
        selected = $('.filter-link[data-type].selected');
        for(var i=0, len=selected.length; i<len; i++){
          var el = selected[i];
          _this.types.push($(el).attr('data-type'));
        }
      }
      return _this.filterResults();
    });

  }
}
$.mlpModule(Filterthinking, 'Filterthinking');


