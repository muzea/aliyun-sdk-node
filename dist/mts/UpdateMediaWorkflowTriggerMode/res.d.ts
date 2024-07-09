export interface UpdateMediaWorkflowTriggerModeResponse {
    /**
     * 请求ID。
     * @example `16CD0CDD-457E-420D-9755-8385075A1234`
     */
    RequestId: string;
    /**
     * 媒体工作流详细信息。
     */
    MediaWorkflow: {
        /**
         * 创建时间。
         * @example `2016-04-01T05:29:37Z`
         */
        CreationTime: string;
        /**
         * 媒体工作流ID。
         * @example `e00732b977da427d9177a4dee646****`
         */
        MediaWorkflowId: string;
        /**
         * 媒体工作流状态。可取值：
         * - **Inactive**：已停用。
         * - **Active**：已启用。
         * @example `Inactive`
         */
        State: string;
        /**
         * 触发模式。可取值：
         * - **OssAutoTrigger**：自动触发。
         * - **NotInAuto**：不自动触发。
         * @example `NotInAuto`
         */
        TriggerMode: string;
        /**
         * 媒体工作流名称。
         * @example `example-mediaworkflow-****`
         */
        Name: string;
        /**
         * 媒体工作流拓扑结构。
         * @example `{mediaworkflow","State":"Active","Topology":"{\"Activities\":{\"Act-Start\":{\"Parameters\":{\"PipelineId\":\"130266f58161436a80bf07cb12c8****\",\"InputFile\":\"{\\\"Bucket\\\": \\\"example-bucket-****\\\",\\\"Location\\\": \\\"cn-shanghai\\\"}\"},\"Type\":\"Start\"},\"Act-Report\":{\"Parameters\":{},\"Type\":\"Report\"},\"Act-Transcode-M3U8\":{\"Parameters\":{\"Outputs\":\"[{\\\"Object\\\":\\\"transcode/{ObjectPrefix}{FileName}\\\",\\\"TemplateId\\\": \\\"957d1719ee85ed6527b90cf62726****\\\"}]\",\"OutputBucket\":\"example-bucket-****\",\"OutputLocation\":\"cn-shanghai\"},\"Type\":\"Transcode\"}},\"Dependencies\":{\"Act-Start\":[\"Act-Transcode-M3U8\"],\"Act-Report\":[],\"Act-Transcode-M3U8\":[\"Act-Report\"]}}","MediaWorkflowId":"93ab850b4f6f44eab54b6e91d24d****"}]},"RequestId":"16CD0CDD-457E-420D-9755-8385075A1234"}`
         */
        Topology: string;
    };
}
