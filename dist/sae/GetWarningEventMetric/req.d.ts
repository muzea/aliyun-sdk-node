export interface GetWarningEventMetricRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询起始时间。
     * @example `1675823135951`
     */
    "StartTime": number;
    /**
     * 查询终止时间。
     * @example `1675824035951`
     */
    "EndTime": number;
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
