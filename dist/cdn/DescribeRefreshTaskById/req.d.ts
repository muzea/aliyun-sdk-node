export interface DescribeRefreshTaskByIdRequest {
    /**
     * 待查询的任务ID。
     * 您可以调用[RefreshObjectCaches](~~91164~~)接口，从其返回值中获取刷新预热的任务ID，并通过任务ID查询源站资源的刷新状态。
     * 支持同时传入多个任务ID，多个任务ID之间用英文逗号（,）分隔，最多支持同时传入10个任务ID。
     * @example `12345678`
     */
    "TaskId": string;
}
