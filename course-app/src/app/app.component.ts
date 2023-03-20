import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public userName: string = '';
    public infoTitle: string = 'Your List Is Empty';

    private isCurrentPage: CurrentPage = CurrentPage.Main;

    public isLoginPage: boolean = this.isCurrentPage === CurrentPage.Login;
    public isRegistrationPage: boolean = this.isCurrentPage === CurrentPage.Registration;
    public isMainPage: boolean = this.isCurrentPage === CurrentPage.Main;


    onLogin(): void {
        this.isCurrentPage = CurrentPage.Login;
        this.changePage()
    }

    openRegistrationPage(): void {
        this.isCurrentPage = CurrentPage.Registration;
        this.changePage()
    }

    private changePage(): void {
        this.isLoginPage = this.isCurrentPage === CurrentPage.Login;
        this.isRegistrationPage = this.isCurrentPage === CurrentPage.Registration;
        this.isMainPage = this.isCurrentPage === CurrentPage.Main;
    }
}

enum CurrentPage {
    Main,
    Login,
    Registration,
}
