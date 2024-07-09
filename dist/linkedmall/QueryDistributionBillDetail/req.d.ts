export interface QueryDistributionBillDetailRequest {
    /**
     * 账单ID
     * @example `10000007371****`
     */
    "BillId"?: string;
    /**
     * 账单期数
     * @example `2022-11`
     */
    "BillPeriod"?: string;
    /**
     * 分销商ID
     * @example `75547******9212928`
     */
    "DistributorId"?: string;
    /**
     * 分销商城ID
     * @example `122889******114694`
     */
    "DistributionMallId"?: string;
    /**
     * 商城名称
     * @example `杭州****`
     */
    "DistributionMallName"?: string;
    /**
     * 账单状态
     */
    "BillStatus"?: string;
    /**
     * 每页数量
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 租户ID
     * @example `18******263`
     */
    "TenantId"?: string;
}
