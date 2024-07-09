export interface HangupThirdCallRequest {
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
}
