/**
 * Certification rail — single source of truth for the badge strip
 * rendered in the site footer on every page.
 *
 * Usage: add a placeholder + script tag before </footer>:
 *   <div class="cert-rail" id="cert-rail" aria-label="Certifications and badges"></div>
 *   <script src="assets/js/cert-rail.js" defer></script>
 * (use the same relative path prefix as the page's other assets, e.g.
 * "../assets/js/cert-rail.js" from files under /projects/).
 *
 * To add or remove a badge, edit the CERTS list below — every page
 * picks up the change automatically.
 */
(function () {
    var CERTS = [
        { file: "cert-logo13.png", alt: "Google Certified — Generative AI Leader" },
        { file: "cert-logo7.png", alt: "Adobe Qualified — Adobe Experience Platform" },
        { file: "cert-logo8.png", alt: "NVIDIA-Certified Associate — AI Infrastructure and Operations" },
        { file: "cert-logo9.png", alt: "Microsoft Certified — Azure Fundamentals" },
        { file: "cert-logo10.png", alt: "Statistical Learning with Python" },
        { file: "cert-logo11.png", alt: "Oracle Certified Professional — Java" },
        { file: "cert-logo12.png", alt: "Attention Mechanism certification" },
        { file: "cert-logo1.png", alt: "Google Cloud Feature Engineering" },
        { file: "cert-logo2.png", alt: "Professional Machine Learning Engineer" },
        { file: "cert-logo3.png", alt: "MLOps for Generative AI" },
        { file: "cert-logo4.png", alt: "Machine Learning Operations with Vertex AI — Model Evaluation" },
        { file: "cert-logo5.png", alt: "Responsible AI for Developers — Fairness and Bias" },
        { file: "cert-logo6.png", alt: "Model Armor — Securing AI Deployments" }
    ];

    var container = document.getElementById("cert-rail");
    if (!container) return;

    // Work out the "root" prefix (e.g. "" from index.html, "../" from
    // /projects/*.html) from this script's own src, so the badge images
    // resolve correctly no matter how deep the including page lives.
    var thisScript = document.currentScript;
    if (!thisScript) {
        var scripts = document.getElementsByTagName("script");
        for (var i = scripts.length - 1; i >= 0; i--) {
            if (/cert-rail\.js/.test(scripts[i].src)) {
                thisScript = scripts[i];
                break;
            }
        }
    }
    var src = (thisScript && thisScript.getAttribute("src")) || "assets/js/cert-rail.js";
    var root = src.replace(/assets\/js\/cert-rail\.js.*$/, "");

    var html = CERTS.map(function (cert) {
        return (
            '<span class="cert-rail__item">' +
            '<img src="' + root + "assets/images/" + cert.file + '" alt="' + cert.alt + '" loading="lazy">' +
            "</span>"
        );
    }).join("");

    container.innerHTML = html;
})();
