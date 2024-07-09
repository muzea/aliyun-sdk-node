export interface UpgradeSmartAccessGatewaySoftwareRequest {
    /**
     * 智能接入网关APP实例ID。
     * @example `sag-8biez7habqwmx6****`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关APP实例所属地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 是否自动支付预付费实例的账单：
     * - **false**：表示否。
     * - **true**：表示是。
     * > 如果非自动支付，调用本接口后，您还需要到智能接入网关管理控制台完成账单支付。
     * @example `true`
     */
    "AutoPay": boolean;
    /**
     * 每个账号每月赠送的流量套餐规格。单位为GB。
     * > 目前仅支持每个账号每个月赠送5 GB流量。
     * @example `5`
     */
    "DataPlan": number;
    /**
     * 智能接入网关APP客户端账号数规格。
     * 购买后可创建相应数量的客户端账号，一般为每个需要登录的员工创建一个账号。
     * @example `5`
     */
    "UserCount": number;
}
