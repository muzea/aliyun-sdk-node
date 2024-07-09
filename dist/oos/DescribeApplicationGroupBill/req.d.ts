export interface DescribeApplicationGroupBillRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `test_application`
     */
    "ApplicationName": string;
    /**
     * 应用分组名称。
     * @example `test_application_group`
     */
    "Name": string;
    /**
     * 账单日期，YYYY－MM。
     * @example `2023-06`
     */
    "BillingCycle": string;
    /**
     * 资源类型。
     * @example `ALIYUN::ECS::INSTANCE`
     */
    "ResourceType": string;
    /**
     * 分页大小。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `-`
     */
    "NextToken"?: string;
}
