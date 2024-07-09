export interface CreateSmartAccessGatewaySoftwareRequest {
    /**
     * 智能接入网关APP实例的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关APP实例的购买时长，单位：月。
     * 取值：**1**~**9**、**12**、**24**、**36**。
     * @example `12`
     */
    "Period": number;
    /**
     * 是否自动支付智能接入网关APP实例的账单。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * 如果您选择不自动支付账单，在您调用本接口后，请前往控制台的订单中心完成支付，实例才能创建成功。
     * @example `false`
     */
    "AutoPay": boolean;
    /**
     * 智能接入网关APP实例的计费类型，取值：**PREPAY**，预付费。标识智能接入网关APP实例为先付费后使用的资源。
     * @example `PREPAY`
     */
    "ChargeType": string;
    /**
     * 智能接入网关APP实例的客户端账号数量规格。
     * @example `5`
     */
    "UserCount": number;
    /**
     * 系统每月赠送给每个客户端账号的流量套餐规格，单位：GB。取值：**5**。
     * >目前仅支持每月赠送给每个客户端账号5 GB的流量套餐。
     * @example `5`
     */
    "DataPlan": number;
}
