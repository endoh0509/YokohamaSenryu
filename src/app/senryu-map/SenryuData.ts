/**
 * Created by katsuya on 2017/02/20.
 */

export class SenryuData{

  id: number = 0;
  lat: number = 51.678418;
  lng: number = 7.809007;
  member: string = '';
  senryuTop: string = 'テストだよ';
  senryuMiddle: string = 'ああテストだよ';
  senryuBottom: string = 'テストだよ';
  insTime: string = "2017-01-31 08:51:19";
  menmber: string = 'ますたい';
  menmberId: number = 0;

  constructor(lat: number, lng: number, member: string, senryuTop: string, senryuMiddle: string, senryuBottom: string){
    this.lat = lat;
    this.lng = lng;
    this.member = member;
    this.senryuTop = senryuTop;
    this.senryuMiddle = senryuMiddle;
    this.senryuBottom = senryuBottom;
  }
}
