export interface GetHotlineRuntimeInfoRequest {
    /**
     * 实例ID。
     * 请登录[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)，在**实例管理**中查看实例ID。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席账号名称。实例内唯一（登录名）。
     * @example `123@****.com`
     */
    "AccountName": string;
}
