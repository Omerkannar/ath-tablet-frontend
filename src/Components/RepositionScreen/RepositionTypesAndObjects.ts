export class BaseProps {
  id: number | null = 0;
  name: string = "l";
  points: BasePoint[] = [];
}

export class BasePoint {
  id: number | null = 0;
  name: string = "";
  x: number | null = 0;
  y: number | null = 0;
  lat: number = 0;
  long: number = 0;
  additionalData: AdditionalData[] = [];
}

export class AdditionalData {
  info: string = "";
  lat: number = 0;
  long: number = 0;
  heading: number = 0;
  alt: number = 0;
  vel: number = 0;
  engineOn: boolean = false;
  inAir: boolean = false;
}

export class Point {
  id: number | null = 0;
  name: string = "";
  x: number | null = 0;
  y: number | null = 0;
  lat: number = 0;
  long: number = 0;
}

export class ButtonsActive {
  downwindLeft: boolean = false;
  downwindRight: boolean = false;
  takeoff: boolean = false;
  finalClose: boolean = false;
  finalMedium: boolean = false;
  finalFar: boolean = false;
}