import { AdaptedEvent, Config } from '../interfaces';
import GestureHandler from './GestureHandler';
export default class TapGestureHandler extends GestureHandler {
    private maxDeltaX;
    private maxDeltaY;
    private maxDistSq;
    private maxDurationMs;
    private maxDelayMs;
    private numberOfTaps;
    private minNumberOfPointers;
    private currentMaxNumberOfPointers;
    private startX;
    private startY;
    private offsetX;
    private offsetY;
    private lastX;
    private lastY;
    private waitTimeout;
    private delayTimeout;
    private tapsSoFar;
    init(ref: number, propsRef: React.RefObject<unknown>): void;
    updateGestureConfig({ enabled, ...props }: Config): void;
    protected resetConfig(): void;
    protected transformNativeEvent(): {
        x: number;
        y: number;
        absoluteX: number;
        absoluteY: number;
    };
    private clearTimeouts;
    private startTap;
    private endTap;
    protected onPointerDown(event: AdaptedEvent): void;
    protected onPointerAdd(event: AdaptedEvent): void;
    protected onPointerUp(event: AdaptedEvent): void;
    protected onPointerRemove(event: AdaptedEvent): void;
    protected onPointerMove(event: AdaptedEvent): void;
    protected onPointerOutOfBounds(event: AdaptedEvent): void;
    private updateState;
    private trySettingPosition;
    private shouldFail;
    activate(): void;
    protected onCancel(): void;
    protected resetProgress(): void;
}
