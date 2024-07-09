export interface ListDistributionMallRequest {
    /**
     * 分销商城id
     */
    "DistributionMallId"?: string;
    /**
     * 商城名称
     * @example `阿里云图书专营店`
     */
    "DistributionMallName"?: string;
    /**
     * 分销商ID
     */
    "DistributorId"?: string;
    /**
     * 渠道供应商id
     * @example `113428528`
     */
    "ChannelSupplierId"?: string;
    /**
     * 开始时间
     * @example `2021-10-24 15:29:38`
     */
    "StartDate"?: string;
    /**
     * 结束时间
     * @example `2021-10-26 10:29:13`
     */
    "EndDate"?: string;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 租户Id
     */
    "TenantId"?: string;
}
