Application link: http://devilish-crib.surge.sh/
Application working:
1.	There are 4 tabs Dashboard, Latest news, Precautions and Admin login visible to user.
2.	After Admin login success, new tabs Add news and Logout will be also visible using which admin can add news.
3.	Dashboard is default screen for user.
4.	Dashboard screen has state wise coronavirus cases information
5.	User can search for state using search box on dashboard screen.
6.	On clicking state name or by clicking view record button, user will navigate to screen with district wise coronavirus cases.
7.	Latest news will show news posted by admin. By default, it contains 2 news.
8.	Precautions will show coronavirus precautions.
9.	Clicking Admin login screen will navigate to login screen where valid credentials are required to login successfully.
10.	After successful login, admin can see screen where he can add news. Admin will be redirected to latest news after posting news.
11.	Admin can logout on clicking Logout tab.


Assumptions:
1.	Dashboard page:  On dashboard-page component initialization, coronavirus details are fetched from state and district APIs. As when user see details of all states, he will get all district information for state at that point of time. State data is displayed on dashboard screen while district wise details are stored in map for state. District data is passed between components using provider DataService. Whenever user will click on view record for state, district data is fetched from map using state code as key. This will prevent application for unnecessary API hit. Whenever dashboard page will be loaded new corona virus data is fetched from both APIs. Dashboard service is used for fetching details. Search pipe is used to search for state.
2.	State details page: All district information is displayed on state details page. At the end of page there is Back button to go to dashboard screen.
3.	Latest news page: On NewsDetailComponent initialization, all news data is fetched from InMemoryDbService using NewsDetailService. Assuming news will be stored in some db so for now InMemoryDbService is used. By default two news are added in DB. When there will be back end implementation we needs to change apiURL.
4.	Precaution page: On PrecautionsComponent initialization, all precautions are fetched from InMemoryDbService using PrecautionsDetailService. 
5.	Admin login page: Reactive form is used for login page. Submi.t button is disabled if form is not valid and fields are empty. On entering username and password, AuthService will check if user is valid or not. If user is not valid error is show on page. User can also go back to dashboard page on clicking Back button. If user is valid, on clicking submit button, Add news tab will be displayed where user can add news. InMemoryDbService is not used as we don’t need data asynchronously. 
6.	Add news page: On clicking Add news tab, AuthGuard will check if user is logged in or not before redirecting to add news page. If user is logged in, add news form is displayed. Admin must enter all fields and click on submit. On submitted form is validated if any field is empty or not. News details are stored in InMemoryDbService using NewsDetailService. On adding news user will be redirected to latest news page where admin can check added news.
7.	Page not found: If user click any other URL, page not found will be displayed.
8.	App material module is used to import all MaterialModules required for application.
9.	Dashboard core module contains DashboardComponent, AddNewsComponent, PrecautionsComponent, NewsDetailComponent, StateDetailsComponent, DashboardPageComponent, SearchPipe.
10.	Images are stored in assets.
11.	Whenever component is visited, ngOnInit lifecycle is used to fetch data from services.
12.	Angular material is used for UI.
13.	Username: Rohit, password: 123
