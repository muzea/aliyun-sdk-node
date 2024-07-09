export interface DescribeAdvicesRequest {
    /**
     * 巡检结果ID。
     * @example `40200899`
     */
    "AdviceId"?: number;
    /**
     * 巡检项Code。
     * @example `EcsHighCpuUtilization`
     */
    "CheckId"?: string;
    /**
     * 资源/实例ID。
     * @example `i-2zecnwitr2s7aca6****`
     */
    "ResourceId"?: string;
    /**
     * 请求使用的语言。
     * @example `zh`
     */
    "Language"?: string;
    /**
     * 不包含的巡检结果ID。
     * @example `40200889`
     */
    "ExcludeAdviceId"?: number;
    /**
     * 云产品Code。
     * @example `ecs`
     */
    "Product"?: string;
}
