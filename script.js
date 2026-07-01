/**
 * St. Francis Catholic Church Website Architecture Engine
 * Scaled Dynamic Interface Logic for Modern Micro-Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================================================
    // 1. DYNAMIC NAVIGATION BAR STABILIZER
    // ==========================================================================
    const mainNavbar = document.getElementById("main-navbar");
    
    const handleNavbarScrollLogic = () => {
        if (window.scrollY > 40) {
            mainNavbar.classList.add("solid-nav");
            mainNavbar.classList.remove("transparent-nav");
        } else {
            mainNavbar.classList.add("transparent-nav");
            mainNavbar.classList.remove("solid-nav");
        }
    };

    window.addEventListener("scroll", handleNavbarScrollLogic);
    // Initial check in case page is refreshed while scrolled down
    handleNavbarScrollLogic();

    // ==========================================================================
    // 2. RESPONSIVE MOBILE DRAWER TREE CONTROL
    // ==========================================================================
    const menuDrawerToggleButton = document.getElementById("menu-drawer-toggle");
    const closeDrawerBtn = document.getElementById("close-drawer-btn");
    const mobileDrawerElement = document.getElementById("mobile-drawer");
    const mobileLinksList = document.querySelectorAll(".drawer-links a");

    const openDrawer = () => {
        mobileDrawerElement.classList.add("open");
    };

    const closeDrawer = () => {
        mobileDrawerElement.classList.remove("open");
    };

    if (menuDrawerToggleButton && mobileDrawerElement) {
        menuDrawerToggleButton.addEventListener("click", openDrawer);
    }
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener("click", closeDrawer);
    }

    // Auto-close overlay drawer once any tracking anchor point is triggered
    mobileLinksList.forEach(link => {
        link.addEventListener("click", closeDrawer);
    });

    // =================================================//
    // 3. PERFORMANCE OPTIMIZED SCROLL ANIMATION TRACKER
    // =================================================//
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const evaluateElementInViewport = (element, dividend = 1.15) => {
        const elementBoundsTop = element.getBoundingClientRect().top;
        return (elementBoundsTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const executeScrollRevealSequence = () => {
        revealElements.forEach(element => {
            if (evaluateElementInViewport(element)) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", executeScrollRevealSequence);
    // Fallback execution to parse elements matching view coordinates on launch
    setTimeout(executeScrollRevealSequence, 300);

    // ==========================================================================
    // 4. STATISTICAL COUNTER INCREMENT ENGINE
    // ==========================================================================
    const metricCounterElements = document.querySelectorAll(".counter");
    const accelerationSpeedToken = 120; // Lower numbers translate into quicker increment step execution

    const initializeCounterSequence = () => {
        metricCounterElements.forEach(counter => {
            const executeIncrement = () => {
                const structuralTargetValue = +counter.getAttribute("data-target");
                const currentDisplayValue = +counter.innerText;
                const incrementStepValue = structuralTargetValue / accelerationSpeedToken;

                if (currentDisplayValue < structuralTargetValue) {
                    counter.innerText = Math.ceil(currentDisplayValue + incrementStepValue);
                    setTimeout(executeIncrement, 20);
                } else {
                    counter.innerText = structuralTargetValue;
                }
            };
            executeIncrement();
        });
    };

    // Tracking implementation to trigger execution loop only when visible
    let incrementalCountersTriggered = false;
    const processCounterVisibilityCheck = () => {
        const structuralPanelElement = document.querySelector(".hero-stats-panel");
        if (structuralPanelElement && evaluateElementInViewport(structuralPanelElement, 1) && !incrementalCountersTriggered) {
            initializeCounterSequence();
            incrementalCountersTriggered = true;
        }
    };

    window.addEventListener("scroll", processCounterVisibilityCheck);
    processCounterVisibilityCheck();
});