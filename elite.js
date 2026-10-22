// haykala/elite.js

import fs from 'fs';
import path from 'path';

export let eliteNumbers = [
  '201108056061',
  '21320687419474'
];

export const extractPureNumber = (jid) => {
  if (!jid) return '';
  return jid.toString().replace(/[@:].*/g, '').replace(/\D/g, '');
};

export const isElite = (number) => {
  if (!number) return false;
  const pureNumber = extractPureNumber(number);
  const isMatch = eliteNumbers.includes(pureNumber);
  console.log(`Elite check: ${number} -> ${pureNumber} -> ${isMatch}`);
  return isMatch;
};

// دالة إضافة رقم للنخبة
export const addEliteNumber = (number) => {
  const pureNumber = extractPureNumber(number);
  if (!eliteNumbers.includes(pureNumber)) {
    eliteNumbers.push(pureNumber);
    updateEliteNumbers();
    console.log(`✅ تم إضافة ${pureNumber} إلى قائمة النخبة`);
    return true;
  }
  return false;
};

// دالة حذف رقم من النخبة
export const removeEliteNumber = (number) => {
  const pureNumber = extractPureNumber(number);
  const index = eliteNumbers.indexOf(pureNumber);
  if (index > -1) {
    eliteNumbers.splice(index, 1);
    updateEliteNumbers();
    console.log(`❌ تم حذف ${pureNumber} من قائمة النخبة`);
    return true;
  }
  return false;
};

// دالة تحديث الملف
export const updateEliteNumbers = () => {
  const elitePath = path.join(process.cwd(), 'haykala', 'elite.js');
  const numbersStr = eliteNumbers.map(num => `  '${num}'`).join(',\n');

  const newContent = `import fs from 'fs';
import path from 'path';

export let eliteNumbers = [
${numbersStr}
];

export const extractPureNumber = (jid) => {
  if (!jid) return '';
  return jid.toString().replace(/[@:].*/g, '').replace(/\\D/g, '');
};

export const isElite = (number) => {
  if (!number) return false;
  const pureNumber = extractPureNumber(number);
  const isMatch = eliteNumbers.includes(pureNumber);
  console.log(\`Elite check: \${number} -> \${pureNumber} -> \${isMatch}\`);
  return isMatch;
};

export const addEliteNumber = (number) => {
  const pureNumber = extractPureNumber(number);
  if (!eliteNumbers.includes(pureNumber)) {
    eliteNumbers.push(pureNumber);
    updateEliteNumbers();
    console.log(\`✅ تم إضافة \${pureNumber} إلى قائمة النخبة\`);
    return true;
  }
  return false;
};

export const removeEliteNumber = (number) => {
  const pureNumber = extractPureNumber(number);
  const index = eliteNumbers.indexOf(pureNumber);
  if (index > -1) {
    eliteNumbers.splice(index, 1);
    updateEliteNumbers();
    console.log(\`❌ تم حذف \${pureNumber} من قائمة النخبة\`);
    return true;
  }
  return false;
};

export const updateEliteNumbers = () => {
  const elitePath = path.join(process.cwd(), 'haykala', 'elite.js');
  const numbersStr = eliteNumbers.map(num => \`  '\${num}'\`).join(',\\n');

  const newContent = \`import fs from 'fs';
import path from 'path';

export let eliteNumbers = [
\${numbersStr}
];

export const extractPureNumber = (jid) => {
  if (!jid) return '';
  return jid.toString().replace(/[@:].*/g, '').replace(/\\\\D/g, '');
};

export const isElite = (number) => {
  if (!number) return false;
  const pureNumber = extractPureNumber(number);
  const isMatch = eliteNumbers.includes(pureNumber);
  console.log(\`Elite check: \${number} -> \${pureNumber} -> \${isMatch}\`);
  return isMatch;
};

export const addEliteNumber = (number) => {
  const pureNumber = extractPureNumber(number);
  if (!eliteNumbers.includes(pureNumber)) {
    eliteNumbers.push(pureNumber);
    updateEliteNumbers();
    console.log(\`✅ تم إضافة \${pureNumber} إلى قائمة النخبة\`);
    return true;
  }
  return false;
};

export const removeEliteNumber = (number) => {
  const pureNumber = extractPureNumber(number);
  const index = eliteNumbers.indexOf(pureNumber);
  if (index > -1) {
    eliteNumbers.splice(index, 1);
    updateEliteNumbers();
    console.log(\`❌ تم حذف \${pureNumber} من قائمة النخبة\`);
    return true;
  }
  return false;
};

export const updateEliteNumbers = ${updateEliteNumbers.toString()};
\`;

  fs.writeFileSync(elitePath, newContent);
  console.log('✅ تم تحديث قائمة النخبة تلقائيًا.');
};
`;

  fs.writeFileSync(elitePath, newContent);
  console.log('✅ تم تحديث قائمة النخبة تلقائيًا.');
};