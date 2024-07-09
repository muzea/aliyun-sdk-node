export interface SubmitLiveSnapshotJobRequest {
    /**
     * 任务名称。
     * - 最大长度为128。
     * @example `截图任务1`
     */
    "JobName": string;
    /**
     * 流输入信息。
     */
    "StreamInput": {
        /**
         * 流输入地址。
         * - 最大长度为255。
         * @example `rtmp://www.aliyun.com/stream`
         */
        Url: string;
        /**
         * 流输入类型。目前只支持rtmp。
         * @example `rtmp`
         */
        Type: string;
    };
    /**
     * 截图输出信息。
     */
    "SnapshotOutput": {
        /**
         * 截图存储类型。目前只支持oss。
         * @example `oss`
         */
        StorageType: string;
        /**
         * 截图输出终端。
         * @example `oss-cn-shanghai.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * 截图输出终端的Bucket。
         * @example `testbucket`
         */
        Bucket: string;
    };
    /**
     * 模板ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "TemplateId": string;
    /**
     * 截图回调地址。
     * - 最大长度为255。
     * - 支持http/https
     * @example `http://www.aliyun.com/snapshot/callback`
     */
    "CallbackUrl"?: string;
}
