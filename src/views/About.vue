<template>
  <main class="introduce-page">
    <div class="contents">
      <div class="title">
        <h2>Introduce</h2>
      </div>
      <div class="section-introduce">
        <div class="introduce-wrap">
          <div class="introduce-text">
            <dl>
              <dt>모든 게 잘 되었다면, 내가 할 일이 없어진다</dt>
              <dd>앞서의 주인공이었던 베일리 형사는 죽고 남은 두 로봇인 R.
                다닐 올리브와 지스카드, 그리고 그 소유자인 우주인 글라디아의 
                이야기이다. 솔라리스 행성에서 나오는 전파가 사라지는 사건이 
                일어나고 그것을 조사하기 위해 글라디아와 두 로봇이 지구인들과 
                함께 가며 여러가지 모험을 겪게된다. 또한 글라디아의 아들은 
                자신의 출세를 위해 지구를 위험에 빠트리기 위한 음모를 꾸미게 
                된다. 이후 제국을 이루는 지구인들의 이야기의 시작이다.</dd>
            </dl>
          </div>
          <div class="introduce-pic">
            <img src="../assets/134.jpg" alt="pic">
          </div>
        </div>
      </div>
      <div class="section-history">
        <h2>History</h2>
          <div class="history-wrap">
            <!-- <img src="" alt="history"> -->
          </div>
      </div>
    </div>
  </main>
</template>


<style lang="scss" scoped>
.introduce-page{
  position: relative;
  width: 100%;
  height: 100%;

  .section-introduce{
    padding-bottom: 20px;
    
    .introduce-wrap{
      overflow: hidden;
      width: 100%;
      padding-top: 30px;
      margin-bottom: 50px;

      .introduce-text{
        float: left;
        overflow: hidden;
        width: 500px;
        margin-right: 70px;

      }

      .introduce-pic{
        padding-top: 20px;
        width: 100%;
        
        img{
          width: 300px;
          border-radius: 100%;
        }
      }

      dl{
        overflow: hidden;
        width: 100%;
        padding-bottom: 30px;
      }

      dt{
        height: 30px;
        font-size: 25px;
        font-weight: bold;
        color: #7e9de6;
        margin-bottom: 30px;
      }

      dd{
        font-size: 17px;
        line-height: 38px;
        color: #444444;
      }
    }
  }

  .section-history{
    overflow: hidden;
    width: 100%;
  }
}
</style>