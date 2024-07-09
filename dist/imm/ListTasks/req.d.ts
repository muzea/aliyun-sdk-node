export interface ListTasksRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 查询的任务类型列表。
     */
    "TaskTypes"?: string[];
    /**
     * 翻页标记。
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。从NextToken开始按字典序返回文件信息列表。
     * > 在一次查询中首次调用此接口时，将此值设置为空。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    "NextToken"?: string;
    /**
     * 返回结果列表中最大任务数量。取值范围为（0，100 ]，默认值为100。
     * @example `1`
     */
    "MaxResults"?: number;
    /**
     * 自定义任务标签。在创建任务时如果指定了“Tag”参数，可以通过此参数进行搜索。
     * @example `test=val1`
     */
    "TagSelector"?: string;
    /**
     * 返回的任务信息列表排序规则。取值范围如下：
     * - TaskId（默认）：任务ID。
     * - StartTime：任务开始时间。
     * - EndTime：任务结束时间。
     * @example `TaskId`
     */
    "Sort"?: string;
    /**
     * 排序方式。取值范围如下：
     * - ASC（默认）：升序
     * - DES：降序
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 任务运行状态。取值范围如下：
     * - Running：任务运行中。
     * - Succeeded：任务执行完成，成功。
     * - Failed：任务执行完成，失败。
     * @example `Succeeded`
     */
    "Status"?: string;
    /**
     * 任务开始的时间范围。可筛选某段时间内开始执行的任务。
     */
    "StartTimeRange"?: any;
    /**
     * 任务结束的时间范围。可筛选某段时间内结束执行的任务。
     */
    "EndTimeRange"?: any;
    /**
     * 是否需要返回创建任务的初始请求参数，默认值为False。
     * @example `True`
     */
    "RequestDefinition"?: boolean;
}
