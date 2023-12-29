# Shopperz

### An Elegant Car Rental Website

This is a car rental website built using Next.js, Typescript and Tailwind CSS. It uses the Imagin Studio API to fetch the car Image data and Rapid API to fetch car details data.  

Link to Site: https://show-me-a-car.vercel.app

<p align='center'>
    <img src="https://i.ibb.co/sKYCkZJ/mockuper-1.png" />
</p>

## Built Using
- Next.js
- Typescript
- Tailwind CSS

## Full Page
<p align='center'>
    <img src="https://i.postimg.cc/V6XtBYW6/screencapture-localhost-3000-2023-12-29-21-26-51.png" />
</p>

## Installation

1. Clone the repository.
```
git clone
```
2. Install the dependencies using
```
npm install
```
3. Create a `.env` file in the root directory of the project and add the following environment variables. also please note that the emailJs environment variables are optional and only required if you want to use the contact form.
```
# Imagin Studio 
NEXT_PUBLIC_IMAGIN_STUDIO_CUSTOMER_ID = '<Your_Imagin_Studio_API_Key>'

# Rapid API
NEXT_PUBLIC_RAPID_API_KEY = '<Your_Rapid_API_Key>'
```
4. Run the application using
```
npm run dev
```
5. Open your browser and navigate to `http://localhost:3000`


## License

This project is licensed under the [MIT License](LICENSE).
