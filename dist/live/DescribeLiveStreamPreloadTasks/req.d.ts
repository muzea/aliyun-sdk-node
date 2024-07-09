export interface DescribeLiveStreamPreloadTasksRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 任务ID。您可以通过调用[SetLiveStreamPreloadTasks](~~2519938~~)接口获取预热任务ID。
     * @example `yourTaskId`
     */
    "TaskId"?: string;
    /**
     * 直播URL，支持批量设置多个直播URL，多个URL之间用逗号（,）分隔，不超过100个。
     * @example `rtmp://guide.aliyundoc.com/liveApp****​/liveStream****`
     */
    "PlayUrl"?: string;
    /**
     * 每页大小，最大100，取值：1~100之间的任意整数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 取得第几页，默认1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 任务状态。取值：
     * - complete：已完成。
     * - pending：等待预热。
     * - preloading：预热中。
     * - failed：预热失败。
     * @example `complete`
     */
    "Status"?: string;
    /**
     * 起始时间，UTC格式，例如：2016-06-29T19:00:00Z，开始时间必须在近3天内。
     * @example `2016-06-29T19:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，UTC格式，例如：2016-06-30T19:00:00Z，EndTime和StartTime之间的间隔不能超过3天。
     * @example `2016-06-30T19:00:00Z`
     */
    "EndTime"?: string;
}
