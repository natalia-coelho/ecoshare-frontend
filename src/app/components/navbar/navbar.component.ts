import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProductService } from 'src/app/services/product.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public searchTerm: string = '';
  public produtos: Produto[] = [];
  userName: string | null = '';
  userRole: string | null = '';

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private productService: ProductService,
    private authService: AuthenticationService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.userName = this.authService.getUserName();
    this.userRole = this.authService.getRole();
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  onSearch() {
    this.router.navigate(['/product-filter'], { queryParams: { term: this.searchTerm } });
  }
}
