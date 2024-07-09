export interface ListSmartJobsResponse {
    /**
     * 请求ID。
     * @example `****9262E3DA-07FA-4862-FCBB6BC61D08*****`
     */
    RequestId: string;
    /**
     * 智能任务列表
     */
    SmartJobList: {
        /**
         * 任务Id
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        JobId: string;
        /**
         * 任务标题
         * @example `测试标题`
         */
        Title: string;
        /**
         * 任务描述
         * @example `测试描述`
         */
        Description: string;
        /**
         * 用户Id
         * @example `1084506228******`
         */
        UserId: number;
        /**
         * 任务类型
         * @example `ASR`
         */
        JobType: string;
        /**
         * 输入配置
         * @example `{"AudioConfig":{},"InputConfig":""}`
         */
        EditingConfig: string;
        /**
         * 用户自定义字段
         * @example `{"user":"data"}`
         */
        UserData: string;
        /**
         * 任务状态
         * @example `Finished`
         */
        JobState: string;
        /**
         * 创建时间
         * @example `2020-12-26T04:11:10Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间
         * @example `2020-12-26T04:11:10Z`
         */
        ModifiedTime: string;
        /**
         * 任务输入配置
         */
        InputConfig: {
            /**
             * 文件信息
             * @example `oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
             */
            InputFile: string;
            /**
             * 关键词信息
             * @example `测试关键词`
             */
            Keyword: string;
        };
        /**
         * 任务输出配置
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
    }[];
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `CBB6BC61D08`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数，最后一页前每页记录条数为MaxResults取值。  例如：  正例：10,10,5，反例：10,5,10
     * @example `10`
     */
    MaxResults: string;
    /**
     * 本次请求条件下的数据总量，此参数为可选参数，默认可不返回。
     * @example `110`
     */
    TotalCount: string;
}
