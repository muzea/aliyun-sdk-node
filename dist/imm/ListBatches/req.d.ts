export interface ListBatchesRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `test-project`
     */
    "ProjectName": string;
    /**
     * 批处理任务状态：
     * - Ready：任务就绪，刚创建的任务处于Ready状态。
     * - Running：正在执行，正常执行的任务状态。
     * - Failed：任务失败，任务执行出错，且无法自动恢复。
     * - Suspended：任务暂停。
     * - Succeeded：任务执行完成。
     * @example `Succeed`
     */
    "State"?: string;
    /**
     * 排序字段，取值范围如下：
     * - CreateTime：按任务创建时间排序。
     * - UpdateTime：按任务更新时间排序。
     * @example `2020-11-11T06:51:17.5Z`
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
     * 自定义任务标签。在创建任务时如果指定了“Tags”参数，可以通过此参数进行搜索。
     * @example `test=val1`
     */
    "TagSelector"?: string;
    /**
     * 翻页标记。
     * 当文件总数大于设置的MaxResults时，用于翻页的Token。从NextToken开始按字典序返回文件信息列表。
     * 第一次调用此接口时，设置为空。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==`
     */
    "NextToken"?: string;
    /**
     * 返回文件的最大个数，取值范围为0~100。
     * 不设置此参数或者设置为0时，则默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
}
