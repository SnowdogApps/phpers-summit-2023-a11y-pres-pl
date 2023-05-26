---
theme: ./
author: 'Ania Karoń'
position: 'Specjalista ds. Dostępności'
position2: 'i Senior Frontend Developer'
email: 'anna.karon@snow.dog'
profilePicture: 'anna-karon-photo.jpg'
linkedin: 'https://www.linkedin.com/in/anna-karon/'

---

# Nie tylko na froncie

dostępne technologie w odpowiedzi na różne potrzeby użytkowników

---
layout: aboutme
---

---

# Spis treści

1. O co chodzi z tą dostępnością?
2. Różne technologie asystujace
3. Różni użytkownicy
4. Dlaczego warto?
5. Dostępność na backndzie
7. Podsumowanie

---
layout: image
image: 'curb-cut.jpg'
class: 'text-center'
---

<v-click>
<div class="w-full flex justify-center">
  <img src="/curb-cut-effect.png" alt="ikony: kobieta na wózku inwalidzkim, mężczyzna z wózkiem dziecięcym, mężczyzna na rowerze, kobieta na deskorolce" class="w-1/2" />
</div>
</v-click>

---
layout: center
class: "text-center"
---

# Web Accessibility

Czym jest dostępność cyfrowa?

#A11y

<v-click>

Dostępność stron internetowych to inkluzywna praktyka polegająca na zapewnieniu, że nie ma barier uniemożliwiających interakcję ze stroną internetową lub aplikacją. Aplikacja (internetowa / mobilna) jest funkcjonalna i dostępna dla wszystkich użytkowników, bez względu na ich ograniczenia.

</v-click>


---
layout: center
class: "text-center"
---

# Technologie asystujące


<div v-click class="w-3/4 mx-auto">

Technologia asystująca (Assistive Technology, AT) to każde urządzenie, oprogramowanie lub sprzęt, który pomaga w nauce, komunikacji lub lepszym funkcjonowaniu.

</div>

---
layout: two-cols
---

* myszka, klawiatura (także ekranowa, brajlowska), touchpad
* text-to-speach (zamiana tekstu na mowę - czytniki ekranu, czytanie treści)
* lupa (zoom)
* ustawienia kolorów i kontrastu
* rozpoznawanie mowy
* rozpoznawanie dźwięków (alerty głosowe na wizualne)
* rozpoznawanie obrazów
* okulograf (eye-tracking)
* napisy do filmów
* tryb skupienia
* joysticki i przełączniki (np. ustne)
* ...

::right::

<div class="p-6" v-click="2">

<img src="https://media.giphy.com/media/V8o3sP9lfG2ixO7Dks/giphy.gif" alt="Zdezorientowany GIF autorstwa ConEquip Parts" />
</div>

<div v-click="1">

Czy każde oprogramowanie z którego korzystamy jest technologią asystującą? 🤔

</div>

---
layout: center
class: "bg-black"
---
<div class="bg-black w-full">
<iframe width="900" height="506" src="https://www.youtube-nocookie.com/embed/8sX9IEHWRJ8" title="YouTube video player" frameborder="0"></iframe>
</div>

---
layout: center
class: "text-center"
---

# Dla kogo?

<v-click>

<p class="text-xs">1,3 miliarda ludzi (1 na 6 osób) na świecie doświadcza znacznej niepełnosprawności. Stanowi to około 16% populacji.<br/> 80% osób niepełnosprawnych ma ukrytą niepełnosprawność.</p>

</v-click>

<v-click>

<p>Dla wszystkich - pełnosprawność to stan tymczasowy</p>

</v-click>

