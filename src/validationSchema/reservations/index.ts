import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  reservation_date: yup.date().required(),
  reservation_time: yup.date().required(),
  number_of_guests: yup.number().integer().required(),
  guest_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
