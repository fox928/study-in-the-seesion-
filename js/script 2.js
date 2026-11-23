/*
  js/script.js
  -----------------
  - Adds SweetAlert2 "window-style" alerts.
  - Shows a customized alert per lecture button (via data-lecture).
  - Adds a welcome alert on page load.
*/

(function(){
  // Theme presets per lecture: emoji, icon, color, and description text.
  const themes = {
    1: {emoji:'📘', icon:'info',    color:'#22d3ee', text:'ابدأ من الأساسيات وتعرّف على نظرة عامة.'},
    2: {emoji:'🧭', icon:'question',color:'#a78bfa', text:'أسئلة وإطار العمل المُستخدم في الكورس.'},
    3: {emoji:'🧪', icon:'warning', color:'#f59e0b', text:'تجارب عملية وتمارين تفاعلية.'},
    4: {emoji:'🧠', icon:'info',    color:'#34d399', text:'مفاهيم متقدمة وتطبيقات.'},
    5: {emoji:'⚙️', icon:'success', color:'#60a5fa', text:'إعدادات وتهيئة بيئة العمل.'},
    6: {emoji:'📈', icon:'info',    color:'#f472b6', text:'تحليل النتائج وقراءة التقارير.'},
    7: {emoji:'🧩', icon:'question',color:'#f43f5e', text:'حل مشكلات شائعة ونصائح.'},
    8: {emoji:'🏁', icon:'success', color:'#84cc16', text:'مراجعة ختامية واستعداد للاختبار.'}
  };

  // Helper: generic backdrop for SweetAlert2 (dimmed background).
  function backdrop(){
    return 'rgba(0,0,0,0.6)';
  }

  document.addEventListener('DOMContentLoaded', () => {
    // 1) Welcome window-style alert (SweetAlert2 instead of window.alert).
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: '👋 أهلاً بك!',
        text: 'اختر المحاضرة التي تريد الدخول إليها.',
        icon: 'info',
        confirmButtonText: 'جاهز!',
        confirmButtonColor: '#22d3ee',
        background: '#0f172a',
        color: '#e5e7eb',
        backdrop: backdrop(),
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      });
    } else {
      // Fallback to native alert if SweetAlert2 failed to load for any reason.
      alert('أهلاً بك! اختر المحاضرة التي تريد الدخول إليها.');
    }

    // 2) Customized alert when clicking any lecture button.
    document.querySelectorAll('.btn[data-lecture]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Optional: Pulse animation via animate.css classes
        btn.classList.remove('animate__pulse');
        void btn.offsetWidth; // reflow to restart the animation
        btn.classList.add('animate__animated', 'animate__pulse');
        setTimeout(()=>btn.classList.remove('animate__animated','animate__pulse'), 600);

        const n = Number(btn.getAttribute('data-lecture')) || 0;
        const t = themes[n] || themes[1];

        if (typeof Swal !== 'undefined') {
          Swal.fire({
            title: `${t.emoji} المحاضرة ${n}`,
            text: t.text,
            icon: t.icon, // 'info' | 'success' | 'warning' | 'question' | 'error'
            confirmButtonText: 'ادخل للمحاضرة',
            confirmButtonColor: t.color,
            background: '#0f172a',
            color: '#e5e7eb',
            backdrop: backdrop(),
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
          });
        } else {
          alert(`المحاضرة ${n}: ${t.text}`);
        }
      });
    });
  });
})();