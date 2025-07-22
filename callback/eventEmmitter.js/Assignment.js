const EventEmitter = require('events');
const loginEmitter = new EventEmitter();

let attempts = 0;
const maxAttempts = 5;

loginEmitter.on('loginAttempt', () => {
  attempts++;
  console.log(`Login attempt ${attempts}`);

  if (attempts >= maxAttempts) {
    loginEmitter.emit('notifyAdmin');
  }
});

loginEmitter.on('notifyAdmin', () => {
  console.log('⚠️  Too many login attempts! Admin has been notified.');
});

// Simulate login attempts
const simulateLogin = setInterval(() => {
  loginEmitter.emit('loginAttempt');

  if (attempts >= maxAttempts) {
    clearInterval(simulateLogin);
  }
}, 1000);



const EventEmitter = require('events');
const paymentEmitter = new EventEmitter();

paymentEmitter.on('startPayment', () => {
  console.log('💳 Payment initiated...');
  paymentEmitter.emit('processPayment');
});

paymentEmitter.on('processPayment', () => {
  console.log('🔄 Processing payment...');
  setTimeout(() => {
    paymentEmitter.emit('paymentSuccess');
  }, 2000);
});

paymentEmitter.on('paymentSuccess', () => {
  console.log('✅ Payment successful! Netflix subscription activated.');
});

// Trigger the flow
paymentEmitter.emit('startPayment');



const EventEmitter = require('events');
const downloadEmitter = new EventEmitter();

downloadEmitter.on('startDownload', (file) => {
  console.log(`📥 Starting download of "${file}"...`);
  downloadEmitter.emit('downloading', file);
});

downloadEmitter.on('downloading', (file) => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 20;
    console.log(`Downloading ${file}: ${progress}%`);
    if (progress >= 100) {
      clearInterval(interval);
      downloadEmitter.emit('downloadComplete', file);
    }
  }, 1000);
});

downloadEmitter.on('downloadComplete', (file) => {
  console.log(`✅ Download of "${file}" completed.`);
});

// Trigger the flow
downloadEmitter.emit('startDownload', 'document.pdf');
