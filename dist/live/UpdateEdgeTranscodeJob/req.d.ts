export interface UpdateEdgeTranscodeJobRequest {
    /**
     * 机房ID。
     * @example `******3b-4d18-395c-8106-ff21a6******`
     */
    "ClusterId": string;
    /**
     * 边缘转码任务ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "JobId": string;
    /**
     * 任务名称。
     * @example `task1`
     */
    "Name"?: string;
    /**
     * 模板ID。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 输入流地址。
     * @example `rtmp://mydomain/app/stream1`
     */
    "StreamInput"?: string;
    /**
     * 输出流地址。
     * @example `rtmp://testdomain/app/stream2`
     */
    "StreamOutput"?: string;
}
