export interface DescribeAvailableInstanceTypesRequest {
    /**
     * 地域ID
     * @example `cn-shanghai`
     */
    "Region": string;
    /**
     * 可用区ID
     * @example `cn-beijing-g`
     */
    "ZoneId": string;
    /**
     * 磁盘类型
     * @example `cloud_efficiency`
     */
    "DiskType": string;
    /**
     * 付费类型
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 网络类型
     * @example `vpc`
     */
    "Network"?: string;
    /**
     * 是否属于IO优化型实例
     * @example `true`
     */
    "IoOptimized"?: boolean;
    /**
     * 排序依据
     * @example `vcpu`
     */
    "SortBy"?: string;
    /**
     * 排序方式
     * @example `asc`
     */
    "Order"?: string;
    /**
     * -
     * @example `-`
     */
    "Filter"?: string;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否使用用户角色查询可用规格（默认使用混合云容灾服务账号进行查询），部分白名单实例规格需要开启该开关才能查询到结果。
     * @example `true`
     */
    "UserClient"?: boolean;
}
