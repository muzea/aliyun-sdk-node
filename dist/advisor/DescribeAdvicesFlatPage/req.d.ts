export interface DescribeAdvicesFlatPageRequest {
    /**
     * 巡检结果ID。
     * @example `12345678`
     */
    "AdviceId"?: number;
    /**
     * 巡检项Code。
     * @example `EcsHighCpuUtilization`
     */
    "CheckId"?: string;
    /**
     * 资源/实例ID。
     * @example `i-2zecnwitr2s7aca6****
    `
     */
    "ResourceId"?: string;
    /**
     * 请求使用的语言。
     * @example `zh`
     */
    "Language"?: string;
    /**
     * 云产品Code。
     * @example `ecs`
     */
    "Product"?: string;
    /**
     * 分页号。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数据条数。
     * @example `10`
     */
    "PageSize"?: number;
}
