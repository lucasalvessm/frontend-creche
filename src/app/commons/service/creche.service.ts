import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND } from '../urls';
import { Creche } from '../model/creche.model';
import { Observable } from 'rxjs';
import { CrecheLight } from '../model/creche.light.model';

@Injectable()
export class CrecheService {
    uri = '/creches';

    constructor(private httpClient: HttpClient) { }

    insert = (crecheList: Creche): Observable<Creche> =>
        this.httpClient.post<Creche>(`${BACKEND}/${this.uri}`, crecheList);

    list = (): Observable<CrecheLight[]> =>
        this.httpClient.get<CrecheLight[]>(`${BACKEND}/${this.uri}`);

    detail = (id: number): Observable<Creche> =>
        this.httpClient.get<Creche>(`${BACKEND}/${this.uri}/${id}`);
}