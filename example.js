/**
 * @apiGroup Car Listing
 * @api {get} /list-cars/:user_id/:token Request available cars
 * @apiName RequestAvailableCars
 *
 * @apiParam {Number} user_id Users unique ID.
 * @apiParam {String} token Unique token for auth.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      { "car_id": "1", "car_name": "Honda City", "car_modal": "2015", "rent_per_day": 100, "currency": "$", "img_url": "abc.png"},
 *      { "car_id": "2", "car_name": "Audi A6", "car_modal": "2018", "rent_per_day": 300, "currency": "$", "img_url": "abc.png"},
 *      { "car_id": "2", "car_name": "BMW X8", "car_modal": "2016", "rent_per_day": 500, "currency": "$", "img_url": "abc.png"}
 *     ]
 *
 * @apiError CarNotFound If no car is available in the system.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Sorry! No car available in the system"
 *     }
 */

/**
 * @api {post} /book-cars Request car booking
 * @apiName RequestCarsBooking
 * @apiGroup Cars Booking
 *
 * @apiParam {Number} user_id Users unique ID.
 * @apiParam {Number} car_id Car unique ID.
 * @apiParam {Number} longitude Longitude for Location.
 * @apiParam {Number} latitude Latitude for Location.
 * @apiParam {Number} no_of_days No of days from car booking.
 * @apiParam {Date} from_date Booking start date.
 * @apiParam {Date} to_date Booking end date.
 * @apiParam {String} _token jwt token for auth.
 *
 * @apiSuccess {String} msg Your car has booked successfully.
 * @apiSuccess {String} car Audi A6.
 * @apiSuccess {String} duration From 01-01-2021 to 05-01-2021.
 * @apiSuccess {String} calculated_rent 1500$.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      "msg": "Your car has booked successfully",
 *      "car": "Audi A6 2018",
 *      "calculated_rent": "1500$",
 *      "duration": "From 01-01-2021 to 05-01-2021"
 *      }
 *
 * @apiError CarAlreadyBooked If selected car is already booked.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Sorry! Selected car is already booked, Please select another one."
 *     }
 */

/**
 * @api {post} /vendor_car_registration Request for vendor car registration
 * @apiName RequestVendorCarsRegistration
 * @apiGroup Vendor Registration
 *
 * @apiParam {Number} vendor_id Vendor unique ID after login.
 * @apiParam {Number} car_company_id Car company Unique ID.
 * @apiParam {String} car_name Name of the car.
 * @apiParam {String} car_color Color of the car.
 * @apiParam {Number} car_modal Car modal No.
 * @apiParam {String} car_engine_no Car Engine No.
 * @apiParam {String} car_no_plate Car Unique No.
 * @apiParam {String} car_images Car Unique No.
 * @apiParam {String} _token jwt token for auth.
 *
 * @apiSuccess {String} msg Your car has registered successfully.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *      "msg": "Your car has registered successfully",
 *      }
 *
 * @apiError Validation If required fields are empty or duplicate.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Engine No and Car No Plate already exist. Please use different No."
 *     }
 */