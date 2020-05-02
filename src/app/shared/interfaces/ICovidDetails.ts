import { ICases } from './ICases';
import { IStateCases } from './IStateCases';
import { ITested } from './ITested';

export interface ICovidDetails{
    cases_time_series: ICases[],
    statewise: IStateCases[],
    tested: ITested[]
}