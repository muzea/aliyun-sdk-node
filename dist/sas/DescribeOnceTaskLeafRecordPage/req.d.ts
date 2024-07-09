export interface DescribeOnceTaskLeafRecordPageRequest {
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 分页查询，当前显示的页数。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 任务类型。取值：
     * - **IMAGE_SCAN**：镜像扫描
     * - **IMAGE\_REGISTRY\_PULL**：镜像资产同步
     * @example `CLIENT_PROBLEM_CHECK`
     */
    "TaskType": string;
    /**
     * 是否关联扩展信息。
     * @example `true`
     */
    "RelateInfo": boolean;
    /**
     * 指定要获取的任务ID。
     * @example `1471d8ebb96795b41ede090b9758****`
     */
    "TaskId"?: string;
    /**
     * 请求来源。
     * @example `console_batch`
     */
    "Source"?: string;
    /**
     * 开始时间的时间戳。
     * @example `1648438617000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳。
     * @example `1668064495000`
     */
    "EndTime"?: number;
    /**
     * 状态列表。
     */
    "StatusList"?: string[];
}
