// =========================
// js/script.js
// =========================

/*
  ملف الجافاسكربت المسؤول عن:
  - تشغيل الأنيميشن عند الضغط على زر.
  - إظهار نافذة SweetAlert2 برسالة ثابتة لكل المحاضرات.
*/

(function(){
  document.addEventListener('DOMContentLoaded', () => {
    // إضافة مستمع للنقر على جميع الأزرار التي لها data-lecture
    document.querySelectorAll('.btn[data-lecture]').forEach(btn => {
      btn.addEventListener('click', () => {
        // إعادة تشغيل أنيميشن النبض عند الضغط
        btn.classList.remove('animate__pulse');
        void btn.offsetWidth; // لإجبار إعادة التدفق
        btn.classList.add('animate__animated', 'animate__pulse');
        setTimeout(()=>btn.classList.remove('animate__animated','animate__pulse'), 600);

        // إظهار نافذة SweetAlert2 برسالة ثابتة
        if (typeof Swal !== 'undefined') {
          Swal.fire({
            title: '📚 المحاضرة',
            text: 'سيتم توجيهك إلى المحاضرة المختارة.',
            icon: 'info',
            confirmButtonText: 'متابعة',
            confirmButtonColor: '#22d3ee',
            background: '#0f172a',
            color: '#e5e7eb',
            backdrop: 'rgba(0,0,0,0.6)',
            showClass: { popup: 'animate__animated animate__fadeInDown' },
            hideClass: { popup: 'animate__animated animate__fadeOutUp' }
          });
        } else {
          // احتياطي في حال عدم تحميل SweetAlert2
          alert('سيتم توجيهك إلى المحاضرة المختارة.');
        }
      });
    });
  });
})();