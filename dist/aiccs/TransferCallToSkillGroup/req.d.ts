export interface TransferCallToSkillGroupRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，即账号注册时填写的手机或邮箱。实例内唯一。
     * @example `username@example.com`
     */
    "AccountName": string;
    /**
     * 技能组ID。
     * @example `356543`
     */
    "SkillGroupId": number;
    /**
     * 热线会话ID。
     * @example `7719786`
     */
    "CallId"?: string;
    /**
     * 呼入后，websocket中的jobId。
     * @example `7719787`
     */
    "JobId"?: string;
    /**
     * 呼入后，websocket中的connId。
     * @example `7719788`
     */
    "ConnectionId"?: string;
    /**
     * 呼入后，websocket中的holdConnId（仅在双步转时传入）。
     * @example `0`
     */
    "HoldConnectionId"?: string;
    /**
     * 默认值为**1**。取值：
     * - **1**：单步转。
     * - **2**：双步转。
     * @example `1`
     */
    "Type"?: number;
    /**
     * 默认值为**true**，取值：
     * - **true**：单步转。
     * - **false**：双步转。
     * @example `true`
     */
    "IsSingleTransfer"?: boolean;
}
