<script setup lang="ts">
const selectHex = (event: MouseEvent) => {
  if (!(event.target instanceof SVGPathElement)) return

  const selectedElement = event.target as SVGPathElement
  selectedElement.style.fill = 'red'
}
</script>

<template>
  <div class="hex-board">
    <svg
      width="700px"
      viewBox="0 0 450.71466 409.76471"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:svg="http://www.w3.org/2000/svg"
      @click="selectHex"
    >
      <defs id="defs1">
        <linearGradient id="swatch1">
          <stop style="stop-color: #2b0000; stop-opacity: 1" offset="0" id="stop1" />
        </linearGradient>
      </defs>
      <g id="layer1" transform="translate(-208.02688,-329.31478)">
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2717.3467,-765.79515)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-8"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2985.5804,-886.31779)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2447.5288,-645.91304)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2177.881,-526.65401)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-6"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2478.7128,-938.32305)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-1-1"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,3015.5163,-1179.5798)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-8-2"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2746.9465,-1058.8457)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-7"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2208.8948,-818.44094)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-3"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1939.2471,-699.18191)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-83"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2506.8861,-1232.9455)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-1-5"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,3043.6896,-1474.2024)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-8-6"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2775.1198,-1353.468)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-5"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2237.0682,-1113.0633)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-39"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1967.4203,-993.80434)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-7"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2536.8501,-1526.6524)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-1-9"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,3073.6536,-1767.9092)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-8-5"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2805.0838,-1647.1751)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-72"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2267.0322,-1406.7703)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-1"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1997.3844,-1287.5112)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-64"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2567.4401,-1822.2345)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-8-62"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2835.6738,-1942.7572)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-9"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2297.6222,-1702.3525)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-14"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2027.9743,-1583.0935)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-82"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2326.6697,-1997.3212)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-8-52"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2594.9034,-2117.8439)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-76"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2056.8517,-1877.4391)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-0"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2354.0285,-2292.4546)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-2"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,2086.7172,-2170.1198)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-34"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1814.5897,-2050.8338)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-4"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1701.257,-875.74655)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-3-0"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1462.6231,-1048.2744)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-39-1"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1488.928,-1344.1912)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-1-1"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1518.892,-1637.8981)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-14-5"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1549.482,-1933.4803)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-39-9"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1724.8546,-1167.0281)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-1-6"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1754.8186,-1460.735)"
        />
        <path
          style="
            fill: #2b0000;
            stroke: #737900;
            stroke-width: 1.965;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="hex-board__hex"
          id="path1-0-2-8-14-9"
          d="M 82.181466,114.67181 48.139381,125.47227 21.764864,101.39119 29.432433,66.509649 63.474519,55.709187 89.849035,79.790267 Z"
          transform="rotate(-12.514658,1785.4086,-1756.3172)"
        />
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.hex-board {
  &__hex {
    cursor: pointer;
  }
}
</style>
