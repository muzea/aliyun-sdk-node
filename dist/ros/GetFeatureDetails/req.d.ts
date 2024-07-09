export interface GetFeatureDetailsRequest {
    /**
     * 待查询功能。取值：
     * - Terraform：Terraform托管功能。
     * - ResourceCleaner：资源清理器（ALIYUN::ROS::ResourceCleaner）功能。
     * - TemplateScratch：资源场景功能。
     * - All：所有功能。
     * @example `Terraform`
     */
    "Feature": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
