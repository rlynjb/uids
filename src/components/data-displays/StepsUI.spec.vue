<template>
  <div class="steps-component grid grid-cols-12 justify-between">
    <!--
    <button
      class="col-span-1 btn rounded-none"
      :disabled="(currentStep === 0)"
      @click="gotoPrev"
    >
      prev
    </button>
    -->

    <ul class="steps col-span-12">
      <li
        v-for="(progressObj, progressIndex) in (l_progress as any[])"
        :key="'sp-'+progressIndex"
        class="step"
        :class="(progressObj.highlight ? 'step-primary' : '') + ' ' + (visited_lookup[progressIndex] ? 'visited' : '')"
      >
        <span
          v-if="progressObj.highlight || visited_lookup[progressIndex]"
          @click="gotoStep(progressIndex)"
        >
          {{ progressObj.label }}
        </span>
        <span v-else>{{ progressObj.label }}</span>
      </li>
    </ul>

    <!--
    <button
      class="col-span-1 btn rounded-none"
      :disabled="(currentStep === l_progress.length - 1)"
      @click="gotoNext"
    >
      next
    </button>
    -->
  </div>
</template>

<script lang="ts">
/**
 * A simple Steps/Progress UI using Array to store states. and using Hash object to store visited history.
 * @displayName StepsUI
 */
export default {
  name: "Steps",
  props: {
    /**
     * A list of step label.
     * @value ['Sample Step 1 Name', 'Sample Step 2 Name']
     */
    progress: {
      type: Array,
      default: () => [{ label: 'Step1' }, { label: 'Step2' }],
    },
  },

  data() {
    return {
      l_progress: [] as any[],
      visited_lookup: {} as any,
    }
  },

  computed: {
    currentStep() {
      return this.l_progress.findIndex(p => p.active) as any
    },
  },

  mounted() {
    this.l_progress = this.progress
    // set active property
    this.l_progress.forEach((v: any, indexV: any) => {
      if (indexV === 0) {
        v.active = true
      } else {
        v.active = false
      }
    })
    this.highlightSteps()
  },

  methods: {
    /**
     * Go to previous step.
     * 
     * @public
     */
    gotoPrev() {
      this.gotoStep(this.currentStep - 1)
    },
    /**
     * Go to next step.
     * 
     * @public
     */
    gotoNext() {
      this.gotoStep(this.currentStep + 1)
    },
    /**
     * Go to a step
     * 
     * @param {number} 1
     * @public
     */
    gotoStep(newActiveStep: number) {
      this.l_progress[this.currentStep].active = false
      this.l_progress[newActiveStep].active = true

      this.highlightSteps()

      /*
      const cleanOutput = this.l_progress.map(v => {
        return { label: v.label, active: v.active }
      })
      this.$emit('update', cleanOutput)
      */
    },
    /**
     * Shows content of a step.
     * 
     * @param {string} stepLabel same value defined in progress prop.
     * @property {boolean} active returns true if stepLabel matches current step.
     */
    showStep(stepLabel: string) {
      const findActive = this.l_progress.find((p: any) => p.label === stepLabel) as any
      return findActive.active
    },

    highlightSteps() {
      /*
        Problem: Find the first true active value in progress array
        and set previous array highlight values to true
        this will avoid manually setting highlight property value
      */
      const findActive = this.l_progress.findIndex((a: any) => a.active === true)
      this.l_progress = this.l_progress.map((p: any, pIndex) => {
        if (pIndex <= findActive) this.visited_lookup[pIndex] = true
        return {
          ...p,
          highlight: pIndex <= findActive ? true : false
        }
      })

      /**
       * Triggers when currentStep changes.
       * 
       * @property {number} currentStep returns index of current step label.
       */
      this.$emit('currentStep', this.currentStep)
    },
  },
}
</script>

<style>
.steps .step-primary span {
  cursor: pointer;
}
.steps .step.visited::before,
.steps .step.visited::after {
  background-color: #fdb2b6;
  color: #fff;
  cursor: pointer;
}
.steps .step.step-primary.visited::before,
.steps .step.step-primary.visited::after {
  background-color: #d31820;
  cursor: pointer;
}
</style>
