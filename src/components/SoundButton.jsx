import React, { useContext, useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import { AppContext } from '../Context';

import fisting from "../audio/fisting.mp3";
import AAAAAA2 from "../audio/AAAAAA2.mp3";
import AAAAAA from "../audio/AAAAAA.mp3";
import airplane from "../audio/airplane.mp3";
import alarm from "../audio/alarm.mp3";
import amazing from "../audio/amazing.mp3";
import annihilationGun from "../audio/annihilation-gun.mp3";
import aRat from "../audio/a-rat.mp3";
import areYouSure from "../audio/are-you-sure.mp3";
import auughhh from "../audio/auughhh.mp3";
import badHorn from "../audio/bad-horn.mp3";
import bigFart from "../audio/big-fart.mp3";
import bigger from "../audio/bigger.mp3";
import bigSmoke from "../audio/big-smoke.mp3";
import bluetooth from "../audio/bluetooth.mp3";
import bossInThisGym from "../audio/boss-in-this-gym.mp3";
import boyNextDoor from "../audio/boy-next-door.mp3";
import bruh from "../audio/bruh.mp3";
import bum from "../audio/bum.mp3";
import candyland from "../audio/candyland.mp3";
import carHorn from "../audio/car-horn.mp3";
import chingChengHanji from "../audio/ching-cheng-hanji.mp3";
import culm from "../audio/culm.mp3";
import danger from "../audio/danger.mp3";
import darkSouls from "../audio/dark-souls.mp3";
import deepDarkFantasies from "../audio/deep-dark-fantasies.mp3";
import dogDoin from "../audio/dog-doin.mp3";
import drinkPotion from "../audio/drink-potion.mp3";
import druzhokPirozhok from "../audio/druzhok-pirozhok.mp3";
import eeEeEe from "../audio/ee-ee-ee.mp3";
import emotionalDamage from "../audio/emotional-damage.mp3";
import e from "../audio/e.mp3";
import error from "../audio/error.mp3";
import fail from "../audio/fail.mp3";
import farLord from "../audio/far-lord.mp3";
import fart2 from "../audio/fart2.mp3";
import fart3 from "../audio/fart3.mp3";
import fartMemeSound from "../audio/fart-meme-sound.mp3";
import fbi from "../audio/fbi.mp3";
import final from "../audio/final.mp3";
import finger from "../audio/finger.mp3";
import forniteBalls from "../audio/fornite-balls.mp3";
import french from "../audio/french.mp3";
import gachiAa from "../audio/gachi-aa.mp3";
import galaxy from "../audio/galaxy.mp3";
import gaySearch from "../audio/gay-search.mp3";
import getUrAssBack from "../audio/get-ur-ass-back.mp3";
import gey from "../audio/gey.mp3";
import giveMeUrPassword from "../audio/give-me-ur-password.mp3";
import goodMorningGirl from "../audio/good-morning-girl.mp3";
import goofyAll from "../audio/goofy-all.mp3";
import hardFart from "../audio/hard-fart.mp3";
import huh from "../audio/huh.mp3";
import iBillyHerrington from "../audio/i-billy-herrington.mp3";
import ilanMask from "../audio/ilan-mask.mp3";
import illuminati from "../audio/illuminati.mp3";
import johnCena from "../audio/john-cena.mp3";
import klonk from "../audio/klonk.mp3";
import laugh from "../audio/laugh.mp3";
import lebron from "../audio/lebron.mp3";
import letsGo from "../audio/lets-go.mp3";
import loading from "../audio/loading.mp3";
import lol from "../audio/lol.mp3";
import longFart from "../audio/long-fart.mp3";
import manAndStone from "../audio/man-and-stone.mp3";
import master from "../audio/master.mp3";
import minecraftGachi from "../audio/minecraft-gachi.mp3";
import mmm from "../audio/mmm.mp3";
import nani from "../audio/nani.mp3";
import notification from "../audio/notification.mp3";
import nuclearFart from "../audio/nuclear-fart.mp3";
import ohHellNo from "../audio/oh-hell-no.mp3";
import ohNoNoLaugh from "../audio/oh-no-no-laugh.mp3";
import ok from "../audio/ok.mp3";
import oof from "../audio/oof.mp3";
import oomagaad from "../audio/oomagaad.mp3";
import outro from "../audio/outro.mp3";
import pablo from "../audio/pablo.mp3";
import peaches from "../audio/peaches.mp3";
import pelmeni from "../audio/pelmeni.mp3";
import plush from "../audio/plush.mp3";
import punch from "../audio/punch.mp3";
import puruPuruPupum from "../audio/puru-puru-pupum.mp3";
import raaah from "../audio/raaah.mp3";
import ripTheSkin from "../audio/rip-the-skin.mp3";
import running from "../audio/running.mp3";
import sadViolin from "../audio/sad-violin.mp3";
import samsung from "../audio/samsung.mp3";
import sanic from "../audio/sanic.mp3";
import scary from "../audio/scary.mp3";
import shoiguGirasimov from "../audio/shoigu-girasimov.mp3";
import slaveMusic from "../audio/slave-music.mp3";
import slowFart from "../audio/slow-fart.mp3";
import snore from "../audio/snore.mp3";
import sorryForWhat from "../audio/sorry-for-what.mp3";
import sorry from "../audio/sorry.mp3";
import steveHurt from "../audio/steve-hurt.mp3";
import stonks from "../audio/stonks.mp3";
import subwaySurfers from "../audio/subway-surfers.mp3";
import success from "../audio/success.mp3";
import suction from "../audio/suction.mp3";
import sus2 from "../audio/sus2.mp3";
import sus from "../audio/sus.mp3";
import thankYou from "../audio/thank-you.mp3";
import tinyFart from "../audio/tiny-fart.mp3";
import tommass from "../audio/tommass.mp3";
import toyota from "../audio/toyota.mp3";
import trumpet from "../audio/trumpet.mp3";
import ultraGay from "../audio/ultra-gay.mp3";
import wasted from "../audio/wasted.mp3";
import wetFart from "../audio/wet-fart.mp3";
import whatTheHell from "../audio/what-the-hell.mp3";
import windows from "../audio/windows.mp3";
import woo from "../audio/woo.mp3";
import wrongDoor from "../audio/wrong-door.mp3";

const soundMap = {
  fisting,
  AAAAAA2,
  AAAAAA,
  airplane,
  alarm,
  amazing,
  annihilationGun,
  aRat,
  areYouSure,
  auughhh,
  badHorn,
  bigFart,
  bigger,
  bigSmoke,
  bluetooth,
  bossInThisGym,
  boyNextDoor,
  bruh,
  bum,
  candyland,
  carHorn,
  chingChengHanji,
  culm,
  danger,
  darkSouls,
  deepDarkFantasies,
  dogDoin,
  drinkPotion,
  druzhokPirozhok,
  eeEeEe,
  emotionalDamage,
  e,
  error,
  fail,
  farLord,
  fart2,
  fart3,
  fartMemeSound,
  fbi,
  final,
  finger,
  forniteBalls,
  french,
  gachiAa,
  galaxy,
  gaySearch,
  getUrAssBack,
  gey,
  giveMeUrPassword,
  goodMorningGirl,
  goofyAll,
  hardFart,
  huh,
  iBillyHerrington,
  ilanMask,
  illuminati,
  johnCena,
  klonk,
  laugh,
  lebron,
  letsGo,
  loading,
  lol,
  longFart,
  manAndStone,
  master,
  minecraftGachi,
  mmm,
  nani,
  notification,
  nuclearFart,
  ohHellNo,
  ohNoNoLaugh,
  ok,
  oof,
  oomagaad,
  outro,
  pablo,
  peaches,
  pelmeni,
  plush,
  punch,
  puruPuruPupum,
  raaah,
  ripTheSkin,
  running,
  sadViolin,
  samsung,
  sanic,
  scary,
  shoiguGirasimov,
  slaveMusic,
  slowFart,
  snore,
  sorryForWhat,
  sorry,
  steveHurt,
  stonks,
  subwaySurfers,
  success,
  suction,
  sus2,
  sus,
  thankYou,
  tinyFart,
  tommass,
  toyota,
  trumpet,
  ultraGay,
  wasted,
  wetFart,
  whatTheHell,
  windows,
  woo,
  wrongDoor,
};

const SoundButton = (props) => {

  // const { isEditMode, setFavorites, favorites } = useContext(AppContext);
  // const { currentSound, setCurrentSound, isSoundsOverlapping } = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState('bg-red-200');

  const [play, { stop }] = useSound(props.file);


  const handleClick = () => {

    play()
    stop()
    
  };

  // useEffect(() => {
  //   if (currentSound !== props.srcAudio && !isSoundsOverlapping) {
  //     stop();
  //   }
  // }, [currentSound, props.srcAudio, isSoundsOverlapping, stop]);

  // useEffect(() => {
  //   if (favorites.includes(props.srcAudio)) {
  //     setColor('bg-green-200');
  //   } else {
  //     setColor('bg-red-200');
  //   }
  // }, [favorites, props.srcAudio]);

  return (
    <div className={`${false ? color : 'bg-slate-100'} rounded-xl`}>
      <button
        className={`h-[45px] w-[45px] font-bold rounded-xl border text-[10px] border-black flex justify-center items-center transition-transform duration-10 ease-in ${
          isClicked ? 'scale-90' : ''
        }`}
        onClick={handleClick}
        style={{ pointerEvents: isClicked ? 'none' : 'auto' }}
      >
        {props.text}
      </button>
    </div>
  );
};



export default SoundButton;
