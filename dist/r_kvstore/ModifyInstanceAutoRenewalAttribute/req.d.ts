export interface ModifyInstanceAutoRenewalAttributeRequest {
    /**
     * 实例ID。多个实例ID用英文逗号（,）分隔。
     * > 最多允许传入30个实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 自动续费周期，取值范围为**1**~**12**，单位为月。实例即将到期时，系统将自动地以选择的续费时长进行续费。
     * > 当**AutoRenew**参数取值为**true**时，本参数才可用且必须传入。
     * @example `3`
     */
    "Duration"?: string;
    /**
     * 开启或关闭自动续费，取值：
     * * **true**：开启。
     * * **false**。关闭。
     * > 默认值：**false**。
     * @example `true`
     */
    "AutoRenew"?: string;
}
