import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const path = './data.json';
const git = simpleGit();

// List tanggal-tanggal buat commit
const dates = [
  '2024-04-02',
  '2024-04-03',
  '2024-04-04',
  '2024-04-05',
  '2024-04-06',
  '2024-04-08',
  '2024-04-10',
  '2024-04-14',
  '2024-04-17',
  '2024-04-22',
  '2024-04-24',
  '2024-04-30',
  '2024-05-01',
  '2024-05-02',
  '2024-05-03',
  '2024-05-04',
  '2024-05-12',
  '2024-05-13',
  '2024-05-14',
  '2024-05-15',
  '2024-05-16',
  '2024-05-17',
  '2024-05-18',
  '2024-05-25',
  '2024-06-01',
  '2024-06-09',
  '2024-06-10',
  '2024-06-11',
  '2024-06-12',
  '2024-06-13',
  '2024-06-14',
  '2024-06-15',
  '2024-06-16',
  '2024-06-22',
  '2024-06-24',
  '2024-06-25',
  '2024-06-26',
  '2024-06-27',
  '2024-06-28',
  '2024-07-09',
  '2024-07-10',
  '2024-07-11',
  '2024-07-12',
  '2024-07-13',
  '2024-07-15',
  '2024-07-17',
  '2024-07-21',
  '2024-07-24',
  '2024-07-29',
  '2024-07-31',
  '2024-08-06',
  '2024-08-07',
  '2024-08-08',
  '2024-08-09',
  '2024-08-10',
  '2024-08-18',
  '2024-08-19',
  '2024-08-20',
  '2024-08-21',
  '2024-08-22',
  '2024-08-23',
  '2024-08-24',
  '2024-08-26',
  '2024-09-03',
  '2024-09-04',
  '2024-09-12',
  '2024-09-15',
  '2024-09-16',
  '2024-09-17',
  '2024-09-18',
  '2024-09-19',
  '2024-09-20',
  '2024-09-21',
  '2024-09-29',
  '2024-09-30',
  '2024-10-01',
  '2024-10-02',
  '2024-10-03',
  '2024-10-04',
  '2024-10-05',

  // Tambahin sesuai pola huruf hijau yang lo mau
];

async function generateCommits() {
  for (const date of dates) {
    const formattedDate = moment(date).format(); // Format ke ISO

    // Update isi file biar ada perubahan
    const data = { date: formattedDate };
    await jsonfile.writeFile(path, data);

    // Add, commit, dan set tanggal author & committer
    await git.add([path]);
    await git.commit(`Commit on ${formattedDate}`, undefined, {
      '--date': formattedDate, // Set tanggal
    });

    console.log(`Commit created for ${formattedDate}`);
  }

  // Push setelah semua commit dibuat
  await git.push('origin', 'main');
}

generateCommits().catch((err) => console.error(err));
