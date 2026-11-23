


/* === SweetAlert helper === */
function showFixedWelcome() {
  if (window.Swal && Swal.fire) {
    Swal.fire({
      title: 'مرحبًا!',
      text: 'تم تفعيل SweetAlert2 بنجاح.',
      icon: 'info',
      confirmButtonText: 'حسناً'
    });
  } else {
    window.alert('تم تفعيل التنبيهات.');
  }
}

document.addEventListener('DOMContentLoaded', function(){
  // Optional: uncomment to auto-show on load
  // showFixedWelcome();
});
