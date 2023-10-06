export default class Utils {
  
  static generateListYears(startYear: number, length: number = 10): number[] {
    return Array.from({ length }, (_, index) => index + startYear);
  }

}
