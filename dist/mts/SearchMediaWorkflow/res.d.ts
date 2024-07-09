export interface SearchMediaWorkflowResponse {
    /**
     * 总条数。
     * @example `1`
     */
    TotalCount: number;
    MediaWorkflowList: {
        /**
         * 媒体工作流列表。
         */
        MediaWorkflow: {
            /**
             * 创建时间。
             * @example `2016-04-01T05:38:41Z`
             */
            CreationTime: string;
            /**
             * 媒体工作流ID。
             * @example `88c6ca184c0e4578645b665e2a12****`
             */
            MediaWorkflowId: string;
            /**
             * 状态。可取值：
             * - **Inactive**：已停用。
             * - **Active**：已启用。
             * - **Deleted**：已删除。
             * @example `Active`
             */
            State: string;
            /**
             * 触发模式。可取值：
             * - **OssAutoTrigger**：自动触发。
             * - **NotInAuto**：不自动触发。
             * @example `OssAutoTrigger`
             */
            TriggerMode: string;
            /**
             * 媒体工作流名称。
             * @example `example-mediaworkflow-****`
             */
            Name: string;
            /**
             * 媒体工作流拓扑结构。
             * @example `{"MediaWorkflowList":{"MediaWorkflow":[{"CreationTime":"2016-04-01T05:29:38Z","Name":"example-mediaworkflow-****","State":"Active","Topology":"{\"Activities\":{\"Act-Start\":{\"Parameters\":{\"PipelineId\":\"130266f58161436a80bf07cb12c8****\",\"InputFile\":\"{\\\"Bucket\\\": \\\"example-bucket-****\\\",\\\"Location\\\": \\\"example-location\\\"}\"},\"Type\":\"Start\"},\"Act-Report\":{\"Parameters\":{},\"Type\":\"Report\"},\"Act-Transcode-M3U8\":{\"Parameters\":{\"Outputs\":\"[{\\\"Object\\\":\\\"transcode/{ObjectPrefix}{FileName}\\\",\\\"TemplateId\\\": \\\"957d1719ee85ed6527b90cf62726****\\\"}]\",\"OutputBucket\":\"example-bucket-****\",\"OutputLocation\":\"example-location\"},\"Type\":\"Transcode\"}},\"Dependencies\":{\"Act-Start\":[\"Act-Transcode-M3U8\"],\"Act-Report\":[],\"Act-Transcode-M3U8\":[\"Act-Report\"]}}","MediaWorkflowId":"93ab850b4f6f44eab54b6e91d24d****"}]},"RequestId":"16CD0CDD-457E-420D-9755-8385075A1234"}`
             */
            Topology: string;
        }[];
    };
    /**
     * 分查询时设置的每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `16CD0CDD-457E-420D-9755-8385075A1234`
     */
    RequestId: string;
    /**
     * 当前页号。
     * @example `1`
     */
    PageNumber: number;
}
