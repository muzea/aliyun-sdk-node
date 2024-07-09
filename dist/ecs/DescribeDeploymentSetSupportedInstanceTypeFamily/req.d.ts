export interface DescribeDeploymentSetSupportedInstanceTypeFamilyRequest {
    /**
     * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 部署策略。取值范围：
     * - Availability：高可用策略。
     * - AvailabilityGroup：部署集组高可用策略。
     * - LowLatency：网络低时延策略。
     * 默认值：Availability。
     * @example `Availability`
     */
    "Strategy"?: string;
}
