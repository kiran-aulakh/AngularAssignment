import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth-service';
import { Router } from '@angular/router';
import { INews } from 'src/app/shared/interfaces/INews';
import { NewsDetailService } from 'src/app/core/services/news.detail.service';

@Component({
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  addNewsForm: FormGroup;
  submitted = false;  
  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router,private newsService: NewsDetailService) { }

  ngOnInit(){
    this.addNewsForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      summary: ['', Validators.required],
      news: ['', Validators.required]
  });
  }

  onSubmit(news: INews){
    this.submitted = true;
    if (this.addNewsForm.invalid) {
      return;
  }
  this.newsService.addNews(news).subscribe();
  this.router.navigate(['/covid/newsDetail']);
  }

  get f() { return this.addNewsForm.controls; }

  

}
