export interface GetSuspiciousStatisticsRequest {
    /**
     * 指定访问源的IP地址。
     * @example `10.12.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 指定要查询的资产分组ID。多个资产分组ID使用半角逗号（,）分隔。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取该参数。
     * @example `9997897`
     */
    "GroupIdList": string;
}
