document.addEventListener('DOMContentLoaded', () => {
    // 1. PIXEL CURSOR TRAIL (Efek jejak kursor jadul 2000an)
    const pixels = [];
    const maxPixels = 15; // Jumlah maksimal jejak piksel
    const colors = ['#00ff00', '#33cc33', '#66ff66']; // Warna hijau ala Plumbob The Sims

    document.addEventListener('mousemove', function(e) {
        // Buat elemen piksel baru
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.left = (e.pageX + 10) + 'px'; // Offset dikit dari kursor
        pixel.style.top = (e.pageY + 10) + 'px';
        
        // Warna acak dari array colors
        pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(pixel);
        pixels.push(pixel);

        // Hapus jejak piksel jika terlalu panjang
        if (pixels.length > maxPixels) {
            const oldPixel = pixels.shift();
            if (oldPixel.parentNode) {
                oldPixel.parentNode.removeChild(oldPixel);
            }
        }
        
        // Animasi fade out untuk piksel
        setTimeout(() => {
            if (pixel.parentNode) {
                pixel.style.opacity = '0';
                pixel.style.transition = 'opacity 0.2s linear';
                setTimeout(() => {
                    if (pixel.parentNode) {
                        pixel.parentNode.removeChild(pixel);
                    }
                    const index = pixels.indexOf(pixel);
                    if (index > -1) pixels.splice(index, 1);
                }, 200);
            }
        }, 100);
    });

    // 2. EFECT TEKS BLINK ACAK (Vibes jadul)
    const blinkElements = document.querySelectorAll('.blink-random');
    blinkElements.forEach(el => {
        setInterval(() => {
            el.style.visibility = (el.style.visibility === 'hidden' ? 'visible' : 'hidden');
        }, Math.random() * 500 + 300); // Kedip acak antara 300ms - 800ms
    });

});
