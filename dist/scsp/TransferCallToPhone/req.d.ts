export interface TransferCallToPhoneRequest {
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
     * 坐席账号名称（坐席登录名）
     * @example `123@123.com`
     */
    "AccountName": string;
    /**
     * 热线转交主叫号码
     * @example `9065446`
     */
    "Caller"?: string;
    /**
     * 热线转交被叫号码
     * @example `136098792`
     */
    "Callee"?: string;
    /**
     * 入呼后，websocket中的acid
     * @example `7719786`
     */
    "CallId"?: string;
    /**
     * 入呼后，websocket中的jobId
     * @example `7719787`
     */
    "JobId"?: string;
    /**
     * 入呼后，websocket中的connId
     * @example `7719788`
     */
    "ConnectionId"?: string;
    /**
     * 入呼后，websocket中的holdConnId（ 仅在双步转时传入）
     * @example `0`
     */
    "HoldConnectionId"?: string;
    /**
     * 1:单步转，2:双步转，默认为1
     * @example `1`
     */
    "Type"?: number;
    /**
     * true:单步转，false:双步转，默认单步转
     * @example `true`
     */
    "IsSingleTransfer"?: boolean;
    "callerPhone"?: string;
    "calleePhone"?: string;
}
