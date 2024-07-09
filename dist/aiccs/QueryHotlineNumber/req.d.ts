export interface QueryHotlineNumberRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 热线号码。支持模糊查询。
     * @example `0571****2211`
     */
    "HotlineNumber"?: string;
    /**
     * 部门ID。
     * @example `2256****`
     */
    "DepartmentId"?: number;
    /**
     * 技能组列表。
     */
    "GroupIds"?: number[];
}
