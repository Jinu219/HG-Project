import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
          <nav>
              <a href="#" class="main-title">하늘결</a>
              <ul class="nav-links">
                  <li><a href="#clouds">구름 도감</a></li>
                  <li><a href="#community">커뮤니티</a></li>
              </ul>
              <button class="search-icon">🔍</button>
          </nav>
      </header>

      <section class="hero">
          <div class="hero-content">
              <h1>구름을 보다</h1>
              <p>체계적인 구름 분류와 생성 원리를 한국어로 배워보세요</p>
              
              <div class="search-box">
                  {/* <input type="text" placeholder="구름 이름이나 특징을 검색하세요..."> */}
                  <span>🔍</span>
              </div>
          </div>
          
          <div class="scroll-indicator">
              <div>↓</div>
          </div>
      </section>

      <main class="main-content">
          <h2 class="section-title">☁️구름의 유형들☁️</h2>

          <section class="cloud-categories">
              <div class="cloud-card">
                  <div class="cloud-icon">☁️</div>
                  <h3>하층운</h3>
                  <div class="subtitle">0-2km 고도</div>
                  <p>층운, 층적운, 난층운 등 낮은 하늘의 두껍고 어두운 구름들을 탐구해보세요.</p>
              </div>

              <div class="cloud-card">
                  <div class="cloud-icon">⛅</div>
                  <h3>중층운</h3>
                  <div class="subtitle">2-6km 고도</div>
                  <p>고층운, 고적운 등 중간 높이에서 형성되는 회색빛 구름들을 알아보세요.</p>
              </div>
              
              <div class="cloud-card">
                  <div class="cloud-icon">🌤️</div>
                  <h3>상층운</h3>
                  <div class="subtitle">6-12km 고도</div>
                  <p>권운, 권적운, 권층운 등 높은 하늘의 얇고 투명한 구름들을 만나보세요.</p>
              </div>
          </section>

          <section class="cta-section">
              <h2>지금 바로 구름 여행을 시작하세요</h2>
              <a href="#" class="cta-button">구름 도감 둘러보기</a>
          </section>
      </main>

      <footer>
          <p>&copy; 2024 하늘결 프로젝트 | 부경대학교 지구환경시스템과학부 환경대기과학전공</p>
          <p>제작: 24학번 이진우</p>
      </footer>

    </div>
  );
}

export default App;
