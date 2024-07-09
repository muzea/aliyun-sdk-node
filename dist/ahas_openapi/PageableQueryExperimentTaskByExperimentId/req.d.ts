export interface PageableQueryExperimentTaskByExperimentIdRequest {
    /**
     * 故障演练ID。
     * @example `1234567890123456789`
     */
    "ExperimentId": string;
    /**
     * 页码。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "Size"?: number;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 演练所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 演练所属地域ID（调用公网环境时使用）。
     * @example `cn-public`
     */
    "AhasRegionId"?: string;
}
