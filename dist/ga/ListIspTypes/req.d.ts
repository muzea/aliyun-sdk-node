export interface ListIspTypesRequest {
    /**
     * 待查询的加速地域ID。
     * @example `cn-hangzhou`
     */
    "BusinessRegionId": string;
    /**
     * 待查询的全球加速实例类型。取值：
     * - **basic**：基础型全球加速实例。
     * - **standard**：标准型全球加速实例。
     * @example `basic`
     */
    "AcceleratorType"?: string;
    /**
     * 待查询的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    "AcceleratorId"?: string;
}
