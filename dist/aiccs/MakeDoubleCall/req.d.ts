export interface MakeDoubleCallRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `agent_***`
     */
    "InstanceId": string;
    /**
     * 账号名称。
     * @example `12345`
     */
    "AccountName": string;
    /**
     * 坐席手机号。
     * > 需要通过坐席手机呼叫才需要填写
     * @example `150****1234`
     */
    "ServicerPhone"?: string;
    /**
     * 用户手机号。
     * @example `1502123****`
     */
    "MemberPhone": string;
    /**
     * 外呼主叫号码。
     * @example `0571000****`
     */
    "OutboundCallNumber": string;
    /**
     * 业务携带数据。JSON格式。
     * @example `{"bizId": 123456}`
     */
    "BizData"?: string;
}
