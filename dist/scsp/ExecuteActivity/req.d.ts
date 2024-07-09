export interface ExecuteActivityRequest {
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
     * 工单id
     * @example `2500000010`
     */
    "TicketId": number;
    /**
     * 操作人id
     * @example `555555`
     */
    "OperatorId": number;
    /**
     * 活动编码,可使用系统编码，也可修改系统编码使用自定义编码
     * @example `finish`
     */
    "ActivityCode": string;
    /**
     * 动作记录扩展字段，如：{"处理类型":"退费","赔偿金额":"12","处理内容":"已妥善处理","处理时间":"2020-09-21"}'
     * @example `{"处理类型":"退费","赔偿金额":"12","处理内容":"已妥善处理","处理时间":"2020-09-21"}'`
     */
    "ActivityForm"?: string;
}
