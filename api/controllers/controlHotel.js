import Hotel from "../models/Hotel.js"

//CREATE (POST)
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);

  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
}

//UPDATE (PUT)
export const updatedHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

  
//DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been deleted!!");
  } catch (err) {
    next(err)
  }
}
  
//GET by Hotel
export const getHotel = async ( req, res, next) => {

  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
}

//GET ALL by Hotel
export const getHotels = async ( req, res, next ) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
}

//GET ALL Count by City* 
//(we can use hotel.find but we will use mongoDB count document instead
export const countByCity = async ( req, res, next ) => {
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(cities.map(city =>{
      return Hotel.countDocuments({city: city})
    }))

    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
}
