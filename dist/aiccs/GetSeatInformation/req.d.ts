export interface GetSeatInformationRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**实例管理**中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 开始时间戳。单位：毫秒。
     * @example `1615083365000`
     */
    "startDate"?: number;
    /**
     * 结束时间戳。单位：毫秒。
     * @example `1617761765000`
     */
    "endDate"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `10`
     */
    "pageSize"?: number;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "currentPage"?: number;
    /**
     * 部门ID列表。
     */
    "depIds"?: number[];
    /**
     * 是否根据部门分组查询。默认值：**false**。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "existDepartmentGrouping"?: boolean;
}
