
        // Function to toggle the mobile menu  
        function toggleMenu() {  
            const menu = document.getElementById('mobile-menu');  
            menu.classList.toggle('hidden');  
        }  

        function openCart() {
            document.getElementById("hero").classList.toggle("hidden");
            document.getElementById("cart").classList.toggle("hidden");
        }

        function closeCart() {
            document.getElementById("hero").classList.toggle("hidden");
            document.getElementById("cart").classList.toggle("hidden");
        }

        function openHistory() {
            document.getElementById("history").classList.toggle("hidden");
        }

        function openHistoryfromHero() {
            document.getElementById("history").classList.toggle("hidden");
            document.getElementById("hero").classList.toggle("hidden");
        }

        function closeHistory() {
            document.getElementById("history").classList.toggle("hidden");
            document.getElementById("hero").classList.toggle("hidden");
        }

        function openAccount() {
            document.getElementById("hero").classList.toggle("hidden");
            document.getElementById("account").classList.toggle("hidden");
        }

        function buyNow() {
            Swal.fire({
                icon: 'success',
                title: 'Pembelian Berhasil',
                text: 'Terima kasih telah membeli produk dari Toko Lorem.',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                document.getElementById("cart").classList.toggle("hidden");
                document.getElementById("history").classList.toggle("hidden");
            });
        }

        function addtoCart() {
            Swal.fire({
                icon: 'success',
                title: 'Informasi',
                text: 'Produk berhasil ditambahkan ke keranjang belanja.',
                showConfirmButton: false,
                timer: 1500
            });
        }

        function sendEmail() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = 'Pesan dari ' + name;
            const body = 'Email: ' + email + '\n\n' + message;

            window.location.href = 'mailto:admin@tokolorem.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';

            Swal.fire({
                icon: 'success',
                title: 'Pesan Terkirim',
                text: 'Pesan Anda telah terkirim.',
                showConfirmButton: false,
                timer: 1500
            });

            return false;
        }

        function editProfile() {
            document.getElementById("edit-profile").classList.toggle("hidden");
            document.getElementById("account").classList.toggle("hidden");
        }

        function saveProfile() {
            Swal.fire({
                icon: 'success',
                title: 'Informasi',
                text: 'Profil berhasil disimpan.',
                showConfirmButton: false,
                timer: 1500
            });
        }

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        //smoothscroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        //fadein
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-active');
                    observer.unobserve(entry.target);
                }
            });
        });
        fadeElements.forEach(element => {
            observer.observe(element);
        });

        //fadeout
        const fadeOutElements = document.querySelectorAll('.fade-out');
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-out-active');
                    observer2.unobserve(entry.target);
                }
            });
        });
        fadeOutElements.forEach(element => {
            observer2.observe(element);
        });

        //scrollspy
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('#hamburger a');

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });

        sections.forEach(section => {
            observer3.observe(section);
        });
        