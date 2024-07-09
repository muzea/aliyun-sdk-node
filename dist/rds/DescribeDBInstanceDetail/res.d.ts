export interface DescribeDBInstanceDetailResponse {
    /**
     * 激活状态。
     * @example `Invalid`
     */
    ActivationState: string;
    /**
     * 实例ID。
     * @example `rm-bp6wjk5xxxxxxxxxx`
     */
    DBInstanceId: string;
    /**
     * License类型。
     * @example `Normal`
     */
    LicenseType: string;
    /**
     * 请求ID。
     * @example `06B220E2-EAC5-4DBE-A1FC-1B62DB6A****`
     */
    RequestId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
