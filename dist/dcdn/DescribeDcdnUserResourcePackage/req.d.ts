export interface DescribeDcdnUserResourcePackageRequest {
    /**
     * 资源包状态。取值：
     * - **valid**：有效。
     * - **closed**：无效。
     * - **空**：查询所有。
     * @example `valid`
     */
    "Status"?: string;
}
