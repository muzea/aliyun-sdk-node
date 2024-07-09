export interface HangupCallRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称（坐席登录名）。
     * @example `123@123.com`
     */
    "AccountName": string;
    /**
     * 热线会话ID。
     * @example `7719786`
     */
    "CallId"?: string;
    /**
     * 入呼后，websocket中的jobId。
     * @example `7719787`
     */
    "JobId"?: string;
    /**
     * 入呼后，websocket中的connId。
     * @example `7719788`
     */
    "ConnectionId"?: string;
}
