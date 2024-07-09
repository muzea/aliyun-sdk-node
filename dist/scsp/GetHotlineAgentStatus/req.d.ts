export interface GetHotlineAgentStatusRequest {
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称，实例内唯一（登录名）
     * @example `123@123.com`
     */
    "AccountName": string;
}
