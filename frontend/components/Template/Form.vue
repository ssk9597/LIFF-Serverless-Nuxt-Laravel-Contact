<template>
  <ValidationObserver v-slot="{ invalid }">
    <div class="form">
      <div class="form-name">
        <div class="form-name-wrapper">
          <!-- 姓 -->
          <FormLabel :title="'姓'" />
          <FormInput
            :rules="'required|max:10'"
            :type="'text'"
            :placeholder="'姓'"
            :value="firstName"
            @input="firstName = $event"
          />
        </div>
        <div class="form-name-wrapper">
          <!-- 名 -->
          <FormLabel :title="'名'" />
          <FormInput
            :rules="'required|max:10'"
            :type="'text'"
            :placeholder="'名'"
            :value="lastName"
            @input="lastName = $event"
          />
        </div>
      </div>
      <!-- メールアドレス -->
      <FormLabel :title="'メールアドレス'" />
      <FormInput
        :rules="'required|email'"
        :type="'email'"
        :placeholder="'メールアドレス'"
        :value="email"
        @input="email = $event"
      />
      <!-- お問い合わせ内容 -->
      <FormLabel :title="'お問い合わせ内容'" :option="'任意'" />
      <FormTextArea :placeholder="'お問い合わせ内容'" :value="contact" @input="contact = $event" />
      <!-- 送信ボタン -->
      <FormButton :click="submit" @submit="submit" :invalid="invalid" />
    </div>
  </ValidationObserver>
</template>

<script>
import FormInput from '@/components/Atoms/FormInput.vue';
import FormLabel from '@/components/Atoms/FormLabel.vue';
import FormTextArea from '@/components/Atoms/FormTextArea.vue';
import FormButton from '@/components/Atoms/FormButton.vue';

export default {
  components: {
    FormInput,
    FormLabel,
    FormTextArea,
    FormButton,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
    };
  },
  methods: {
    async submit() {
      try {
        if (!liff.isInClient()) {
          console.log('外部ブラウザまたはLINE内ブラウザで動作させている');
          // APIを叩く
          await this.$axios.$post('/contacts', {
            name: `${this.firstName} ${this.lastName}`,
            email: this.email,
            contact: this.contact,
          });
          return redirect('/');
        } else {
          console.log('LIFFブラウザで動作させている');
          // APIを叩く
          await this.$axios.$post('/contacts', {
            name: `${this.firstName} ${this.lastName}`,
            email: this.email,
            contact: this.contact,
          });
          // メッセージを送る
          await liff.sendMessages([
            {
              type: 'text',
              text: `お問い合わせありがとうございます。\n\n---お問い合わせ内容---\n姓：${this.firstName}\n名：${this.lastName}\nメールアドレス：${this.email}\n内容：${this.contact}`,
            },
          ]);
          // アプリを閉じる
          await liff.closeWindow();
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  &-name {
    display: flex;
    justify-content: space-between;

    &-wrapper {
      width: calc(50% - 10px);
    }
  }
}
</style>
