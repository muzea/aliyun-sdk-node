export interface ActivateMediaWorkflowResponse {
    /**
     * 请求ID。
     * @example `A1326BD4-30B1-4CB6-Q123-3330B877B0D4`
     */
    RequestId: string;
    /**
     * 媒体工作流详细参数。
     */
    MediaWorkflow: {
        /**
         * 媒体工作流创建时间。
         * @example `2016-04-01T05:29:37Z`
         */
        CreationTime: string;
        /**
         * 媒体工作流ID。
         * @example `93ab850b4f6f44eab54b6e9181d4****`
         */
        MediaWorkflowId: string;
        /**
         * 媒体工作流状态。此接口返回参数中状态默认为**Active**（ 已激活）。
         * @example `Active`
         */
        State: string;
        /**
         * 媒体工作流名称。
         * @example `mediaworkflow-example`
         */
        Name: string;
        /**
         * 媒体工作流拓扑结构。
         * @example `{\"Activities\":{\"Act-Start\":{\"Parameters\":{\"PipelineId\":\"130266f58161436a80bf07cb12c8****\",\"InputFile\":\"{\\\"Bucket\\\": \\\"example\\\",\\\"Location\\\": \\\"oss-cn-hangzhou\\\"}\"},\"Type\":\"Start\"},\"Act-Report\":{\"Parameters\":{},\"Type\":\"Report\"},\"Act-Transcode-M3U8\":{\"Parameters\":{\"Outputs\":\"[{\\\"OutputObject\\\":\\\"transcode%2F%7BObjectPrefix%7D%7BFileName%7D\\\",\\\"TemplateId\\\": \\\"957d1719ee85ed6527b90cf62726****\\\"}]\",\"OutputBucket\":\"panda-vod-hls\",\"OutputLocation\":\"oss-cn-hangzhou\"},\"Type\":\"Transcode\"}},\"Dependencies\":{\"Act-Start\":[\"Act-Transcode-M3U8\"],\"Act-Report\":[],\"Act-Transcode-M3U8\":[\"Act-Report\"]}}`
         */
        Topology: string;
    };
}
