<template>
  <q-input
    :filled="filled||true"
    :type="type&& type!=='password'&& type || type==='password' && isPwd && type || 'text'"
    :bottom-slots="true"
    :placeholder="placeholder ||''"
    :label="label||''"
    :input-class="inputClass||`text-subtitle ${success ? `text-${successColor}` : ''}`"
    :debounce="debounce||'500'"
    :color="color||success && successColor ||'cyan-8'"
    :autofocus="autofocus||false"
    v-model="model"
    :rules="prepareRules()"
    :mask="inputMask"
    :dense="dense"
  >
    <template v-if="date || type==='password'" v-slot:append>
      <q-icon
        v-if="!date && type==='password'"
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />

      <q-icon v-if="date && type!=='password'" name="event" class="cursor-pointer">
        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
          <q-date v-model="model" mask="YYYY-MM-DD" @input="() => $refs.qDateProxy.hide()" />
        </q-popup-proxy>
      </q-icon>
    </template>
    <template v-slot:hint>
      <div :class="success ? `text-${successColor}` : ''">{{ success ? successText : hint }}</div>
    </template>
  </q-input>
</template>

<script lang="ts">
import { Mixins, Component, Prop } from 'vue-property-decorator';
import { ImpressiInputOptions } from 'src/interfaces';
import { InputsMixin, InputSuccessMixin } from 'src/mixins';

@Component
export default class ImpressiInput
  extends Mixins(InputsMixin, InputSuccessMixin)
  implements ImpressiInputOptions {
  @Prop() toggle?: boolean;
  show = true;
  isPwd = true;

  get inputMask() {
    if (this.store?.endsWith('national_id') || this.store?.endsWith('username'))
      return '##-######XX##';
    return (
      (this.date && '') ||
      (this.mask === 'nationalId' && '##-######XX##') ||
      this.mask ||
      ''
    );
  }
}
</script>
