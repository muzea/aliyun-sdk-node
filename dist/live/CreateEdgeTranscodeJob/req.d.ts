export interface CreateEdgeTranscodeJobRequest {
    /**
     * 机房ID。
     * @example `******3b-4d18-395c-8106-ff21a6******`
     */
    "ClusterId": string;
    /**
     * 任务名称，支持中英文+数字+英文短划线、下划线。长度限制英文255字符。
     * @example `task1`
     */
    "Name": string;
    /**
     * 模板ID。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId": string;
    /**
     * 输入流地址。
     * @example `rtmp://mydomain/app/stream1`
     */
    "StreamInput": string;
    /**
     * 输出流地址。
     * @example `rtmp://testdomain/app/stream2`
     */
    "StreamOutput": string;
}
