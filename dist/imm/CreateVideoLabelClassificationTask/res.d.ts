export interface CreateVideoLabelClassificationTaskResponse {
    /**
     * 当次请求的Request ID。
     * @example `CA995EFD-083D-4F40-BE8A-BDF75FFFE0B6`
     */
    RequestId: string;
    /**
     * 当次任务的Event ID。可使用[事件总线EventBridge](https://www.aliyun.com/product/aliware/eventbridge)服务查询该ID获取任务信息通知。
     * @example `03F-1Qt1Yn5RZZ0Zh3ZdYlDblv7****`
     */
    EventId: string;
    /**
     * 当次任务的Task ID。可使用[GetTask](~~GetTask~~)接口查看任务信息或[GetVideoLabelClassificationResult](~~478224~~)接口获取视频标签检测任务的结果。
     * @example `VideoLabelClassification-2f157087-91df-4fda-8c3e-232407ec*****`
     */
    TaskId: string;
}
