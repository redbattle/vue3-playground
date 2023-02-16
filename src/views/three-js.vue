<template>
  <div>
    <div id="canvas"></div>
  </div>
</template>
<script>
import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(
  45,
  innerWidth / innerHeight,
  0.1,
  100
)
camera.position.z = 5
camera.position.set(10, 10, 10);
camera.lookAt(1, 1, 1);

// 创建渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器大小
renderer.setSize(innerWidth, innerHeight)
// 将渲染器插入到html中
document.body.appendChild(renderer.domElement)

// 创建物体
const box = new THREE.BoxGeometry(1, 1, 1)
const mesh = new THREE.MeshLambertMaterial({
  color: 0x89ddff,
  transparent: true, //开启透明
  opacity: 0.8, //设置透明度
})
const cube = new THREE.Mesh(box, mesh)
scene.add(cube)

// 坐标系
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// 光照
const light = new THREE.PointLight(0xffff00, 1.0);
light.position.set(100, 100, 100);
scene.add(light); //点光源添加到场景中

export default {
  created() {
    this.animate()
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    },
  },
}
</script>

<style lang="less" scoped></style>
