export interface GetAvailabilityMetricRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 返回数据条数，取值范围[0,100]。
     * @example `10`
     */
    "Limit": number;
    /**
     * SAE应用类型。
     * - **micro_service。**
     * - **web。**
     * - **job。**
     * @example `micro_service`
     */
    "AppSource"?: string;
    /**
     * CPU分配策略。
     * - **request**：仅在有请求时分配CPU。
     * - **always**：始终分配固定CPU。
     * @example `always`
     */
    "CpuStrategy"?: string;
}
