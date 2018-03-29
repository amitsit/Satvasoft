'use strict';

var app = angular.module('app', ['LocalStorageModule', 'toastr', 'ui.router', 'app.filters', 'app.services', 'app.directives', 'app.controllers', 'vcRecaptcha']);
app.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider, localStorageServiceProvider, $params) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/SCIndex',
            controller: 'HomeCtrl'
        })
        .state('who-we-are', {
            url: '/who-we-are',
            templateUrl: '/views/who-we-are',
            controller: 'WhoWeAreCntrl'
        })
        .state('infrastructure', {
            url: '/infrastructure',
            templateUrl: '/views/infrastructure',
            controller: 'InfrastructureCntrl'
        })
         .state('development-process', {
             url: '/development-process',
             templateUrl: '/views/development-process',
             controller: 'DevelopmentProcessCntrl'
         })
        .state('crm-solution', {
            url: '/crm-solution',
            templateUrl: '/views/crm-solution',
            controller: 'CrmSolutionCntrl'
        })
         .state('ecommerce-solution', {
             url: '/ecommerce-solution',
             templateUrl: '/views/ecommerce-solution',
             controller: 'EcommerceSolutionCntrl'
         })
         .state('hrandjob-portal-solution', {
             url: '/hrandjob-portal-solution',
             templateUrl: '/views/hrandjob-portal-solution',
             controller: 'hrandjobPortalSolutionCntrl'
         })
        .state('enterprise-content-management', {
            url: '/enterprise-content-management',
            templateUrl: '/views/enterprise-content-management',
            controller: 'enterpriseContentManagementCntrl'
        })
        .state('live-chat-and-support', {
            url: '/live-chat-and-support',
            templateUrl: '/views/live-chat-and-support',
            controller: 'liveChatAndSupportCntrl'
        })
        .state('angularjs-development', {
            url: '/angularjs-development',
            templateUrl: '/views/angularjs-development',
            controller: 'angularjsDevelopmentCntrl'
        })
        .state('ajax-development', {
            url: '/ajax-development',
            templateUrl: '/views/ajax-development',
            controller: 'ajaxDevelopmentCntrl'
        })
        .state('html5-development', {
            url: '/html5-development',
            templateUrl: '/views/html5-development',
            controller: 'html5DevelopmentCntrl'
        })
        .state('php-open-source', {
            url: '/php-open-source-development',
            templateUrl: '/views/php-open-source-development',
            controller: 'phpOpenSourceCntrl'
        })
        .state('hadoop-development', {
            url: '/hadoop-development',
            templateUrl: '/views/hadoop-development',
            controller: 'hadoopDevelopmentCntrl'
        })
        .state('domain-expertise', {
            url: '/domain-expertise',
            templateUrl: '/views/domain-expertise',
            controller: 'domainExpertiseCntrl'
        })
        .state('software-product-development', {
            url: '/software-product-development',
            templateUrl: '/views/software-product-development',
            controller: 'softwareProductDevelopmentCntrl'
        })
        .state('software-application-migration', {
            url: '/software-application-migration',
            templateUrl: '/views/software-application-migration',
            controller: 'softwareApplicationMigrationCntrl'
        })
        .state('software-application-support', {
            url: '/software-application-support',
            templateUrl: '/views/software-application-support',
            controller: 'softwareApplicationSupportCntrl'
        })
        .state('web-portal-development', {
            url: '/web-portal-development',
            templateUrl: '/views/web-portal-development',
            controller: 'webPortalDevelopmentCntrl'
        })
        .state('responsive-website-development', {
            url: '/responsive-website-development',
            templateUrl: '/views/responsive-website-development',
            controller: 'responsiveWebsiteDevelopmentCntrl'
        })
        .state('hire-resource', {
            url: '/hire-resource',
            templateUrl: '/views/hire-resource',
            controller: 'hireResourceCntrl'
        })
        .state('bi-services', {
            url: '/bi-services',
            templateUrl: '/views/bi-services',
            controller: 'biServicesCntrl'
        })
        .state('testing-qa-services', {
            url: '/testing-qa-services',
            templateUrl: '/views/testing-qa-services',
            controller: 'testingQaServicesCntrl'
        })
        .state('offshore-development-center', {
            url: '/offshore-development-center',
            templateUrl: '/views/offshore-development-center',
            controller: 'offshoreDevelopmentCenterCntrl'
        })
        .state('mobile-app-development', {
            url: '/mobile-app-development',
            templateUrl: '/views/mobile-app-development',
            controller: 'mobileAppDevelopmentCntrl'
        })
        .state('cloud-services', {
            url: '/cloud-services',
            templateUrl: '/views/cloud-services',
            controller: 'cloudServicesCntrl'
        })
        .state('leadership', {
            url: '/leadership',
            templateUrl: '/views/leadership',
            controller: 'LeadershipCntrl'
        })
       
        .state('application-development', {
            url: '/application-development',
            templateUrl: '/views/application-development',
            controller: 'ApplicationDevelopmentCtrl'
        })
        .state('sharepoint', {
            url: '/sharepoint-development',
            templateUrl: '/views/sharepoint-development',
            controller: 'SharepointCtrl'
        })
        .state('java', {
            url: '/java-development',
            templateUrl: '/views/java-development',
            controller: 'JavaCtrl'
        })
        .state('biztalk', {
            url: '/biztalk-development',
            templateUrl: '/views/biztalk-development',
            controller: 'BiztalkCtrl'
        })
        .state('microsoft-dot-net', {
            url: '/microsoft-dot-net-development',
            templateUrl: '/views/microsoft-dot-net-development',
            controller: 'MicrosoftDotNetCtrl'
        })
        .state('nodejs', {
            url: '/nodejs-development',
            templateUrl: '/views/nodejs-development',
            controller: 'NodejsCtrl'
        })
        .state('career', {
            url: '/career',
            templateUrl: '/views/career',
            controller: 'careerCntrl'
        })
        .state('portfolio-detail', {
            url: '/portfolio-detail/:title',
            templateUrl: '/views/GetParticularPortfolioDetail',
            controller: 'ParticularPortfolioController'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: '/views/portfolio-index',
            controller: 'PortfolioController',
            params: {
                isRoot: true
            }
        })
        .state('blog', {
            url: '/blog/:parameter',
            templateUrl: '/views/BlogPost',
            controller: 'BlogPostController'
        })
        .state('contact-us', {
            url: '/contact-us',
            templateUrl: '/views/contact-us',
            controller: 'ContactUsController'
        })
        .state('pricing-comparison-us', {
            url: '/pricing-comparison-us',
            templateUrl: '/views/pricecomparisonus',
            controller: 'PriceComparisonUSCntrl'
        })
        .state('pricing-comparison-aus', {
            url: '/pricing-comparison-aus',
            templateUrl: '/views/pricecomparisonaus',
            controller: 'PriceComparisonAUSCntrl'
        })
        .state('pricing-comparison-uk', {
            url: '/pricing-comparison-uk',
            templateUrl: '/views/pricecomparisonuk',
            controller: 'PriceComparisonUKCntrl'
        })
        .state('requestquote', {
            url: '/requestquote',
            templateUrl: '/views/requestquote',
            controller: 'RequestQuoteController'
        })
          .state('subscribe', {
              url: '/subscribe',
              templateUrl: '/views/Subscription',
              controller: 'SubscriptionController'
          })
        .state('fresher-asp-net', {
            url: '/fresher-asp-net',
            templateUrl: '/views/fresher-asp-net',
            controller: 'fresherAspnetCntrl'
        })
        .state('fresher-business-development-executive', {
            url: '/fresher-business-development-executive',
            templateUrl: '/views/fresher-business-development-executive',
            controller: 'fresherBusinessDevelopmentExecutiveCntrl'
        })
        .state('jr-business-development-executive', {
            url: '/jr-business-development-executive',
            templateUrl: '/views/jr-business-development-executive',
            controller: 'jrBusinessDevelopmentExecutiveCntrl'
        })
        .state('sr-business-development-executive', {
            url: '/sr-business-development-executive',
            templateUrl: '/views/sr-business-development-executive',
            controller: 'srBusinessDevelopmentExecutiveCntrl'
        })
        .state('sr-sharepoint-developer', {
            url: '/sr-sharepoint-developer',
            templateUrl: '/views/sr-sharepoint-developer',
            controller: 'srSharepointDeveloperCntrl'
        })
        .state('sr-java-developer', {
            url: '/sr-java-developer',
            templateUrl: '/views/sr-java-developer',
            controller: 'srJavaDeveloperCntrl'
        })
        .state('otherwise', {
            url: '*path',
            templateUrl: '/views/404',
            controller: 'Error404Ctrl'
        });


    //$locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}])