<div class="grid grid-cols-2 gap-2 justify-center">
  <div class="flex flex-col items-center" v-click>
    <p class="text-accent font-bold">Ograniczenia wzrokowe</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>
    <p>Silne słońce, zmęczenie</p>
  </div>
  <div class="flex flex-col items-center" v-click>
    <p class="text-accent font-bold">Ograniczenia słuchowe</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25h2.24z"/></svg>
    <p>Głośne miejsce, brak słuchawek</p>
  </div>
  <div class="flex flex-col items-center" v-click>
    <p class="text-accent font-bold">Ograniczenia ruchowe</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"/></svg>
    <p>Brak myszki, urządenia peryferyjne</p>
  </div>
  <div class="flex flex-col items-center" v-click>
    <p class="text-accent font-bold">Ograniczenia kognitywne</p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/></svg>
    <p>Zmęczenie, stres, język obcy</p>
  </div>
</div>


---
layout: image-right
image: 'elderly-ppl.jpg'
---

# Czas płynie


Młodsi nie będziemy...

<v-click>

Starzejące się społeczeństwo jest zróżnicowane:

* problemy ekonomiczne i zdrowotne
* zaplecze ekonomiczne i korzystanie z emetytury

</v-click>

<v-click>

Prawdopodobieństwo niepełnosprawności rośnie z wiekiem

</v-click>

---

<p class="text-xs mt-0 mt-0">
Użytkownicy Internetu, którzy kupili lub zamówili towary lub usługi do użytku prywatnego w ciągu ostatnich 12 miesięcy, według grup wiekowych, UE, 2010-2022
</p>
<figure>
<img src="/erostat-eu-ecommerce-users-by-age-2022.png" alt="" class="w-3/4 mx-auto" />
<figurecaption class="text-xs">
Wykres przedstawiający użytkowników Internetu, którzy kupili lub zamówili towary lub usługi do użytku prywatnego w ciągu ostatnich 12 miesięcy, według grup wiekowych, UE, 2010-2022 (% osób, które korzystały z Internetu w ciągu ostatnich 12 miesięcy): Grupy wiekowe: 55-74 lata - wzrost z 45% w 2010 do 59% w 2022, 45-54 lata - wzrost z 52% w 2010 do 75% w 2022, 35-44 lata - 56% w 2010 do 83% w 2022, 25-43 lata - wzrost z 59% w 2010 do 89% w 2022, 16-24 lata - wzrost z 49% w 2010 do 81% w 2022r. <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=E-commerce_statistics_for_individuals">Link do wykresu Eurostst</a>
</figurecaption>
</figure>

---
layout: image-right
image: 'accessibility-tree.png'
class: 'text-center'
---

# Jak to działa?

<p class="text-sm">Przeglądarka tworzy DOM (Document Object Model)</p>

<Arrow x1="250" y1="140" x2="250" y2="230" />

<p>&nbsp;</p>
<p>&nbsp;</p>

<p class="text-sm">Z DOM przeglądarka tworzy drzewo dostępności, model zawartości strony, w którym elementy interfejsu użytkownika są reprezentowane jako dostępne obiekty.</p>

<Arrow x1="250" y1="310" x2="250" y2="400" />

<p>&nbsp;</p>
<p>&nbsp;</p>

<p class="text-sm">Przeglądarka przekazuje drzewo dostępności do wbudowanego w system operacyjny interfejsu programowania aplikacji (API) dostępności.</p>

---

# Dostępność na backendzie?

* Struktura API
  * teksty alternatywne, napisy do filmów, transkrypcja do audio i video
  * zapewnienie dostępnych atrybutów - role, stany, nazwy
  * wersje językowe (i18n)
* Performance
* Renderowane elementy frontendowe (HTML)
  * semantyczny HTML (nie tylko divy)
  * możliwość dodawania atrybutów
* Dokumentacja

<v-click>

... dokumentacja?

</v-click>

<v-after>
<div class="absolute bottom-0 right-0 h-1/2 flex justify-end">
<img src="https://media.giphy.com/media/y3QOvy7xxMwKI/giphy.gif" alt="Telewizyjny gif. Ubrany w różową czapkę z daszkiem i ciemnoniebieską marynarkę Will Smith z serialu Fresh Prince of Bel-Air rzuca nam podejrzliwe spojrzenie z dłonią na ustach i podbródku." class="h-full" />
</div>
</v-after>
---
layout: center
class: "text-center"
---

# Dla innych programistów

---
class: "text-center"
---

