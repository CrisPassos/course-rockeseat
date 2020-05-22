import Api from "./api";

/** Criando uma Promise - modo antigo  */
const myPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 1000);
  });

myPromise().then(response => {
  console.log(response);
});

/** Async / Await */
async function executePromise() {
  const response = await myPromise();

  console.log(response);
}

executePromise();

const execProm = async () => {
  console.log(await myPromise());
};

execProm();

Api.getUserInfo("crispassos");
