export interface CheckCloudResourceAuthorizedRequest {
    /**
     * 实例ID。
     * @example `dds-bp18f7d6b6a7****`
     */
    "DBInstanceId": string;
    /**
     * 实例所属地域，您可以调用[DescribeDBInstanceAttribute](~~62010~~)查询。
     * @example `cn-hangzhou`
     */
    "TargetRegionId": string;
}
