export interface ChangeResellerConsumeAmountRequest {
    /**
     * 消费金额调整方向 increase:增加,用户消费增加金额 decrease:减少,用户充值减少金额 [必填]
     * @example `increase/decrease`
     */
    "AdjustType": string;
    /**
     * 调整金额,单位为元
     * @example `10.00`
     */
    "Amount": string;
    /**
     * 币种
     * @example `CNY`
     */
    "Currency": string;
    /**
     * 业务类型
     * @example `quota_amount_adjust`
     */
    "BusinessType": string;
    /**
     * 请求来源，填写系统名称即可
     * @example `system`
     */
    "Source": string;
    /**
     * 外部业务主键ID，用于做幂等性校验使用
     * @example `1647396865`
     */
    "OutBizId": string;
    /**
     * 消息扩展字段。
     * @example `{}`
     */
    "ExtendMap"?: string;
}
