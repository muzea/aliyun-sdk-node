export interface PredImageRequest {
    /**
     * 子场景ID
     * @example `2345****`
     */
    "SubSceneId": string;
    /**
     * 是否门预测
     * @example `true`
     */
    "DetectDoor": boolean;
    /**
     * 门数量
     * @example `2`
     */
    "CountDetectDoor"?: number;
    /**
     * 是否垂直矫正
     * @example `true`
     */
    "CorrectVertical": boolean;
}
