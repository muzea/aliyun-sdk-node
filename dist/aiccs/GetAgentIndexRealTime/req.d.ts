export interface GetAgentIndexRealTimeRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 部门ID列表。
     */
    "DepIds"?: number[];
    /**
     * 技能组ID列表。
     */
    "GroupIds"?: number[];
}
