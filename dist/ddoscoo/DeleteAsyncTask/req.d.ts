export interface DeleteAsyncTaskRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 要删除的任务ID。
     * > 您可以调用[DescribeAsyncTasks](~~DescribeAsyncTasks~~)查询所有异步导出任务ID。
     * @example `1`
     */
    "TaskId": number;
}
