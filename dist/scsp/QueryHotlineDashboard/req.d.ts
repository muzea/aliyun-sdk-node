export interface QueryHotlineDashboardRequest {
    /**
     * AICCS实例ID，登陆智能联络中心控制台(https://help.aliyun.com/product/126730.html)上可查看。
     * @example `ccc_xp_***`
     */
    "InstanceId": string;
    /**
     * 开始时间。
     * @example `1636473600000`
     */
    "StartDate": number;
    /**
     * 结束时间。
     * @example `1636473600000`
     */
    "EndDate": number;
    /**
     * 部门ID集合。
     */
    "DepartmentIdList"?: number[];
    /**
     * 坐席ID集合。
     */
    "ServicerIdList"?: number[];
    /**
     * 排序字段集合。
     */
    "SortFieldList"?: string[];
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPageNum"?: number;
    /**
     * 页面大小。
     * @example `10`
     */
    "PageSize"?: number;
}
