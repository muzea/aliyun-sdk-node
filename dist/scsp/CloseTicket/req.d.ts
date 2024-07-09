export interface CloseTicketRequest {
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 工单id（工单编号）
     * @example `2500000010`
     */
    "TicketId": number;
    /**
     * 自定义json动作记录，例如：{"reason":"业务系统强制关闭"}
     * @example `{"reason":"业务系统强制关闭"}`
     */
    "ActionItems": string;
    /**
     * 操作人id
     * @example `555555`
     */
    "OperatorId": number;
}
