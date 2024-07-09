export interface DowngradeSmartAccessGatewaySoftwareRequest {
    /**
     * 智能接入网关App实例ID。
     * @example `sag-n2uym2h45lnd31****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关App实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 是否为自动支付预付费实例的账单。取值：
     * - **false**（默认值）：表示否。
     * - **true**：表示是。
     * @example `false`
     */
    "AutoPay": boolean;
    /**
     * 智能接入网关APP账号每月赠送的流量套餐规格，单位：GB，目前仅支持每个账号每个月赠送5 GB流量。
     * @example `5`
     */
    "DataPlan": number;
    /**
     * 智能接入网关APP账号数规格，购买后可创建相应数量的账号，一般为每个需要登录的员工创建一个账号。
     * @example `5`
     */
    "UserCount": number;
}
