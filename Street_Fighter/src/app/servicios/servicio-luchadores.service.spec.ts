import { TestBed } from '@angular/core/testing';

import { ServicioLuchadoresService } from './servicio-luchadores.service';

describe('ServicioLuchadoresService', () => {
  let service: ServicioLuchadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioLuchadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
