import { Sprite } from '@pixi/sprite';
import { TextStyle } from '@pixi/text';

export class HTMLText extends Sprite
{
    constructor(
      text?: string,
      style?: Partial<TextStyle>,
      canvas?: HTMLCanvasElement,
      cssStyle?: Record<string, string>,
      resolution?: number,
    );
    readonly canvas: HTMLCanvasElement;
    readonly context: CanvasRenderingContext2D;
    text: string;
    style: TextStyle;
    cssStyle: Record<string, string>;
    resolution: number;
    updateText(respectDirty?: boolean): void;
}
