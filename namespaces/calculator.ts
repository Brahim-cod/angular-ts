namespace Calculator {
    export class BasicCalculator {
        private x: number;
        private y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        public add(): number {
            return this.x + this.y;
        }
    }
}