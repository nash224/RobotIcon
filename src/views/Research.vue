<template>
  <main class="research-page">
    <div class="contents">
      <div class="title">
        <h2>Reseach</h2>
      </div>
      <div class="section-research">
        <ul class="research-list">

          <li>
            <div class="research-pic">
              <img src="../assets/hamberger2.png" alt="pic">
            </div>
            <dl>
              <dt>
                Fake Shack 버거
              </dt>
              <dd>
                <span>
                  쉐이크쉑의 시그니처 앵거스 비프 패티와 쫄깃한 식감의 토종효모 
                  포테이토 번, 토마토, 양상추에 쉑소스를 올려 만든 심플하면서도 
                  맛있는 쉑버거와 그 외 다양한 버거 메뉴가 있습니다.
                  채식을 사랑한
                </span>
                <span class="research-text">
                  다면 치즈로 속을 채워 바삭하게 튀겨낸 포토벨로 버섯 패티가 들어간 슈룸 버거도 만나보세요.
                </span>

              </dd>
            </dl>
          </li>

          <li>
            <div class="research-pic">
              <img src="../assets/hamberger2.png" alt="pic">
            </div>
            <dl>
              <dt>
                Fake Shack 버거
              </dt>
              <dd>
                <span>
                  쉐이크쉑의 시그니처 앵거스 비프 패티와 쫄깃한 식감의 토종효모 
                  포테이토 번, 토마토, 양상추에 쉑소스를 올려 만든 심플하면서도 
                  맛있는 쉑버거와 그 외 다양한 버거 메뉴가 있습니다.
                  채식을 사랑한
                </span>
                <span class="research-text">
                  다면 치즈로 속을 채워 바삭하게 튀겨낸 포토벨로 버섯 패티가 들어간 슈룸 버거도 만나보세요.
                </span>

              </dd>
            </dl>
          </li>
          
          <li>
            <div class="research-pic">
              <img src="../assets/hamberger2.png" alt="pic">
            </div>
            <dl>
              <dt>
                Fake Shack 버거
              </dt>
              <dd>
                <span>
                  쉐이크쉑의 시그니처 앵거스 비프 패티와 쫄깃한 식감의 토종효모 
                  포테이토 번, 토마토, 양상추에 쉑소스를 올려 만든 심플하면서도 
                  맛있는 쉑버거와 그 외 다양한 버거 메뉴가 있습니다.
                  채식을 사랑한
                </span>
                <span class="research-text">
                  다면 치즈로 속을 채워 바삭하게 튀겨낸 포토벨로 버섯 패티가 들어간 슈룸 버거도 만나보세요.
                </span>

              </dd>
            </dl>
          </li>

          <li>
            <div class="research-pic">
              <img src="../assets/hamberger2.png" alt="pic">
            </div>
            <dl>
              <dt>
                Fake Shack 버거
              </dt>
              <dd>
                <span>
                  쉐이크쉑의 시그니처 앵거스 비프 패티와 쫄깃한 식감의 토종효모 
                  포테이토 번, 토마토, 양상추에 쉑소스를 올려 만든 심플하면서도 
                  맛있는 쉑버거와 그 외 다양한 버거 메뉴가 있습니다.
                  채식을 사랑한
                </span>
                <span class="research-text">
                  다면 치즈로 속을 채워 바삭하게 튀겨낸 포토벨로 버섯 패티가 들어간 슈룸 버거도 만나보세요.
                </span>

              </dd>
            </dl>
          </li>

        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.research-page{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  
  .section-research{
    display: block;
    width: 100%;
    .research-list{
      width: 1050px;

      .research-pic{
        width: 300px;
      }

      li{
        width: 319px;
        overflow: hidden;
        float: left;
        padding: 0 30px 60px 0;
        margin-right: 10px;

        img{
          width: 300px;
          height: 181px;
        }
      }

      dl{
        overflow: hidden;
        width: 300px;
        min-height: 130px;
        padding-bottom: 20px;
      }

      dt{
        height: 24px;
        padding: 7px 0 5px;
        font-size: 18px;
        font-weight: bold;
        color: var(--dark-gray);
        letter-spacing: -1px;
        margin-bottom: 15px;
      }

      dd{
        height: 30px;
        font-size: 13px;
        margin-bottom: 30px;
      }
      .research-text{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 280px;
      }
    }
  }
}
</style>