/*
  3D Cat from Yakudoo's "Cat vs Ball of Wool" (CC BY-NC-ND)
  Original: https://codepen.io/Yakudoo/pen/oXJYxy
  Restyled as gray tabby. Personal/non-commercial use only.
*/
import { useRef, useState, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import * as THREE from "three";

function createPurrSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const duration = 1.5;
    const buf = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) {
      const t = i / ctx.sampleRate;
      d[i] = Math.sin(2 * Math.PI * 25 * t) * Math.sin(2 * Math.PI * 3 * t) * 0.08 * (1 - t / duration);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start();
  } catch (e) {}
}

function createMeowSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.15);
    osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.25);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}

function buildCat() {
  const group = new THREE.Group();

  const grayMat = new THREE.MeshLambertMaterial({ color: 0x808088 });
  const pinkMat = new THREE.MeshLambertMaterial({ color: 0xe8a8a0 });
  const whiteMat = new THREE.MeshLambertMaterial({ color: 0xf5f0ea });
  const greenMat = new THREE.MeshLambertMaterial({ color: 0x88c050 });
  const collarMat = new THREE.MeshLambertMaterial({ color: 0x5ba4c9, side: THREE.DoubleSide });
  const stripeMat = new THREE.MeshLambertMaterial({ color: 0x3a3a42 });
  const whiskerMat = new THREE.MeshLambertMaterial({ color: 0x999999 });

  const bodyHeight = 80;
  const faceHeight = 30;
  const armHeight = 19;
  const handHeight = 10;

  // BODY
  const body = new THREE.Group();
  const torsoGeom = new THREE.CylinderGeometry(0, 26, bodyHeight, 3, 1);
  torsoGeom.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI / 3));
  torsoGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -bodyHeight / 2, 0));
  const skew = new THREE.Matrix4().set(1,0,0,0, 0,1,0,0, 0,0.2,1,0, 0,0,0,1);
  torsoGeom.applyMatrix4(skew);
  const torso = new THREE.Mesh(torsoGeom, grayMat);

  const chestGeom = new THREE.CylinderGeometry(6, 0, 17, 3);
  chestGeom.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI / 3));
  chestGeom.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, 0.3));
  chestGeom.applyMatrix4(skew);
  const chest = new THREE.Mesh(chestGeom, whiteMat);
  chest.position.set(0, -30, 1);
  torso.add(chest);

  const scarf2 = new THREE.Mesh(new THREE.CylinderGeometry(10, 9, 9, 10, 1), collarMat);
  scarf2.scale.set(0.9, 0.7, 0.9);
  scarf2.position.y = -17;
  scarf2.rotation.z = -0.2;
  torso.add(scarf2);

  body.add(torso);
  body.position.y = bodyHeight;

  // HEAD
  const head = new THREE.Group();
  const faceGeom = new THREE.BoxGeometry(30, faceHeight, 30);
  faceGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, faceHeight / 2, 0));
  faceGeom.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI / 4));
  head.add(new THREE.Mesh(faceGeom, grayMat));

  const scarf1 = new THREE.Mesh(new THREE.CylinderGeometry(10, 9, 9, 10, 1), collarMat);
  scarf1.position.y = -2;
  scarf1.rotation.set(0, Math.PI / 3, 0.4);
  head.add(scarf1);

  const cheeksGeom = new THREE.CylinderGeometry(8, 8, 14, 4);
  cheeksGeom.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, 1.4));
  const cheeks = new THREE.Mesh(cheeksGeom, grayMat);
  cheeks.position.set(0, 7, 13);
  head.add(cheeks);

  // Whiskers
  const wGeom = new THREE.BoxGeometry(16, 0.2, 0.2);
  for (let s = -1; s <= 1; s += 2) {
    for (let i = 0; i < 3; i++) {
      const wg = wGeom.clone();
      wg.applyMatrix4(new THREE.Matrix4().makeTranslation(s * -7, 0, 0));
      const w = new THREE.Mesh(wg, whiskerMat);
      w.position.set(s * -6, 8 - i * 2, 18);
      w.rotation.z = s * Math.PI / 12;
      head.add(w);
    }
  }

  // Ears
  function makeEar(sign) {
    const eg = new THREE.CylinderGeometry(0, 8, 8, 3, 1);
    eg.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 4, 0));
    eg.applyMatrix4(new THREE.Matrix4().makeRotationY(sign));
    eg.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, 0.7));
    const ear = new THREE.Mesh(eg, grayMat);
    ear.position.set(sign * -14, faceHeight, -1.7);
    const ig = eg.clone();
    ig.applyMatrix4(new THREE.Matrix4().makeScale(0.5, 0.5, 0.5));
    const inner = new THREE.Mesh(ig, pinkMat);
    inner.position.set(sign * -1, 0.5, 2);
    ear.add(inner);
    return ear;
  }
  const rightEar = makeEar(1);
  const leftEar = makeEar(-1);
  head.add(rightEar);
  head.add(leftEar);

  // Eyes
  const eyeGeom = new THREE.BoxGeometry(12, 12, 1);
  const rightEye = new THREE.Mesh(eyeGeom, whiteMat);
  rightEye.position.set(-12, 20, 10);
  rightEye.rotation.y = -Math.PI / 4;
  const leftEye = rightEye.clone();
  leftEye.position.x = 12;
  leftEye.rotation.y = Math.PI / 4;

  const irisGeom = new THREE.BoxGeometry(4, 4, 2);
  const rightIris = new THREE.Mesh(irisGeom, greenMat);
  rightIris.position.set(2, -2, 0.5);
  const leftIris = new THREE.Mesh(irisGeom, greenMat);
  leftIris.position.set(-2, -2, 0.5);
  rightEye.add(rightIris);
  leftEye.add(leftIris);
  head.add(rightEye);
  head.add(leftEye);

  // Eyelids — same size as eyes, colored as face, positioned just in front
  const lidGeom = new THREE.BoxGeometry(12, 12, 1.5);
  const rightLid = new THREE.Mesh(lidGeom, grayMat);
  rightLid.position.set(-12, 20, 10.5);
  rightLid.rotation.y = -Math.PI / 4;
  rightLid.visible = false;
  const leftLid = rightLid.clone();
  leftLid.position.x = 12;
  leftLid.rotation.y = Math.PI / 4;
  leftLid.visible = false;
  head.add(rightLid);
  head.add(leftLid);

  // Nose
  const noseGeom = new THREE.CylinderGeometry(3, 0, 4, 4);
  noseGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -2, -4));
  const ns = new THREE.Matrix4().set(1,0,0,0, 0,1,0,0, 0,-0.7,1,1.4, 0,0,0,1);
  noseGeom.applyMatrix4(ns);
  const nose = new THREE.Mesh(noseGeom, pinkMat);
  nose.position.set(0, 14.1, 24);
  head.add(nose);

  // Mouth
  const mouthGeom = new THREE.CylinderGeometry(8, 8, 14, 4);
  mouthGeom.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -4, 0));
  mouthGeom.applyMatrix4(new THREE.Matrix4().makeScale(0.5, 0.2, 0.5));
  const mouth = new THREE.Mesh(mouthGeom, grayMat);
  const tongueGeom = mouthGeom.clone();
  tongueGeom.applyMatrix4(new THREE.Matrix4().makeScale(0.8, 1, 0.8));
  mouth.add(new THREE.Mesh(tongueGeom, pinkMat).translateY(0.5));
  mouth.rotation.x = Math.PI / 4;
  mouth.position.set(0, 1.5, 18);
  head.add(mouth);

  // Head stripes
  const sGeom = new THREE.CylinderGeometry(2, 0, 15, 4);
  const hs0 = new THREE.Mesh(sGeom, stripeMat);
  hs0.rotation.y = -Math.PI / 4;
  hs0.position.set(-1.5, 22, 18.5);
  const hs1 = hs0.clone();
  hs1.position.x = 1.5;
  hs1.rotation.y = Math.PI / 4;
  head.add(hs0);
  head.add(hs1);

  const sGeom2 = new THREE.BoxGeometry(8, 2, 10);
  [1, -1].forEach((xSign) => {
    [8, 4].forEach((y) => {
      const s = new THREE.Mesh(sGeom2, stripeMat);
      s.rotation.y = xSign * Math.PI / 4;
      s.position.set(xSign * 15.6, y, -1);
      head.add(s);
    });
  });

  const sGeom3 = new THREE.BoxGeometry(1.6, 1, 10);
  [-2.1, 2.1].forEach((x) => {
    const s = new THREE.Mesh(sGeom3, stripeMat);
    s.position.set(x, 30, 15);
    head.add(s);
  });

  head.position.set(0, bodyHeight - 15, -5);

  // ARMS
  function makeArmGroup() {
    const ag = new THREE.CylinderGeometry(4, 6, armHeight + 5, 4);
    ag.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI / 4));
    ag.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -armHeight / 2, 0));
    const arm = new THREE.Mesh(ag, grayMat);
    const fg = new THREE.CylinderGeometry(6, 7, armHeight, 4);
    fg.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI / 4));
    fg.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -armHeight / 2, 0));
    const foreArm = new THREE.Mesh(fg, grayMat);
    foreArm.position.y = -armHeight;
    arm.add(foreArm);
    const foot = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), whiteMat);
    foot.position.set(0, -armHeight - 5, 0);
    foreArm.add(foot);
    foot.add(new THREE.Mesh(new THREE.BoxGeometry(8, 2, 8), pinkMat).translateY(-4.5));
    return arm;
  }

  const rShoulder = new THREE.Group();
  rShoulder.position.set(-6, armHeight * 2 + handHeight, 0);
  rShoulder.add(makeArmGroup());
  const lShoulder = new THREE.Group();
  lShoulder.position.set(6, armHeight * 2 + handHeight, 0);
  lShoulder.add(makeArmGroup());

  // KNEES
  function makeKnee(xSign) {
    const kg = new THREE.BoxGeometry(8, 30, 30);
    kg.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 15, 0));
    const knee = new THREE.Mesh(kg, grayMat);
    knee.rotation.y = xSign * -Math.PI / 6;
    knee.position.set(xSign * -14, 0, -12);
    knee.add(new THREE.Mesh(new THREE.BoxGeometry(12, 6, 4), whiteMat).translateY(3).translateZ(17));
    const ksG = new THREE.BoxGeometry(8, 2, 10);
    [16, 22, 28].forEach((y) => {
      const s = new THREE.Mesh(ksG, stripeMat);
      s.position.set(0, y, 11);
      knee.add(s);
    });
    return knee;
  }

  // TAIL
  const tailGroup = new THREE.Group();
  tailGroup.position.set(0, 5, -36);
  const tailNSegs = 8;
  const segH = 8;
  const rec = 1.15;
  const tailSegs = [];
  let p = tailGroup;
  let cy = 0;
  for (let i = 0; i < tailNSegs; i++) {
    const s = Math.pow(rec, i);
    const tg = new THREE.CylinderGeometry(5, 4, segH, 4);
    tg.applyMatrix4(new THREE.Matrix4().makeTranslation(0, segH / 2, 0));
    tg.applyMatrix4(new THREE.Matrix4().makeScale(s, s, s));
    const seg = new THREE.Mesh(tg, grayMat);
    seg.position.y = cy;
    seg.rotation.x = i === 0 ? -Math.PI / 2 : 0;
    p.add(seg);
    p = seg;
    cy = (segH - 2) * s;
    tailSegs.push(seg);
  }

  group.add(body);
  group.add(head);
  group.add(rShoulder);
  group.add(lShoulder);
  group.add(makeKnee(1));
  group.add(makeKnee(-1));
  group.add(tailGroup);

  return { group, head, rightEye, leftEye, rightLid, leftLid, mouth, tailSegs, tailNSegs, rightEar, leftEar };
}

