const assert = require('assert');
Feature('Favoriting resto');

Scenario('belum menambahkan restoran ke favorit', ({I}) => {
  I.amOnPage('#/favorite');
  I.see('Anda belum menambahkan satu pun restoran ke daftar favorit.', 'p');
});

Scenario('menambahkan dua ke favorit', async ({I}) => {
  I.amOnPage('/');
  pause();
  I.seeElement('.text-field h3');
  const resto1 = locate('.text-field h3').first();
  const restoName1 = await I.grabTextFrom(resto1); 
  I.click(resto1);
  pause();
  I.seeElement('#like_button');
  I.click(locate('#like_button'));
  I.amOnPage('#/favorite');
  pause();
  I.seeElement('.text-field h3');
  const resto1liked = locate('.text-field h3').first();
  const restoName1liked = await I.grabTextFrom(resto1liked);
  assert.strictEqual(restoName1, restoName1liked);
  I.amOnPage('/');
  pause();
  I.seeElement('.text-field h3');
  const resto2 = locate('.text-field h3').at(2);
  const restoName2 = await I.grabTextFrom(resto2);
  I.click(resto2);
  pause();
  I.seeElement('#like_button');
  I.click(locate('#like_button'));
  I.amOnPage('#/favorite');
  pause();
  const resto2liked = locate('.text-field h3').at(2);
  const restoName2liked = await I.grabTextFrom(resto2liked);
  assert.strictEqual(restoName2, restoName2liked);
});

Scenario('menghapus dari favorit', ({I}) => {
  I.amOnPage('/');
  pause();
  I.seeElement('.text-field h3');
  I.click(locate('.text-field h3').first());
  pause();
  I.seeElement('#like_button');
  I.click(locate('#like_button'));
  I.amOnPage('#/favorite');
  pause();
  I.seeElement('.text-field h3');
  I.click(locate('.text-field h3'));
  pause();
  I.seeElement('#like_button');
  I.click(locate('#like_button'));
  I.amOnPage('#/favorite');
  pause();
  I.see('Anda belum menambahkan satu pun restoran ke daftar favorit.', 'p');
});