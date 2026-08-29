import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

function Bot3D({ height = 380 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    let width = mount.clientWidth;
    let heightLocal = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / heightLocal, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, heightLocal);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ---------- Lighting ----------
    scene.add(new THREE.AmbientLight(0x8a5bd6, 0.7));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const purpleLight = new THREE.PointLight(0xc770f0, 1.4, 30);
    purpleLight.position.set(-3, 1, 4);
    scene.add(purpleLight);

    const rimLight = new THREE.PointLight(0x6d20c5, 1.0, 30);
    rimLight.position.set(0, -2, -3);
    scene.add(rimLight);

    // ---------- Bot group ----------
    const bot = new THREE.Group();
    scene.add(bot);

    // Head
    const headGeo = new RoundedBoxGeometry(2.2, 2.0, 1.8, 6, 0.45);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x2a1f42,
      metalness: 0.5,
      roughness: 0.35,
      emissive: 0x1a0f2e,
      emissiveIntensity: 0.6,
    });
    const head = new THREE.Mesh(headGeo, headMat);
    bot.add(head);

    // Glowing front face screen
    const faceGeo = new RoundedBoxGeometry(1.7, 1.5, 0.25, 5, 0.35);
    const faceMat = new THREE.MeshStandardMaterial({
      color: 0x140a24,
      metalness: 0.2,
      roughness: 0.6,
      emissive: 0x3a1f5c,
      emissiveIntensity: 0.5,
    });
    const face = new THREE.Mesh(faceGeo, faceMat);
    face.position.z = 0.82;
    bot.add(face);

    // Eyes
    const eyeGroup = new THREE.Group();
    bot.add(eyeGroup);

    const makeEye = (x) => {
      const eye = new THREE.Group();
      eye.position.set(x, 0.25, 1.05);

      const whiteGeo = new THREE.SphereGeometry(0.32, 32, 32);
      const whiteMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.25,
        metalness: 0.1,
      });
      const white = new THREE.Mesh(whiteGeo, whiteMat);
      eye.add(white);

      const pupilGeo = new THREE.SphereGeometry(0.16, 32, 32);
      const pupilMat = new THREE.MeshStandardMaterial({
        color: 0x1a0f2e,
        emissive: 0xc770f0,
        emissiveIntensity: 0.9,
        roughness: 0.3,
      });
      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.z = 0.22;
      eye.add(pupil);

      const shineGeo = new THREE.SphereGeometry(0.05, 16, 16);
      const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const shine = new THREE.Mesh(shineGeo, shineMat);
      shine.position.set(-0.05, 0.07, 0.34);
      eye.add(shine);

      eyeGroup.add(eye);
      return { eye, pupil };
    };

    const leftEye = makeEye(-0.45);
    const rightEye = makeEye(0.45);

    // Cheeks
    const cheekGeo = new THREE.CircleGeometry(0.16, 24);
    const cheekMat = new THREE.MeshBasicMaterial({ color: 0xe07ad6, transparent: true, opacity: 0.55 });
    const leftCheek = new THREE.Mesh(cheekGeo, cheekMat);
    leftCheek.position.set(-0.7, -0.25, 1.05);
    const rightCheek = new THREE.Mesh(cheekGeo, cheekMat);
    rightCheek.position.set(0.7, -0.25, 1.05);
    bot.add(leftCheek, rightCheek);

    // Smile
    const smileGeo = new THREE.TorusGeometry(0.4, 0.07, 16, 48, Math.PI);
    const smileMat = new THREE.MeshStandardMaterial({
      color: 0xc770f0,
      emissive: 0xc770f0,
      emissiveIntensity: 0.8,
      roughness: 0.3,
    });
    const smile = new THREE.Mesh(smileGeo, smileMat);
    smile.position.set(0, -0.35, 1.0);
    smile.rotation.z = Math.PI;
    bot.add(smile);

    // Antenna
    const antenna = new THREE.Group();
    const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.5, 12);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x9b7ad0, metalness: 0.6, roughness: 0.3 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 1.3;
    antenna.add(stem);

    const bulbGeo = new THREE.SphereGeometry(0.13, 24, 24);
    const bulbMat = new THREE.MeshStandardMaterial({
      color: 0xc770f0,
      emissive: 0xc770f0,
      emissiveIntensity: 1.3,
      roughness: 0.2,
    });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.y = 1.62;
    antenna.add(bulb);
    bot.add(antenna);

    // ---------- Interaction ----------
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      target.x = THREE.MathUtils.clamp(nx, -1, 1);
      target.y = THREE.MathUtils.clamp(ny, -1, 1);
    };
    const onTouchMove = (e) => {
      if (e.touches.length > 0) onMouseMove(e.touches[0]);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    // ---------- Animation ----------
    let raf;
    const clock = new THREE.Clock();
    let blinkTimer = 3.5;
    let blinking = false;
    let blinkProgress = 0;

    const animate = () => {
      const t = clock.getElapsedTime();
      raf = requestAnimationFrame(animate);

      // smooth mouse follow
      mouse.x += (target.x - mouse.x) * 0.1;
      mouse.y += (target.y - mouse.y) * 0.1;

      // pupil movement (clamped inside eye)
      const px = THREE.MathUtils.clamp(mouse.x * 0.1, -0.1, 0.1);
      const py = THREE.MathUtils.clamp(mouse.y * 0.08, -0.08, 0.08);
      leftEye.pupil.position.set(px, py, 0.22);
      rightEye.pupil.position.set(px, py, 0.22);

      // head lean toward cursor (limited so it never flips)
      const targetRotY = THREE.MathUtils.clamp(mouse.x * 0.22, -0.22, 0.22);
      const targetRotX = THREE.MathUtils.clamp(-mouse.y * 0.14, -0.14, 0.14);
      bot.rotation.y = THREE.MathUtils.lerp(bot.rotation.y, targetRotY, 0.06);
      bot.rotation.x = THREE.MathUtils.lerp(bot.rotation.x, targetRotX, 0.06);

      // idle float
      bot.position.y = Math.sin(t * 1.4) * 0.06;
      antenna.rotation.z = Math.sin(t * 2.0) * 0.12;

      // blink
      blinkTimer -= 0.016;
      if (!blinking && blinkTimer <= 0) {
        blinking = true;
        blinkProgress = 0;
      }
      if (blinking) {
        blinkProgress += 0.08;
        const s = Math.abs(Math.cos(blinkProgress * Math.PI));
        const scaleY = 0.1 + s * 0.9;
        leftEye.eye.scale.y = scaleY;
        rightEye.eye.scale.y = scaleY;
        if (blinkProgress >= 1) {
          blinking = false;
          blinkTimer = 2.5 + Math.random() * 3;
          leftEye.eye.scale.y = 1;
          rightEye.eye.scale.y = 1;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // ---------- Resize ----------
    const handleResize = () => {
      width = mount.clientWidth;
      heightLocal = mount.clientHeight;
      camera.aspect = width / heightLocal;
      camera.updateProjectionMatrix();
      renderer.setSize(width, heightLocal);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      resizeObserver.disconnect();
      renderer.dispose();
      headGeo.dispose();
      faceGeo.dispose();
      bulbGeo.dispose();
      stemGeo.dispose();
      smileGeo.dispose();
      cheekGeo.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="bot3d-canvas"
      style={{ width: "100%", height: height, cursor: "pointer" }}
    />
  );
}

export default Bot3D;
