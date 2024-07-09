export interface GetLiveSnapshotJobResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    JobId: string;
    /**
     * 任务名称。
     * @example `截图任务1`
     */
    JobName: string;
    /**
     * 模板ID。
     * @example `****a046-263c-3560-978a-fb287666****`
     */
    TemplateId: string;
    /**
     * 模板名称。
     * @example `模板1`
     */
    TemplateName: string;
    /**
     * 任务状态。
     * @example `started`
     */
    Status: string;
    /**
     * 输入信息。
     */
    StreamInput: {
        /**
         * 输入地址。
         * @example `rtmp://www.aliyun.com/stream`
         */
        Url: string;
        /**
         * 输入类型，目前只支持rtmp。
         * @example `rtmp`
         */
        Type: string;
    };
    /**
     * 输出信息。
     */
    SnapshotOutput: {
        /**
         * 存储类型，目前只支持oss。
         * @example `oss`
         */
        StorageType: string;
        /**
         * 输出终端，type=oss时返回OSS域名。
         * @example `oss-cn-shanghai.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * 输出终端的Bucket，type=oss时返回OSS Bucket。
         * @example `testbucket`
         */
        Bucket: string;
    };
    /**
     * 覆盖截图格式。
     * @example `snapshot/{JobId}.jpg`
     */
    OverwriteFormat: string;
    /**
     * 序列截图格式。
     * @example `snapshot/{JobId}/{UnixTimestamp}.jpg`
     */
    SequenceFormat: string;
    /**
     * 截图时间间隔。
     * @example `5`
     */
    TimeInterval: number;
    /**
     * 截图回调地址。
     * @example `http://www.aliyun.com/snapshot/callback`
     */
    CallbackUrl: string;
    /**
     * 最后修改时间。
     * @example `2022-02-02T22:22:22Z`
     */
    LastModified: string;
    /**
     * 创建时间。
     * @example `2022-02-02T22:22:22Z`
     */
    CreateTime: string;
}