**Michael Forzano**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/57P_dCEPtRw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="mx-auto"></iframe>

Programista w Amazonie

[Więcej o jego historii na blogu Amazona](https://www.aboutamazon.com/news/workplace/blind-since-birth-writing-code-at-amazon-since-2013)

---

# Dokumentacja

* Narzędzie albo platforma - semantyczny HTML, nawigacja klawiaturą, kolory i kontrast
* Treść - prosty i zrozumiały język:
  * Kiedy zwracasz się do czytelnika, używaj "ty", a nie strony biernej.
  * Unikaj złożonych zdań i niepotrzebnych słów.
  * Pisz najważniejsze informacje jako pierwsze.
  * Pisz krótkie zdania i akapity.
  * Obrazki - pamiętaj o tekstach alterantywnych (alt).
  * Video - pamiętaj o napisach i transkrypcji.

---
class: "text-center"
---

**Tomasz Grabowski @tomgrabal**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NcQof9-gHBs?start=430&end=554" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="mx-auto"></iframe>

*Z wykształcenia kulturoznawca, z zamiłowania informatyk, domorosły montażysta oraz vlogger.* Na co dzień korzysta z Eye-trackera i syntezatora mowy.

[O Tomku na jego stronie](https://www.tomgrabal.pl/o-mnie/)<br/>[Tomka kanał na YouTube](https://www.youtube.com/@tomgrabal)

---
layout: center
class: "text-center"
---

# Dla rozrywki i wrażeń

Dostępność w grach - [Game accessibility guideliness](https://gameaccessibilityguidelines.com/)

[Special Effect - organizacja charytatywna pomagająca osobom niepełnosprawnym grać w gry](https://www.specialeffect.org.uk/)

[Forza Motorsport – Blind Driving Assists](https://www.youtube.com/watch?v=T7aVUqmQ_Sc&t=4s)

---
layout: center
class: "text-center"
---

# Becky Tyler

[EyeMine](https://github.com/SpecialEffect/EyeMine) developer

<iframe width="560" height="315" src="https://www.youtube.com/embed/UCD5Ri9ecaw?start=228&end=376" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="mx-auto"></iframe>

Dzięki współpracy z programistką Kirsty McNaught, która pracowała nad ulepszeniem interfejsu Minecrafta dla graczy z niepełnosprawnościami, Becky została beta testerem a ostatecznie programistką EyeMine.

[Więcej o Becky Tyler na stronie Githuba](https://github.com/readme/featured/open-source-accessibility)

---
layout: two-cols-header
---

# Dostępność *by default*

::left::

<div class="p-6">

Jako osoba z #niepełnosprawnością, frustrujące jest słyszeć, że gdy pełnosprawny użytkownik napotyka funkcję, która nie pozwala mu kontynuować, jest to uważane za "błąd" do naprawienia. Kiedy użytkownik z niepełnosprawnością spotyka się z tym samym, słyszymy: "w przyszłości zajmiemy się #dostępnością".

[Dave Dame, Twitter](https://twitter.com/DDame/status/1623354446573862912)

</div>



::right::

<div class="flex flex-col justify-end h-full p-6">

Tak jak testowanie oprogramowania jest ważne i żaden deweloper nie wdrożyłby swoich produktów bez przetestowania ich pod kątem błędów, uważam, że to samo należy zastosować do błędów dostępności

[Paul Chiou, cytat z artykułu *Coding accessibility: Disability as catalyst for creativity*, Github](https://github.com/readme/featured/disability-creativity)

</div>
---

# Ściąga backendowca

* [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
* [Axe - rozszerzenie do przeglądarki do automatycznych testów a11y](https://www.deque.com/axe/browser-extensions/)
* [Prosty język](https://prostyjezyk.com/)
* [Semantic HTML](https://medium.com/swlh/semantic-html-and-accessibility-efdc3cf40824)

---
layout: thankyou
---

<img src="/pres-qr-code.png" alt="qr kod do prezentacji" class="mx-auto" style="width: 150px; margin-top: 32px" />

---