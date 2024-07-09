export interface RefreshAdvisorCheckRequest {
    /**
     * 资源/实例ID。
     * @example `i-2zecnwitr2s7aca6****`
     */
    "ResourceId"?: string;
    /**
     * 巡检项Code。
     * @example `EcsHighCpuUtilization`
     */
    "CheckId"?: string;
    /**
     * 产品Code。
     * @example `ecs`
     */
    "Product"?: string;
    /**
     * 使用的语言。
     * @example `zh`
     */
    "Language"?: string;
}