// Gets executed after the injector is created and are used to kickstart the application. Only instances and constants
// can be injected here. This is to prevent further system configuration during application run time.

app.run(['$templateCache', '$rootScope', '$state', '$stateParams', '$sce', '$timeout', function ($templateCache, $rootScope, $state, $stateParams, $sce, $timeout) {

    // <ui-view> contains a pre-rendered template for the current view
    // caching it will prevent a round-trip to a server at the first page load
    var view = angular.element('#ui-view');
    $templateCache.put(view.data('tmpl-url'), view.html());

    // Allows to retrieve UI Router state information from inside templates
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.EMIText = "";
    $rootScope.FromRsText = "";
    $rootScope.layout = {};
    $rootScope.layout.loading = false;

    $rootScope.$on('$routeChangeStart', function () {
        $timeout(function () {
            $rootScope.layout.loading = true;
        });
    });

    $rootScope.$on('$routeChangeSuccess', function (event, toState) {
        $rootScope.layout = toState.layout;
        $rootScope.layout.loading = false;
    });

    $rootScope.$on('$routeChangeError', function () {
        $rootScope.layout.loading = false;
    });


    $rootScope.$on("$locationChangeSuccess", function () {
        jQuery("html, body").animate({ scrollTop: 0 }, 500);
    });

}]);