export interface StartCallV2Request {
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
     * 热线外呼主叫号码。
     * @example `9065****`
     */
    "Caller": string;
    /**
     * 呼叫类型。取值：
     * - **1**：呼入
     * - **2**：呼出
     * @example `1`
     */
    "CallerType": number;
    /**
     * 热线外呼被叫号码。
     * @example `136****1111`
     */
    "Callee": string;
}
