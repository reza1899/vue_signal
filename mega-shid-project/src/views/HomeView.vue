<template>
  <div class="home">
    <Header />
      <div class="container">
          <h2>
              تاریخچه  <i class="	fas fa-calendar-check"></i>
          </h2>
        <p>
            شرکت مگاشید در سال ۱۳۹۵ با هدف طراحی و تولید محصولات الکترونیکی و سیستم های اتوماسیون صنعتی تاسیس گردید. هسته اصلی شرکت را ترکیبی از زبده‌ترین پژوهشگران و کارشناسان مهندسی برق و کامپیوتر با سال ها تجربه حرفه  ای تشکیل داده است.
            در حال حاضر، دامنه فعالیت مگاشید از طرح های پژوهشی و طراحی مدارهای الکترونیکی تا تولید و اجرای سامانه های هوشمند کنترلی و هوشمندسازی صنایع گسترش یافته است.
        </p>
          <h2>
              مدیریت<i class="	fas fa-user-tie mx-2"></i>
          </h2>
          <p>
              احترام به حقوق مشتریان، برخورد صادقانه و افزایش رضایتمندی آنان، سرلوحه فعالیت‌های مگاشید قرار گرفته است. ارائه محصولات و خدمات در حوزه الکترونیک و هوشمندسازی صنایع با استفاده از آخرین دستاوردهای علمی و فنی، انجام پروژه های صنعتی و نظامی و رفع طیف وسیعی از نیازمندی های داخلی به منظور کمک به استقلال و سربلندی کشور، از فعالیت های مهم مگاشید به شمار می رود.
          </p>
          <h2>
              چشم انداز <i class="	fas fa-chart-line mx-2"></i>
          </h2>
          <p>
              شرکت مگاشید با توجه به پتانسیل مطلوب و تکیه به توانمندی‌های قابل قبول خود، افقی روشن را رودروی خود ترسیم نموده و در این راستا چشم‌انداز خود را تا سال ۱۴۰۰ چنین تعیین کرده است:

              «دستیابی به سطحی از کیفیت، که راهکارهای ارائه شده مگاشید در هوشمندسازی صنایع، در سطح منطقه مطرح باشد.»
          </p>
      </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/index.vue";
import Footer from "@/components/footer/index.vue";
export default {
  name: 'HomeView',
  components: {
      Header,
      Footer
  }
}
</script>
<style scoped>
.container {
    max-width: 700px;
    margin: 0 auto;
}

p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 20px;
}

h2 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: bold;
}

.footer {
    margin-top: 60px;
    text-align: center;
}
</style>
