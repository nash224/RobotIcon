<template>
  <main class="contact-page">
    <div class="contents">
      <div class="title">
        <h2>Contact us</h2>
      </div>
      <div class="section-contact">
        <div class="contact-text-section">
          <dl>
            <dt>Address</dt>
            <dd class="address-text">
              경상북도 경산시 하양읍 가마실길 50 경일대학교 9호관 406호 RobotIcon
            </dd>
            <dd>RobotIcon Lab, Gyeongil University ,50 Gamasil-gil, Gyeongsan-si, Gyeongsangbuk-do, Republic of Korea</dd>
            <dt>Tel.</dt>
            <dd>82+ 425-6666</dd>
            <dt>E-mail</dt>
            <dd>egemoya@gmail.com</dd>
          </dl>
        </div>
        <div class="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1921.4869164256227!2d128.80021594419065!3d35.90920877531822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566728b71432795%3A0xdef13d2dcd040f86!2z6rK97IKw7IucIO2VmOyWkeydjSDqsr3snbzrjIDtlZnqtZAg7KCcNOqzte2Vmeq0gA!5e0!3m2!1sko!2skr!4v1654433625873!5m2!1sko!2skr" width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </main>
</template>



<style lang="scss" scoped>
.contact-page{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .section-contact{
    width: 100%;

    .contact-text-section{
      margin-bottom: 50px;

      .address-text{
        position: relative;
        width: 100%;
      }

      dl{
        overflow: hidden;
        width: 100%;
      }
      
      dt{
        height: 25px;
        font-size: 20px;
        font-weight: bold;
        color: var(--dark-alt);
        letter-spacing: 1px;
        margin-top: 25px;
        margin-bottom: 11px;
      }
      dd{
        font-size: 16px;
      }
    }
    
    .contact-map{
      width: 602px;
      height: 453px;
      border: 1px solid var(--dark-alt);

    }
  }
}
</style>