function CatModel({ isPurring }) {
  const catRef = useRef(null);
  const containerRef = useRef();
  const mouthTimer = useRef(0);
  const nextMouth = useRef(5 + Math.random() * 5);
  const mouseScreen = useRef({ x: 0.5, y: 0.5 }); // 0-1 normalized
  const smoothLookPos = useRef(new THREE.Vector3(0, 65, 50));
  const headWorldPos = useRef(new THREE.Vector3());

  useEffect(() => {
    const cat = buildCat();
    catRef.current = cat;
    cat.group.scale.set(0.022, 0.022, 0.022);
    cat.group.position.y = -1.6;
    containerRef.current.add(cat.group);
    return () => { containerRef.current?.remove(cat.group); };
  }, []);

  // Track raw mouse position
  useEffect(() => {
    const onMove = (e) => {
      mouseScreen.current.x = e.clientX / window.innerWidth;
      mouseScreen.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Blink — direct scale mutation, no libraries
  useEffect(() => {
    const doBlink = () => {
      const cat = catRef.current;
      if (!cat || !cat.rightEye || !cat.leftEye) return;

      // Close eyes
      cat.rightEye.scale.set(1, 0.05, 1);
      cat.leftEye.scale.set(1, 0.05, 1);

      // Also hide the lids (make them visible as backup)
      if (cat.rightLid) cat.rightLid.visible = true;
      if (cat.leftLid) cat.leftLid.visible = true;

      // Open after 120ms
      setTimeout(() => {
        if (!catRef.current) return;
        cat.rightEye.scale.set(1, 1, 1);
        cat.leftEye.scale.set(1, 1, 1);
        if (cat.rightLid) cat.rightLid.visible = false;
        if (cat.leftLid) cat.leftLid.visible = false;
      }, 120);
    };

    const interval = setInterval(doBlink, 3500);
    const first = setTimeout(doBlink, 800);
    return () => { clearInterval(interval); clearTimeout(first); };
  }, []);

  useFrame((state) => {
    const cat = catRef.current;
    if (!cat) return;
    const t = state.clock.elapsedTime;
    const dt = state.clock.getDelta();

    // ── Head — follow cursor using lookAt in local space ──
    // Get the head's world position
    cat.head.getWorldPosition(headWorldPos.current);

    // Map mouse (0-1) to a target position in the cat's local coordinate space.
    // The cat's local space: head is at roughly (0, 65, -5).
    // We place the target on a sphere around the head so distance is always constant.
    const mx = (mouseScreen.current.x - 0.5) * 2; // -1 to 1
    const my = (mouseScreen.current.y - 0.5) * 2; // -1 to 1

    // Target in local space: always 80 units in front, offset by mouse
    const targetX = mx * 50;
    const targetY = 65 - my * 35; // invert Y: mouse down = cat looks down
    const targetZ = 80; // always in front

    const newLookPos = new THREE.Vector3(targetX, targetY, targetZ);

    // Add gentle idle sway on top
    newLookPos.x += Math.sin(t * 0.3) * 3;
    newLookPos.y += Math.sin(t * 0.25 + 0.5) * 2;

    // Smooth lerp
    smoothLookPos.current.lerp(newLookPos, 0.04);

    // Save current rotation, apply lookAt, then slerp toward it
    const prevQuat = cat.head.quaternion.clone();
    cat.head.lookAt(smoothLookPos.current);
    const targetQuat = cat.head.quaternion.clone();
    cat.head.quaternion.copy(prevQuat);
    cat.head.quaternion.slerp(targetQuat, 0.06);

    // Slight head tilt based on horizontal look
    cat.head.rotation.z += (mx * -0.06 - cat.head.rotation.z) * 0.03;

    // ── Tail (original updateTail) ──
    for (let i = 0; i < cat.tailNSegs; i++) {
      const step = -i * 0.5;
      const amp = Math.PI / (30 / (i + 1));
      cat.tailSegs[i].rotation.z = Math.sin(t * 2 + step) * amp;
    }

    // ── Ear twitches — more frequent and varied ──
    const earTwitchR = Math.sin(t * 6.5) > 0.9;
    const earTwitchL = Math.sin(t * 7.2 + 1.5) > 0.9;
    cat.rightEar.rotation.z += ((earTwitchR ? Math.sin(t * 25) * 0.15 : 0) - cat.rightEar.rotation.z) * 0.15;
    cat.leftEar.rotation.z += ((earTwitchL ? Math.sin(t * 28) * 0.15 : 0) - cat.leftEar.rotation.z) * 0.15;
    // Ears also move slightly with head
    cat.rightEar.rotation.x = cat.head.rotation.x * 0.2;
    cat.leftEar.rotation.x = cat.head.rotation.x * 0.2;

    // ── Mouth — occasional yawn ──
    mouthTimer.current += dt;
    if (mouthTimer.current >= nextMouth.current) {
      mouthTimer.current = 0;
      nextMouth.current = 6 + Math.random() * 8;
      cat.mouth.rotation.x = Math.PI / 6;
      setTimeout(() => {
        if (cat.mouth) cat.mouth.rotation.x = Math.PI / 5.5;
      }, 400);
      setTimeout(() => {
        if (cat.mouth) cat.mouth.rotation.x = Math.PI / 4;
      }, 800);
    }

    // ── Breathing — body scale pulse ──
    const breathe = Math.sin(t * 1.8) * 0.008;
    cat.group.scale.y = 0.022 * (1 + breathe);
    cat.group.scale.x = 0.022 * (1 - breathe * 0.3);

    // ── Body micro-shifts — subtle weight shifts ──
    cat.group.position.z = Math.sin(t * 0.5) * 0.01;

    // ── Purr vibration ──
    if (isPurring) {
      cat.group.position.x = Math.sin(t * 35) * 0.005;
    } else {
      cat.group.position.x *= 0.9;
    }
  });

  return <group ref={containerRef} />;
}

const reactions = [
  { text: "meow!", emoji: "😺" },
  { text: "purrr~", emoji: "😻" },
  { text: "mrrp?", emoji: "🐱" },
  { text: "*kneads*", emoji: "🐾" },
  { text: "prrrr...", emoji: "😽" },
  { text: "*bonk*", emoji: "😸" },
  { text: "zzz...", emoji: "😴" },
];

export default function CatScene() {
  const [bubble, setBubble] = useState(null);
  const [hearts, setHearts] = useState([]);
  const [isPurring, setIsPurring] = useState(false);
  const clickCount = useRef(0);
  const timeout = useRef(null);

  const handlePet = useCallback(() => {
    clickCount.current++;
    const r = reactions[clickCount.current % reactions.length];

    if (clickCount.current % 2 === 0) {
      createPurrSound();
      setIsPurring(true);
    } else {
      createMeowSound();
    }

    setBubble(r);

    // Spawn multiple hearts with random positions
    for (let i = 0; i < 3; i++) {
      const id = Date.now() + Math.random();
      setTimeout(() => {
        setHearts((p) => [...p, { id, x: 25 + Math.random() * 50, delay: i * 0.15 }]);
        setTimeout(() => setHearts((p) => p.filter((h) => h.id !== id)), 1800);
      }, i * 100);
    }

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setBubble(null);
      setIsPurring(false);
      clickCount.current = 0;
    }, 2500);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 3, 5], fov: 45 }}
        style={{ background: "transparent", cursor: "pointer" }}
        onClick={handlePet}
      >
        <AdaptiveDpr pixelated />
        <hemisphereLight args={[0xffffff, 0xffffff, 0.5]} />
        <directionalLight position={[200, 200, 200]} intensity={0.9} />
        <directionalLight position={[-100, 100, 100]} intensity={0.4} />
        <CatModel isPurring={isPurring} />
      </Canvas>
      {/* Speech bubble */}
      {bubble && (
        <div className="pet-bubble">
          <span className="pet-bubble-text">{bubble.text}</span>
        </div>
      )}

      {/* Floating hearts */}
      {hearts.map((h) => (
        <div key={h.id} className="pet-heart" style={{
          left: `${h.x}%`,
          animationDelay: `${h.delay}s`,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
      ))}

      <style>{`
        .pet-bubble {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(18, 18, 26, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(167, 139, 250, 0.2);
          padding: 5px 14px;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 10;
          animation: bubbleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        [data-theme="light"] .pet-bubble {
          background: rgba(255, 255, 255, 0.92);
          border-color: rgba(167, 139, 250, 0.25);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }
        .pet-bubble-text {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #C4B5FD;
          white-space: nowrap;
        }
        [data-theme="light"] .pet-bubble-text {
          color: #7C3AED;
        }
        .pet-heart {
          position: absolute;
          bottom: 45%;
          pointer-events: none;
          opacity: 0;
          animation: heartFloat 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes heartFloat {
          0% { transform: translateY(0) scale(0.4); opacity: 0; }
          20% { opacity: 1; transform: translateY(-12px) scale(1); }
          100% { transform: translateY(-65px) scale(0.6); opacity: 0; }
        }
        @keyframes bubbleIn {
          0% { transform: translateX(-50%) translateY(6px) scale(0.85); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
