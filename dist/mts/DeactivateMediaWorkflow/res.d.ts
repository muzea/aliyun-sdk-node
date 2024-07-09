export interface DeactivateMediaWorkflowResponse {
    /**
     * 请求ID。
     * @example `16CD0CDD-457E-420D-9755-8385075A1234`
     */
    RequestId: string;
    /**
     * 媒体工作流详细参数。
     */
    MediaWorkflow: {
        /**
         * 创建时间。
         * @example `2016-04-01T05:29:37Z`
         */
        CreationTime: string;
        /**
         * 被停用的媒体工作流ID。
         * @example `93ab850b4f6f44eab54b6e9181d4****`
         */
        MediaWorkflowId: string;
        /**
         * 状态。此处返回**Inactive**（停用）。
         * @example `Inactive`
         */
        State: string;
        /**
         * 被停用的媒体工作流名称。
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
