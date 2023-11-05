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
import { ref, computed, onMounted } from 'vue'

/**
 * A simple Steps/Progress UI using Array to store states. and using Hash object to store visited history.
 * @displayName StepsUI
 */
export default {
  name: "StepsUI",
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

  setup(props: any, context: any) {
    const l_progress = ref<any[]>([])
    const visited_lookup = ref({}) as any
    const currentStep = computed(() => {
      return l_progress.value.findIndex(p => p.active)
    })

    onMounted(() => {
      l_progress.value = props.progress
      // set active property
      l_progress.value.forEach((v: any, indexV: any) => {
        if (indexV === 0) {
          v.active = true
        } else {
          v.active = false
        }
      })
      highlightSteps()
    })

    const highlightSteps = () => {
      /*
        Problem: Find the first true active value in progress array
        and set previous array highlight values to true
        this will avoid manually setting highlight property value
      */
      const findActive = l_progress.value.findIndex((a: any) => a.active === true)
      l_progress.value = l_progress.value.map((p: any, pIndex: any) => {
        if (pIndex <= findActive) visited_lookup.value[pIndex] = true
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
      context.emit('currentStep', currentStep.value)
    }

    /**
     * Shows content of a step.
     * 
     * @param {string} stepLabel same value defined in progress prop.
     * @property {boolean} active returns true if stepLabel matches current step.
     */
    const showStep = (stepLabel: string) => {
      const findActive = l_progress.value.find((p: any) => p.label === stepLabel) as any
      return findActive.active
    }

    /**
     * Go to a step
     * 
     * @param {number} 1
     * @public
     */
    const gotoStep = (newActiveStep: number) => {
      l_progress.value[currentStep.value].active = false
      l_progress.value[newActiveStep].active = true

      highlightSteps()

      /*
      const cleanOutput = this.l_progress.map(v => {
        return { label: v.label, active: v.active }
      })
      this.$emit('update', cleanOutput)
      */
    }

    /**
     * Go to previous step.
     * 
     * @public
     */
    const gotoPrev = () => {
      gotoStep(currentStep.value - 1)
    }

    /**
     * Go to next step.
     * 
     * @public
     */
    const gotoNext = () => {
      gotoStep(currentStep.value + 1)
    }

    return {
      l_progress,
      visited_lookup,
      currentStep,
      showStep,
      gotoStep,
      gotoPrev,
      gotoNext,
    }
  }
}
</script>

<style scope>
@import "../../assets/tailwind.css";

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


<docs lang="md">
  ##### Basic usage
  ```js
  // vue3 implementation
  // import { ref } from "vue"
  const steps_tref = ref<InstanceType<typeof Steps>>()
  const progress = [
    { label: "Step1" },
    { label: "Step2" },
    { label: "Step3" }
  ]
  <StepsUI
    ref="steps_tref"
    :progress="progress"
  />

  <div v-show="steps_tref?.showStep('Step1')">
    content for step1
  </div>
  <div v-show="steps_tref?.showStep('Step2')">
    content for step2
  </div>
  <div v-show="steps_tref?.showStep('Step3')">
    content for step3
  </div>
  ```

  ##### Show current step
  ```js
  
  ```
</docs>
