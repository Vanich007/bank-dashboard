// // import { TestBed } from '@angular/core/testing';

// import { InvoiceService } from './invoice.service';

// // describe('InvoiceService', () => {
// //   let service: InvoiceService;

// //   beforeEach(() => {
// //     TestBed.configureTestingModule({});
// //     service = TestBed.inject(InvoiceService);
// //   });

// // });
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { TestBed } from '@angular/core/testing';

// describe('invoiceService - testing HTTP request method getData()', () => {
//   let httpTestingController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [InvoiceService],
//     });

//     invoiceService = TestBed.inject(InvoiceService);
//     httpTestingController = TestBed.inject(HttpTestingController);
//   });

//   it('can test HttpClient.get', () => {
//     const data = [1, 2, 3];

//     invoiceService
//       .getData()
//       .subscribe((response) => expect(response).toBe(data));

//     const req = httpTestingController.expectOne('/api/data');

//     expect(req.request.method).toBe('GET');

//     req.flush(data);
//   });

//   afterEach(() => httpTestingController.verify());
// });
