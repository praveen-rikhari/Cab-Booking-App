# Speedy GO

Speedy GO is a cab booking application that allows users to book rides conveniently. The application uses Next.js for the frontend, Tailwind CSS for styling, Clerk for authentication, Mapbox API for maps, and Stripe for payments.

## Features
- User authentication via Google, Apple, GitHub, or email.
- Real-time location tracking and mapping.
- Suggestions for pickup and dropoff locations using Mapbox API.
- Route highlighting between selected points.
- Multiple vehicle options.
- Secure payment via Stripe.

## Technologies Used
- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Clerk**: Authentication and user management.
- **Mapbox API**: Interactive maps and location services.
- **Stripe**: Payment processing.

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- Mapbox API key.
- Stripe API key.
- Clerk API key.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/praveen-rikhari/Cab-Booking-App.git
2. Navigate to repository:
  ```
  cd Cab-Booking-App
  ```
3. Install dependencies:
  ```
  npm install
  ```
4. Create a .env.local file in the root directory and add your API keys:
  ```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
MAPBOX_ACCESS_TOKEN=
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
  ```
5. Run the development server:
   ```
   npm run dev
   ```
6. Open http://localhost:3000 in your browser to see the application.

## Usage

1. **Sign Up**: Sign up using your Google, Apple, GitHub account, or email address.
2. **Location Permission**: Allow the application to track your current location.
3. **Select Pickup Location**: Use the map to select your pickup location. The Mapbox API will provide suggestions.
4. **Select Dropoff Location**: Similarly, select your dropoff location.
5. **View Route**: The map will show two pointers along with a marker highlighting the route between the points.
6. **Select Vehicle**: Choose your preferred vehicle type.
7. **Book Ride**: Click on the "Book Ride" button.
8. **Payment**: You will be redirected to the payment page. Pay using your card or choose to pay after the ride.
9. **Confirmation**: Once the payment is done, you will be redirected to the payment confirmation page. Your ride is now booked!

# Project Images

![Screenshot 2024-05-21 at 20-30-40 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/7ad68785-c8ee-48a1-bc60-eaf55f684b9c)
![Screenshot 2024-05-21 at 20-32-06 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/bed4206a-d213-41bf-a8f6-57c05ff7d94b)
![Screenshot 2024-05-21 at 20-33-32 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/4a9624d1-f333-4e53-a046-ca3a7ffe48a0)
![Screenshot 2024-05-21 at 20-54-49 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/79984d76-3353-464a-b814-3ac471155fcc)
![Screenshot 2024-05-21 at 20-35-30 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/b5d65d24-8210-4c69-a96a-94cd64d43dc0)
![Screenshot 2024-05-21 at 20-35-54 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/380fade7-79d1-42be-a612-2a860c7f9eb0)
![Screenshot 2024-05-21 at 20-36-59 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/a38e113d-6ec0-4f7e-a71c-985a88ef9375)
![Screenshot 2024-05-21 at 20-38-59 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/0fecb108-7a33-472c-91fd-f74cfdf899e4)
![Screenshot 2024-05-21 at 20-49-38 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/d280bd3e-448f-450d-9c7d-14038a16c646)
![Screenshot 2024-05-21 at 20-53-38 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/764282e1-55ac-462e-acf2-0465b2930bbd)
![Screenshot 2024-05-21 at 20-54-22 Speedy Go](https://github.com/praveen-rikhari/Cab-Booking-App/assets/84331681/5f0c1db5-6206-42a4-8f7a-563f9250e3e8)
