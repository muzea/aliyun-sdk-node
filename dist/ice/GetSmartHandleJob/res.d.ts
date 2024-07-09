export interface GetSmartHandleJobResponse {
    /**
     * 请求Id。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 任务Id。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    JobId: string;
    /**
     * 任务结果。
     * @example `{}`
     */
    Output: string;
    /**
     * 任务结果
     */
    JobResult: {
        /**
         * 媒资Id
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        MediaId: string;
        /**
         * 智能分析结果
         * @example `拆条或智能标签信息`
         */
        AiResult: string;
        /**
         * Token使用量，仅在关键词扩写任务会返回
         * @example `{"total_tokens":100}`
         */
        Usage: string;
    };
    /**
     * 任务状态。
     * @example `Finished`
     */
    State: string;
    /**
     * 用户自定义信息。
     * @example `{"user":"data"}`
     */
    UserData: string;
    /**
     * 智能任务信息。
     */
    SmartJobInfo: {
        /**
         * 任务标题。
         * @example `测试标题`
         */
        Title: string;
        /**
         * 任务描述。
         * @example `测试描述`
         */
        Description: string;
        /**
         * userid。
         * @example `1974526429******`
         */
        UserId: string;
        /**
         * 输入参数。
         */
        InputConfig: {
            /**
             * OSS地址或内容库素材ID。
             * @example `oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或 ******11-DB8D-4A9A-875B-275798******`
             */
            InputFile: string;
        };
        /**
         * 输出配置。
         */
        OutputConfig: {
            /**
             * OSS Bucket
             * @example `test-bucket`
             */
            Bucket: string;
            /**
             * OSS Object
             * @example `test-object`
             */
            Object: string;
        };
        /**
         * 创建时间。
         * @example `2020-12-26T04:11:10Z`
         */
        CreateTime: string;
        /**
         * 修改时间。
         * @example `2020-12-26T04:11:10Z`
         */
        ModifiedTime: string;
        /**
         * 任务类型。
         * @example `ASR`
         */
        JobType: string;
    };
}
