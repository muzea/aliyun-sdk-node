export interface SubmitSmarttagJobRequest {
    /**
     * 视频标题，支持中英文、数字、中划线（-），不能以特殊符号开头，长度不能超过256B。
     * @example `example-title-****
    `
     */
    "Title"?: string;
    /**
     * 视频内容描述，支持中英文、数字、中划线（-），不能以特殊符号开头，长度不能超过1KB。
     * @example `example content ****
    `
     */
    "Content"?: string;
    /**
     * 已废弃
     */
    "ContentType"?: string;
    /**
     * 已废弃
     */
    "ContentAddr"?: string;
    /**
     * 额外的请求参数，使用JSON字符串表示，例如：{"needAsrData":true, "needOcrData":false}。字段说明：
     * - needAsrData：boolean值，分析结果中是否需要包含原始ASR结果，默认false（不包含），可选true（包含）
     * - needOcrData：boolean值，分析结果中是否需要包含原始OCR结果，默认false（不包含），可选true（包含）
     * - needMetaData：boolean值，分析结果中是否需要包含Meta信息，默认false（不包含），可选true（包含）
     * - nlpParams: JsonObject值，nlp算子的输入参数，默认为空（不使用nlp算子），详见请求参数补充说明。
     * @example `{"needAsrData":true, "needOcrData":false, "nlpParams":{"sourceLanguage":"cn"}}
    `
     */
    "Params"?: string;
    /**
     * Callback路径，目前仅支持http/https。
     * @example `https://example.com/endpoint/aliyun/ai?id=76401125000***`
     */
    "NotifyUrl"?: string;
    /**
     * 通过MNS回调时透传回来的信息，长度不能超过1KB。如何设置MNS回调队列，请参见更新管道。
     * @example `{“a”:"test"}`
     */
    "UserData"?: string;
    /**
     * input
     */
    "Input"?: {
        /**
         * 媒体类型，一下两种类型二选一：
         * - OSS
         * - Media
         * - URL
         * @example `Media`
         */
        Type: string;
        /**
         * 上面的Type为OSS的话，写OSS地址，例如：OSS://test-bucket/video/202208/test.mp4
         * Type为Media的话写mediaId：c5c62d8f0361337cab312dce8e77dc6d
         * Type为URL的话写http url，例如：https://zc-test.oss-cn-shanghai.aliyuncs.com/test/unknowFace.mp4
         * @example `c5c62d8f0361337cab312dce8e77dc6d`
         */
        Media: string;
    };
    /**
     * 模板ID用于指定分析算法，模板相关操作参见[统一模版配置](~~445702~~)。
     * @example `39f8e0bc005e4f309379701645f4
    `
     */
    "TemplateId"?: string;
    /**
     * scheduleConfig
     */
    "ScheduleConfig"?: {
        /**
         * 道ID，用于区分业务，绑定消息通知。表示默认管道。默认管道并发为2，需要提升并发数请提交工单。
         * @example `acdbfe4323bcfdae`
         */
        PipelineId: string;
        /**
         * 优先级，暂时未实现，可以不填或随便填。
         * @example `4`
         */
        Priority: string;
    };
}
