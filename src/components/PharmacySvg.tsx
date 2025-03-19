interface PharmacySvg {
    width?: number;
    height?: number;
  }
  
const PharmacySvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M243.2 1.5c-38.7 8.8-57.9 53.2-37.7 87 4 6.6 12.2 15.5 17.3 18.6l3.2 2.1v21l-5.5-.4c-11.3-.9-19.6-9.2-22.8-22.8-3.1-13-9.6-22.8-19.6-29.4-10.3-6.9-10.5-6.9-62.1-7.7-27-.4-48.5-1.1-51.2-1.7-2.5-.6-15.4-3.8-28.5-7.2-13.2-3.3-25.2-6-26.7-6C2.4 55-.5 60.1.4 71c1.2 15.1 6.9 30.1 15.9 41.9 4.8 6.2 5.1 7.1 5.9 14.4 1.6 16.3 10 33.7 21.8 45.2 3.3 3.3 9.6 10.5 13.9 16 14.3 18.3 27.3 29.2 44.6 37.5 17.3 8.2 30.7 11.2 50 11.2 24.4 0 47.8-7.5 66-21.1 2.8-2 5.6-4.1 6.3-4.5.9-.6 1.2 3.1 1.2 16.8V246h-7.7c-18.2.1-33.7 6.4-46.3 18.9-13 12.9-19.3 27.7-19.3 45.6 0 18.9 7.7 36.5 16 36.5 3.6 0 8-2.9 9.4-6.3 1.3-3.2 1-4.7-3.2-16.2-2.9-8-2.9-19.6 0-28 6.7-19.1 23.6-30.5 45.2-30.5h5.9V354.7l-16.2.6c-12.9.4-17.6 1-22.2 2.6-33.9 11.9-43.7 54.2-18.3 79.2 5.1 5 11 8.6 19.1 11.6 2.9 1.1 9.9 1.7 23 2.2l19 .6 1.4 6.5c4.5 21.3 13.8 47.2 18.2 51.2 5 4.6 12.3 2.9 15.3-3.4 3.9-8.6 9.2-24.6 12.4-37.8 2-8 3.7-15.1 3.9-15.8.5-1.8 14.5-1.6 19.2.3 12.6 5.3 16.6 21.5 8 32-3.6 4.3-9.7 7.4-14.6 7.5-4 0-8.8 2.3-10.2 4.9-1.3 2.5-1.3 7.7 0 10.2 3.3 6.1 15.1 6.2 26.9.3 30.5-15.2 29.7-58-1.4-72.5-5-2.4-8.2-3.1-15.6-3.6l-9.2-.6.7-8.1c.3-4.5.6-17 .6-27.9V375h7.5c10.5 0 16.6-1.5 27.5-6.7 13.4-6.4 22.9-15.9 29.3-29.3 5.3-11.1 6.7-17 6.7-28.4 0-34.7-26.4-62.2-61.7-64.3l-9.3-.6v-17.4c0-13.7.3-17.3 1.3-16.7.6.4 3.5 2.5 6.2 4.5 18.2 13.6 41.6 21.1 66 21.1 19.3 0 32.7-3 50-11.2 17.3-8.3 30.3-19.2 44.6-37.5 4.3-5.5 10.6-12.7 13.9-16 11.9-11.6 20.6-29.7 21.7-45.2.5-6.3 1.1-8.1 3.3-10.7 10.1-11.5 17.2-29.1 18.6-45.8.9-10.6-2.1-15.8-9.2-15.8-1.5 0-14.2 2.9-28.3 6.4-14.1 3.6-28.8 6.9-32.8 7.5-4.2.7-23.7 1.1-47 1.1-43.4 0-47.9.5-57.5 5.7-6.1 3.3-15.7 13.4-18.6 19.5-1.1 2.5-3 8.1-4.1 12.4-1.1 4.3-3.3 9.6-4.8 11.8-4 5.7-11.1 9.8-17.8 10.4l-5.5.4v-21l3.3-2.1c5-3.1 13.2-12 17.2-18.6 12.5-20.9 10.5-47.5-5.2-67-6.1-7.5-18.1-15.7-27-18.5-8.8-2.8-22.7-3.4-31.1-1.5zm22.3 20.1c24.5 6.3 36.2 33.2 24.3 55.7-11.7 21.9-41.7 26.8-60.1 9.8-22-20.3-12.7-57.7 16.3-65.5 7.2-1.9 12.3-1.9 19.5 0zM39 82.4c26.8 7 25.3 6.9 75.5 7.5 44.7.6 46.1.7 50 2.8 8 4.3 11.9 10 14.5 21.3 4.7 20.4 23 36 42.1 36h4.9v32.6l-6.2 6c-8.9 8.6-14.2 12.6-22.9 17.3-15.5 8.4-28.1 11.4-46.4 11.3-19.3-.1-35.4-5.2-52.3-16.5l-6.2-4.2 14-.5c13.5-.5 14.1-.6 16.6-3.2 3.7-3.7 3.7-9.9 0-13.6-2.5-2.6-3.1-2.7-18.4-3.4-20-.8-26.1-2.4-37.3-9.9-9.2-6.2-18.7-18-21.3-26.6l-.7-2.2 6.3 2.6c8.6 3.5 17.1 5.1 31.4 5.9 15.9.9 22.5 0 25.8-3.3 3.6-3.6 3.6-10 .1-13.5-3.2-3.2-6.8-3.8-23.4-3.8-15.4 0-22.2-1.4-32.6-6.8-12.6-6.5-25.2-21.3-29.1-34.1-1.8-5.9-1.8-6.3.4-5.7.9.2 7.8 2.1 15.2 4zm451-3.7c0 2.4-3.3 10.8-6.1 15.9-4.7 8.4-15.9 19.2-24.4 23.6-10.4 5.4-17.2 6.8-32.6 6.8-16.6 0-20.2.6-23.4 3.8-3.5 3.5-3.5 9.9.1 13.5 3.3 3.3 9.9 4.2 25.8 3.3 14.3-.8 22.8-2.4 31.4-5.9l6.3-2.6-.7 2.2c-2.6 8.6-12.1 20.4-21.3 26.6-11.2 7.5-17.3 9.1-37.3 9.9-15.3.7-15.9.8-18.4 3.4-3.7 3.7-3.7 9.9 0 13.6 2.5 2.6 3.1 2.7 16.6 3.2l14 .5-6.2 4.2c-16.9 11.3-33 16.4-52.3 16.5-18.3.1-30.9-2.9-46.4-11.3-8.7-4.7-14-8.7-22.8-17.3l-6.3-6V150h4.9c19.1 0 37.4-15.6 42.1-36 2.6-11.3 6.5-17 14.5-21.3 3.9-2.1 5.3-2.2 50-2.8 50.8-.6 49.7-.5 78.5-8.4 14.1-3.8 14-3.8 14-2.8zM266 236.1V355h-20V117.2h20v118.9zm42.3 32.9c25.2 9.4 36.2 39.9 23 63.6-7.6 13.6-22.7 22.4-38.5 22.4H286V265.7l8.3.6c4.6.3 10.8 1.5 14 2.7zM226 393.8c0 10.4.3 23 .6 28l.7 9.2h-14c-17.4 0-22.6-1.4-29.3-7.6-6.8-6.3-9.4-12.8-8.8-21.9.5-7.6 2.1-11.5 7-17 6.3-7.2 13-9.2 31.6-9.4l12.2-.1v18.8zm40 .4c0 22.1-1.2 37.8-4 52.8-2.7 14.2-5.5 24.6-6.2 23.5-.9-1.5-3.5-11.9-5.3-21.1-2.8-14.4-4.5-34.6-4.5-54.7V375h20v19.2zM212.5 492.9c-6.4 2.7-8.1 11-3.2 15.8 6 6.1 16.2 1.9 16.2-6.7 0-6.6-7.2-11.6-13-9.1z" fill="currentColor" />
    </svg>
  );
};
export default PharmacySvg;
