import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const indicators = [
      {
        id: '1',
        maxValue: 2000,
        minValue: 0,
        title: 'Уровень карналита в силосной башне №',
        value: 489
      },
      {
        id: '2',
        maxValue: 1500,
        minValue: 500,
        title: 'Уровень карналита в силосной башне №',
        value: 375
      },
      {
        id: '3',
        maxValue: 2000,
        minValue: 500,
        title: 'Уровень карналита в силосной башне №',
        value: 839
      },
      {
        id: '4',
        maxValue: 2000,
        minValue: 200,
        title: 'Уровень карналита в силосной башне №',
        value: 1578
      },
      {
        id: '5',
        maxValue: 3000,
        minValue: 100,
        title: 'Уровень карналита в силосной башне №',
        value: 2600
      },
      {
        id: '6',
        maxValue: 2000,
        minValue: 200,
        title: 'Уровень карналита в силосной башне №',
        value: 2500
      },
      {
        id: '7',
        maxValue: 2000,
        minValue: 200,
        title: 'Уровень карналита в силосной башне №',
        value: 1300
      },
      {
        id: '8',
        maxValue: 600,
        minValue: 500,
        title: 'Уровень карналита в силосной башне №',
        value: 550
      },
    ];
    return { indicators };
  }
}
