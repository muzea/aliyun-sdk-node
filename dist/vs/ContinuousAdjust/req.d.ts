export interface ContinuousAdjustRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 光圈速度参数，正值表示光圈变大。
     * 取值：-1.0~1.0
     * @example `0.5`
     */
    "Iris"?: string;
    /**
     * 变焦速度参数，正值表示焦距变远。
     * 取值：-1.0~1.0
     * @example `0.5`
     */
    "Focus"?: string;
}
