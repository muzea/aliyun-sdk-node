export interface LinkImageRequest {
    /**
     * 子场景ID
     * @example `1234****`
     */
    "SubSceneId": string;
    /**
     * 图片或者视频名称（****.jpg/****.mp4）
     * @example `****.jpg`
     */
    "FileName": string;
    /**
     * 相机高度单位 cm
     * @example `160`
     */
    "CameraHeight"?: number;
    /**
     * 平台标识：PC/MOBILE，默认为PC
     * @example `PC`
     */
    "Platform"?: string;
}
