export interface QueryMediaWorkflowListResponse {
    NonExistMediaWorkflowIds: {
        /**
         * 不存在的工作流。
         */
        MediaWorkflowId: string[];
    };
    MediaWorkflowList: {
        /**
         * 媒体工作流列表。
         */
        MediaWorkflow: {
            /**
             * 创建时间。
             * @example `2016-04-01T05:29:38Z`
             */
            CreationTime: string;
            /**
             * 媒体工作流ID。
             * @example `93ab850b4f6f44eab54b6e9181d4****`
             */
            MediaWorkflowId: string;
            /**
             * 媒体工作流状态。可取值：
             * - **Inactive**：已停用。
             * - **Active**：已激活。
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
             * @example `{mediaworkflow","State":"Active","Topology":"{\"Activities\":{\"Act-Start\":{\"Parameters\":{\"PipelineId\":\"130266f58161436a80bf07cb12c8****\",\"InputFile\":\"{\\\"Bucket\\\": \\\"example-bucket-****\\\",\\\"Location\\\": \\\"cn-shanghai\\\"}\"},\"Type\":\"Start\"},\"Act-Report\":{\"Parameters\":{},\"Type\":\"Report\"},\"Act-Transcode-M3U8\":{\"Parameters\":{\"Outputs\":\"[{\\\"Object\\\":\\\"transcode/{ObjectPrefix}{FileName}\\\",\\\"TemplateId\\\": \\\"957d1719ee85ed6527b90cf62726****\\\"}]\",\"OutputBucket\":\"example-bucket-****\",\"OutputLocation\":\"cn-shanghai\"},\"Type\":\"Transcode\"}},\"Dependencies\":{\"Act-Start\":[\"Act-Transcode-M3U8\"],\"Act-Report\":[],\"Act-Transcode-M3U8\":[\"Act-Report\"]}}","MediaWorkflowId":"93ab850b4f6f44eab54b6e91d24d****"}]},"RequestId":"16CD0CDD-457E-420D-9755-8385075A1234"}`
             */
            Topology: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `16CD0CDD-457E-420D-1234-8385075A618B`
     */
    RequestId: string;
}
