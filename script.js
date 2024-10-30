// Etkinlik önerileri
const suggestions = [
    "Bilmece çözün: Yaşlarına uygun bilmecelerle hem eğlenir hem de düşünme becerilerini geliştirirler.",
    "Puzzle yapın: Sabır ve problem çözme becerilerini geliştirirler.",
    "Masal anlatın: Çocukların hayal güçlerini besler ve onlara yeni dünyalar keşfetme fırsatı sunar.",
    "Oyun hamuru ile şekiller yapın: El becerilerini geliştirir ve yaratıcılıklarını ortaya çıkarır.",
    "Bilim deneyleri yapın: Çocukların meraklarını giderir ve bilim dünyasına ilk adımlarını atmalarını sağlar.",
    "Kendi oyunlarını icat edin: Hayal güçlerini kullanarak özgün oyunlar yaratmalarını teşvik eder.",
    "Birlikte dans edin: Müzikle hareket etmek hem eğlenceli hem de fiziksel gelişimi destekler.",
    "Kamp kurun: Evde bir köşede küçük bir çadır kurarak macera dolu bir gün geçirebilirsiniz.",
    "Birlikte bir hikaye yazın: Hayal güçlerini kullanarak ortak bir hikaye oluşturmaları hem eğlenceli hem de yaratıcılıklarını geliştirir.",
    "Kutu oyunları oynayın: Strateji, dikkat ve sosyal becerilerini geliştirirler.",
    "Bisiklete binin: Hem fiziksel aktivite hem de doğayla iç içe olma fırsatı sunar.",
    "Parkta oyunlar oynayın: Salıncakta sallanmak, kaydırakta kaymak gibi klasik oyunlar hem eğlenceli hem de sosyalleşmeyi sağlar.",
    "Piknik yapın: Doğada yemek yemek ve oyun oynamak hem keyifli hem de sağlıklıdır.",
    "Hazine avı düzenleyin: Çocukların heyecanını artıracak ve problem çözme becerilerini geliştirecek bir etkinliktir.",
    "Böcekleri gözlemleyin: Doğayı keşfetmek ve meraklarını gidermek için harika bir fırsattır.",
    "Yıldızları izleyin: Geceleyin gökyüzünü izlemek ve yıldızları tanımak hem eğlenceli hem de bilgilendiricidir.",
    "Kumsalda kumdan kaleler yapın: Yaz aylarında deniz kenarında keyifli vakit geçirmeleri için harika bir seçenektir.",
    "Bir müze veya sanat galerisi ziyaret edin: Çocukların kültür sanatla tanışmalarını sağlar.",
    "Bir festivale katılın: Farklı kültürleri tanımak ve yeni deneyimler yaşamak için güzel bir fırsattır.",
    "Birlikte resim yapın.",
    "Doğa yürüyüşüne çıkın.",
    "Birlikte kitap okuyun.",
    "Bir oyun oynayın.",
    "Birlikte yemek yapın.",
    "Bir müzik aleti çalın veya şarkı söyleyin.",
    "Birlikte el sanatları yapın.",
    "Küçük bir bahçe düzenleyin veya bitki ekin.",
    "Birlikte bir film izleyin.",
    "Hayvanat bahçesi veya akvaryum ziyareti yapın."
  ];
  
  // Önerilere göre resimler
  const suggestionImages = {
    "Bilmece çözün: Yaşlarına uygun bilmecelerle hem eğlenir hem de düşünme becerilerini geliştirirler.": {
      left: "C:\Users\Dell\Desktop\family-activity-suggestions\images\images.jpeg",
    },
    "Puzzle yapın: Sabır ve problem çözme becerilerini geliştirirler.": {
      left: "puzzle-left.jpg",
      right: "puzzle-right.jpg"
    },
    // Diğer eski öneriler
    "Doğa yürüyüşüne çıkın.": {
      left: "nature-walk-left.jpg",
      right: "nature-walk-right.jpg"
    },
    "Birlikte resim yapın.": {
      left: "painting-left.jpg",
      right: "painting-right.jpg"
    },
    "Birlikte kitap okuyun.": {
      left: "reading-left.jpg",
      right: "reading-right.jpg"
    },
    "Bir oyun oynayın.": {
      left: "game-left.jpg",
      right: "game-right.jpg"
    },
    "Birlikte yemek yapın.": {
      left: "cooking-left.jpg",
      right: "cooking-right.jpg"
    }
    // Diğer yeni öneriler burada devam edecek
  };
  
  // Unsplash API için anahtar (ücretsiz plan için)
  const UNSPLASH_API_KEY = 'YOUR_UNSPLASH_API_KEY_HERE';

  // Bilgi formunu gönderme işlevi
  const submitInfo = () => {
    const childCount = document.getElementById('child-count').value;
    const childAges = document.getElementById('child-ages').value;
    
    if (childCount && childAges) {
      document.getElementById('info-form').style.display = 'none';
      document.getElementById('suggestion-container').style.display = 'flex';
      document.getElementById('new-suggestion-btn').style.display = 'block';
      getNewSuggestion();
    } else {
      alert('Lütfen tüm bilgileri doldurun.');
    }
  };

  // Unsplash API'den resim alma işlevi
  const getImageFromUnsplash = async (query) => {
    try {
      const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_API_KEY}`);
      const data = await response.json();
      return data.urls.regular;
    } catch (error) {
      console.error('Resim alınamadı:', error);
      return null;
    }
  };

  // Yeni öneri alma işlevi (güncellendi)
  const getNewSuggestion = async () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    const newSuggestion = suggestions[randomIndex];
    document.getElementById('suggestion').innerText = newSuggestion;

    // Öneri ile ilgili resim alma
    const imageUrl = await getImageFromUnsplash(newSuggestion.split(':')[0]);
    if (imageUrl) {
      document.getElementById('suggestion-image').src = imageUrl;
    } else {
      document.getElementById('suggestion-image').src = ''; // Resim alınamazsa boş bırak
    }
  };

  // Event listener'ları ekleme
  document.getElementById('submit-info').addEventListener('click', submitInfo);
  document.getElementById('new-suggestion-btn').addEventListener('click', getNewSuggestion);

  const slogans = [
    "Çocuğunuzla bağınızı güçlendirmek ve unutulmaz anılar biriktirmek ister misiniz? Bizimle birlikte ailece yapılabilecek sayısız etkinliği keşfedin!",
    "Çocuklarınızla birlikte keyifli ve eğitici vakit geçirmek için aradığınız her şey burada! Oyunlardan doğa etkinliklerine kadar birçok seçeneğimiz var.",
    "Ailenizle birlikte vakit geçirmek için ilham mı arıyorsunuz? Bu sayfada size özel olarak hazırladığımız aktivite önerilerine göz atın!",
    "Minik ellerle büyük keşiflere çıkmaya hazır mısınız? Çocuğunuzla birlikte unutulmaz anılar biriktirmek için birbirinden eğlenceli etkinlikler sizi bekliyor!",
    "Ailenizin kahkahalarıyla dolsun! Birlikte yapacağınız etkinliklerle bağlarınızı güçlendirin, yeni şeyler öğrenin ve unutulmaz anılar yaratın.",
    "Çocuğunuzla birlikte vakit geçirmek hiç bu kadar eğlenceli olmamıştı! Sizi ve çocuğunuzu bekleyen sürprizlerle dolu bir dünya sizi bekliyor.",
    "Çocuğunuzun gelişimini desteklemek ve onunla kaliteli zaman geçirmek için ihtiyacınız olan her şey burada. Uzman önerileriyle hazırlanan etkinliklerimizle çocuğunuzun hem eğlenir hem de öğrenirken gelişimine katkıda bulunun.",
    "Çocuğunuzla birlikte yapacağınız etkinlikler sayesinde onun hayal gücünü, yaratıcılığını ve sosyal becerilerini geliştirmesine yardımcı olabilirsiniz. Hemen keşfedin!",
    "Çocuğunuzla birlikte doğanın içinde vakit geçirmek, onun duygusal ve zihinsel gelişimine olumlu etkiler yapar. Bizimle birlikte doğa etkinlikleriyle çocuğunuzun doğayla iç içe olmasını sağlayın.",
    "Çocuğunuzla birlikte unutulmaz anılar yaratmak için harekete geçin! Hemen etkinliklerimize göz atın ve ailece keyifli vakit geçirmeye başlayın.",
    "Çocuğunuzla birlikte keşfetmenin zamanı geldi! Yeni hobiler edinmek ve birlikte büyümek için size özel hazırladığımız etkinlikleri kaçırmayın.",
    "Ailenizin bağlarını güçlendirmek ve çocuğunuzun gelişimine katkıda bulunmak için en doğru yerdesiniz. Hemen başlayın!",
    "Doğanın kalbinde ailece keşfetmeye hazır mısınız?",
    "Sanatın büyülü dünyasında ailenizle birlikte keşfedin!",
    "Unutulmaz maceralar için ailecek yola çıkın!"

  ];

  let currentSloganIndex = 0;
  let currentWordIndex = 0;
  let words = [];
  let sloganInterval;

  function typeNextWord() {
    const sloganElement = document.getElementById('slogan');
    if (currentWordIndex < words.length) {
      sloganElement.textContent += words[currentWordIndex] + ' ';
      currentWordIndex++;
    } else {
      clearInterval(sloganInterval);
      setTimeout(() => {
        currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
        changeSlogan();
      }, 2000); // 2 saniye bekle, sonra yeni slogana geç
    }
  }

  function changeSlogan() {
    const sloganElement = document.getElementById('slogan');
    sloganElement.textContent = '';
    words = slogans[currentSloganIndex].split(' ');
    currentWordIndex = 0;
    
    sloganInterval = setInterval(typeNextWord, 300); // Her
  }

  // Sayfa yüklendiğinde sloganları değiştirmeye başla
  window.addEventListener('load', () => {
    changeSlogan(); // İlk sloganı hemen göster
  });







  

