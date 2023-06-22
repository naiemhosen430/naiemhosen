const homecontroler = (req,res) => {
    res.render("home");
}

const portfoliocontroler = (req,res) => {
    res.render("porfolio");
}

const templetescontroler = (req,res) => {
    res.render("templetes");
}

const contractcontroler = (req,res) => {
    res.render("contract");
}

const aboutcontroler = (req,res) => {
    res.render("about");
}

const photoscontroler = (req,res) => {
    res.render("photos");
}


module.exports= {
    homecontroler,
    portfoliocontroler,
    templetescontroler,
    contractcontroler,
    aboutcontroler,
    photoscontroler
};