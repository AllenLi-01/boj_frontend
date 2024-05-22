<template>
  <div class="index">
    <div class="navbar-area">
      <div class="techfast-responsive-nav index-navber-responsive">
        <div class="container">
          <div class="techfast-responsive-menu"></div>
        </div>
      </div>
    </div>
    <!-- End Navbar Section -->

    <!-- Start Home Section -->
    <div class="home-area">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12">
                <div class="main-banner-content">
                  <!--								<h5>VULNX & 一款跨架构的软件漏洞检测平台</h5>-->
                  <h1>
                    <span class="color-text"
                      >VulnX: 二进制文件智能分析平台</span
                    >
                  </h1>
                  <p style="text-align: center; color: gray">
                    深度学习赋能二进制文件静态分析
                  </p>
                  <br />
                  <a-row
                    class="grid-demo"
                    style="
                      marginbottom: 16px;
                      backgroundcolor: var(--color-fill-2);
                    "
                  >
                    <a-col :span="6" :offset="10">
                      <a-button
                        type="primary"
                        shape="round"
                        size="large"
                        @click="handleMain"
                        >立即开始
                      </a-button>
                    </a-col>
                  </a-row>
                  <div></div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="home-banner-image">
                  <img src="@/static/picture/home-font.png" alt="Home Images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Home Section -->

    <!-- Start Services Section -->
    <section class="services-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h6 class="sub-title">What We Provide</h6>
              <h2>VULNX 的优势</h2>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services-item">
              <div class="services-icon">
                <i class="flaticon-development"></i>
              </div>
              <h3>精准的软件漏洞分析能力</h3>
              <p>
                采用自主研发的深度学习模型，识别准确率高，误报率少，帮助用户快速分析可疑软件的代码漏洞情况。
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services-item">
              <div class="services-icon">
                <i class="flaticon-thumbs-up"></i>
              </div>
              <h3>良好的兼容性</h3>
              <p>
                支持常见的可执行文件、安装包、动态链接库等的文件格式，支持包括X86、arm等架构和各种编译优化编译后的二进制文件
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services-item">
              <div class="services-icon">
                <i class="flaticon-analytics"></i>
              </div>
              <h3>函数粒度的检索能力</h3>
              <p>
                提供高精度的函数相似性检索功能，展示二进制代码/源代码端到端匹配结果，帮助安全研究人员获得更精确的漏洞定位
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const handleMain = async () => {
  try {
    await router.push("/detect");
  } catch (error) {
    // 检查是否是网络错误
    if (error.isAxiosError && !error.response) {
      Message.error("网络连接错误！");
    } else {
      Message.error("发生了意料之外的错误。请稍后再尝试。");
    }
  }
};
</script>
<style>
@import "@/static/css/css2.css";
@import "@/static/css/bootstrap.min.css";
@import "@/static/css/animate.min.css";
@import "@/static/css/flaticon.css";
@import "@/static/css/bootstrap-icons.css";
@import "@/static/css/fontawesome.min.css";
@import "@/static/css/meanmenu.css";
@import "@/static/css/swiper.min.css";
@import "@/static/css/vegas.min.css";
@import "@/static/css/owl.carousel.min.css";
@import "@/static/css/style.css";
@import "@/static/css/responsive.css";
</style>
