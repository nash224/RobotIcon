<template>
  <main class="members-page">
    <div class="contents">
      <div class="title">
        <h2>Researchers</h2>
      </div>
      <div class="section-members">
        <ul class="members-list">
          <h3>Director</h3>

          <li>
            <div class="port-profile">
              <img src="https://ae.kiu.ac.kr/major_mem/mem_img/1102950.jpg?1631382816" alt="sejun's picture">
            </div>
            <div class="prf-wrap">
              <span class="member-name">
                장세준
              </span>
              <span class="member-name-english">
                Sejun Jang
              </span>
              <dl>
                <dd class="member-job">
                  <span class="bas-text">
                    경일대학교 건축공학과 조교수
                  </span>
                </dd>
                <dd class="member-job-english">
                  <span class="bas-text">
                    Kyungil University, Department of Architectural Engineering, Assistant Professor
                  </span>
                </dd>
                <a href="">
                  jang@kiu.kr
                </a>
              </dl>
            </div>
          </li>

          <li>
            <div class="port-profile">
              <img src="https://ae.kiu.ac.kr/major_mem/mem_img/1102950.jpg?1631382816" alt="sejun's picture">
            </div>
            <div class="prf-wrap">
              <span class="member-name">
                장세준
              </span>
              <span class="member-name-english">
                Sejun Jang
              </span>
              <dl>
                <dd class="member-job">
                  <span class="bas-text">
                    경일대학교 건축공학과 조교수
                  </span>
                </dd>
                <dd class="member-job-english">
                  <span class="bas-text">
                    Kyungil University, Department of Architectural Engineering, Assistant Professor
                  </span>
                </dd>
                <a href="">
                  jang@kiu.kr
                </a>
              </dl>
            </div>
          </li>

          <h3>Current</h3>

          <li class="current-member">
            <div class="port-profile">
              <img src="../assets/kimidphoto.png" alt="picture">
            </div>
            <div class="prf-wrap">
              <span class="member-name">
                김태훈
              </span>
              <span class="member-name-english">
                Taehoon Kim
              </span>
              <dl>
                <dd class="member-job">
                  <span class="bas-text">
                    RobotIcon 연구실 학부생
                  </span>
                </dd>
                <dd class="member-job-english">
                  <span class="bas-text">
                     Undergraduate Student
                  </span>
                </dd>
                <a href="">
                  hyri0510@gmail.com
                </a>
              </dl>
            </div>
            <div class="none-box"></div>
            <div class="port-profile">
              <img src="../assets/kimidphoto.png" alt="picture">
            </div>
            <div class="prf-wrap">
              <span class="member-name">
                김태훈
              </span>
              <span class="member-name-english">
                Taehoon Kim
              </span>
              <dl>
                <dd class="member-job">
                  <span class="bas-text">
                    RobotIcon 연구실 학부생
                  </span>
                </dd>
                <dd class="member-job-english">
                  <span class="bas-text">
                     Undergraduate Student
                  </span>
                </dd>
                <a href="">
                  hyri0510@gmail.com
                </a>
              </dl>
            </div>            
          </li>

        </ul>
      </div>
    </div>
      <p>This is the Members page</p>
  </main>
</template>


<style lang="scss" scoped>


.members-page{
  position: relative;
  width: 100%;
  height: 100%;
}

.section-members{
  overflow: hidden;

  .members-list{
    overflow: hidden;

    h3{
      display: block;
      height: 30px;
      margin-top: 0px;
      font-weight: normal;
      color: var(--dark-gray);
      font-size: 20px;
      letter-spacing: -1px;
      margin-bottom: 13px;
    }

    .none-box{
      width: 100px;
    }

    .current-member{
      height: 204px;
      margin-bottom: 30px;
      margin-top: -4px;
      display: flex;
      flex-basis: 0;
      align-items: flex-end;
    }

    li{
      height: 204px;
      margin-bottom: 30px;
      margin-top: -4px;
      display: flex;
      align-items: flex-end;
    }

    .port-profile{
      float: left;
      margin-right: 25px;

      img{
        width: 158px;
        height: 200px;
      }

      dl{
        overflow: hidden;
      }

      dd{
        font-size: 17px;
        letter-spacing: -1px;
      }

      .member-name-english{
        font-size: 17px;
        letter-spacing: -1px;
      }
    }
    
    .prf-wrap{

      .bas-text{
        overflow: hidden;
      }

      .member-name{
        font-size: 18px;
        font-weight: bold;
        color: var(--black);
        letter-spacing: -1px;
      }

      .member-name-english{
        font-size: 14px;
        color: var(--smoke);
        letter-spacing: -1px;
      }
      .member-job{
        font-size: 14px;
        color: var(--dark-alt);
        font-family: 'Noto Sans KR', sans-serif;
      }

      .member-job-english{
        margin-top: -3px;
        font-size: 13px;
        line-height: 15px;
      }

      a:hover{
        text-decoration: underline;
      }
    }
    .prf-wrap dl a{
      display: inline-block;
      font-size: 15px;
      font-weight: bold;
      color: var(--dark-gray);
      text-decoration: none;
    }
  }
}
</style>