const QC_IDS = {
    BKK: 'a',
    VBUSZ: 'b',
    KTI: 'c',
    HKIR: 'd',
};

const NODE_ENV = process.env.NODE_ENV.trim();
const QC_ID = QC_IDS[NODE_ENV];

const h1 = document.createElement('h1');
h1.innerText = NODE_ENV;

document.querySelector('body').appendChild(h1);

console.log(QC_ID);