export interface GetDepGroupTreeDataRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 坐席ID。
     * 可调用[GetAgent](https://help.aliyun.com/zh/aiccs/developer-reference/api-aiccs-2019-10-15-getagent)接口，查看返回参数的**AgentId**，即坐席ID。
     * @example `123456`
     */
    "AgentId": number;
}
