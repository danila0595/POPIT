window.addEventListener("DOMContentLoaded", (event) => {
    const numberElement = document.getElementById('counters');
    const animateNumbers = () => {
        const rect = numberElement.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            $('.number').each(function(index) {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                    initialValue = parseFloat($this.text().replace('%', ''));
                var obj = { countNum: initialValue };
                var id = requestAnimationFrame(updateNumber);
                function updateNumber() {
                    if (obj.countNum < countTo) {
                        obj.countNum++;
                        var currentValue = Math.floor(obj.countNum);
                        if (index === 1) {
                            $this.text(currentValue + '%');
                        } else {
                            $this.text(currentValue);
                        }
                        id = requestAnimationFrame(updateNumber);
                    } else {
                        cancelAnimationFrame(id);
                    }
                }
            });
        }
    }
  
    animateNumbers();
    window.addEventListener('scroll', animateNumbers);
  });
  