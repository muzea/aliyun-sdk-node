export interface RectifyImageRequest {
    /**
     * 图片地址
     * @example `https://www.aliyundoc.com/****.jpg`
     */
    "Url": string;
    /**
     * 相机高度单位 cm
     * @example `160`
     */
    "CameraHeight"?: number;
}
