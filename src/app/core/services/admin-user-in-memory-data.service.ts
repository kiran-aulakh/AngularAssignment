import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from '../../shared/interfaces/IUsers';
import { INews } from 'src/app/shared/interfaces/INews';
import { IPrecautions } from 'src/app/shared/interfaces/IPrecautions';

@Injectable({
  providedIn: 'root'
})

export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {
    const userData: IUser[] = [{
      "id": 1,
      "username": "Rohit",
      "password": "123"
    }, {
      "id": 2,
      "username": "Sana",
      "password": "234"
    }, , {
        "id": 3,
        "username": "Akshit",
        "password": "456"
      }
];

const newsDetails: INews[]=[
    {
      "title":"IIT Guwahati and Hester Biosciences Limited join hands to develop Covid-19 vaccine",
      "description":"IIT Guwahati, in collaboration with Hester Biosciences Limited, is trying to develop a vaccine against Covid-19. ",
      "summary":" Indian Institute of Technology Guwahati is collaborating with Hester Biosciences Limited, a pharmaceutical company based in Ahmedabad, Gujarat, to work on the vaccine development ",
      "news":"",
    },
    {
        "title":"Statement on the third meeting of the International Health Regulations (2005) Emergency Committee regarding the outbreak of coronavirus disease (COVID-19)",
        "description":"The third meeting of the Emergency Committee convened by the WHO Director-General under the International Health Regulations (2005) (IHR) regarding the coronavirus disease (COVID-19), took place on Thursday, 30 April 2020, from 12:00 to 17:45 Geneva time (CEST). ",
        "summary":"The third meeting of the Emergency Committee convened by the WHO Director-General under the International Health Regulations (2005) (IHR) regarding the coronavirus disease (COVID-19), took place on Thursday, 30 April 2020, from 12:00 to 17:45 Geneva time (CEST). Proceedings of the meeting Members and advisors of the Emergency Committee were convened by teleconference. Membership of the Emergency Committee was expanded to reflect the nature of the pandemic and the need to include additional areas of expertise. The Director-General welcomed the Committee, thanked them for their commitment to enhancing global public health, and provided an overview of the major achievements in the COVID-19 response since the last Emergency Committee meeting on 30 January 2020. Representatives of the legal department and the Department of Compliance, Risk Management, and Ethics (CRE) briefed the members on their roles and responsibilities",
        "news":"he third meeting of the Emergency Committee convened by the WHO Director-General under the International Health Regulations (2005) (IHR) regarding the coronavirus disease (COVID-19), took place on Thursday, 30 April 2020, from 12:00 to 17:45 Geneva time (CEST). Proceedings of the meeting Members and advisors of the Emergency Committee were convened by teleconference. Membership of the Emergency Committee was expanded to reflect the nature of the pandemic and the need to include additional areas of expertise. The Director-General welcomed the Committee, thanked them for their commitment to enhancing global public health, and provided an overview of the major achievements in the COVID-19 response since the last Emergency Committee meeting on 30 January 2020. Representatives of the legal department and the Department of Compliance, Risk Management, and Ethics (CRE) briefed the members on their roles and responsibilities. The Ethics Officer from CRE provided the members and advisers with an overview of the WHO Declaration of Interest process. The members and advisers were made aware of their individual responsibility to disclose to WHO, in a timely manner, any interests of a personal, professional, financial, intellectual or commercial nature that may give rise to a perceived or direct conflict of interest. They were additionally reminded of their duty to maintain the confidentiality of the meeting discussions and the work of the committee. Only those committee members and advisers who were not considered to have any perceived or direct conflict of interest participated in the meeting. The Secretariat turned the meeting over to the Chair, Professor Houssin. He also welcomed the Committee and reviewed the objectives and agenda of the meeting. The WHO Regional Emergency Directors and the Executive Director of the WHO Health Emergencies Programme (WHE) provided regional and the global situation overview. After ensuing discussion, the Committee unanimously agreed that the outbreak still constitutes a public health emergency of international concern (PHEIC) and offered advice to the Director-General. The Director-General declared that the outbreak of COVID-19 continues to constitute a PHEIC. He accepted the advice of the Committee to WHO and issued the Committee’s advice to States Parties as Temporary Recommendations under the IHR. The Emergency Committee will be reconvened within three months or earlier, at the discretion of the Director-General. The Director-General thanked the Committee for its work.",
      }
  ];
  
  const precautionDetails: IPrecautions[] = [
      {
          "precaution": "STAY home"
      },
      {
        "precaution": "KEEP a safe distance"
    },
    {
        "precaution": "WASH hands often"
    },
    {
        "precaution": "COVER your cough"
    },
    {
        "precaution": "SICK? Call the helpline"
    },
    {
        "precaution": "Stay informed and follow advice given by your healthcare provider"
    },
    {
        "precaution": "Avoid touching eyes, nose and mouth"
    },
    {
        "precaution": "Practice respiratory hygiene"
    },
    {
        "precaution": "Maintain social distancing"
    },
    {
        "precaution": "Stay informed and follow advice given by your healthcare provider"
    },
  ];
    return {userData,newsDetails,precautionDetails};
  }

/** Method that generates the ids of user when not passed. */
  genId(userData: IUser[]): number {
    return userData.length > 0 ? Math.max(...userData.map(user => user.id)) + 1 : 1;
  }
}
