import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../../media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
     <video class="w-full" controls>
  <source src="/docs/videos/flowbite.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
    </div>
  );
});
