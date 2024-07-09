export interface DescribeDrdsTasksRequest {
    /**
     * 实例ID。
     * @example `drdsxxxxxxxxxxxx`
     */
    "DrdsInstanceId": string;
    /**
     * 数据库名称。
     * @example `test`
     */
    "DbName"?: string;
    /**
     * 任务类型。
     * @example `test`
     */
    "TaskType"?: string;
}
