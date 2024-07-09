export interface ModifyAutoRenewAttributeRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * >您可以调用[DescribeDBClusters](~~129857~~)接口查看AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-bp1u389j9zjh5****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * >您可以调用[DescribeRegions](~~143074~~)接口查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 续费状态。取值：
     * - **AutoRenewal**：自动续费；
     * - **Normal**：手动续费；
     * - **NotRenewal**：到期不续费。
     * @example `AutoRenewal`
     */
    "RenewalStatus"?: string;
    /**
     * 续费时长。默认值为**1**。
     * - 当PeriodUnit为**Month**时，取值为1~11（整数）。
     * - 当PeriodUnit为**Year**时，取值为1、2、3、5（整数）。
     * >购买的时间越长价格越优惠，购买1年的实际价格会比购买10个月或11个月更划算。
     * @example `1`
     */
    "Duration"?: string;
    /**
     * 续费时长单位。默认值为**Month**。
     * - **Year**：年。
     * - **Month**：月。
     * @example `Year`
     */
    "PeriodUnit"?: string;
}
