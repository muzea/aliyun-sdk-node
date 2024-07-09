export interface ListSnapshotJobsResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    Jobs: {
        /**
         * 任务ID
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        JobId: string;
        /**
         * 请求触发来源
         * @example `API`
         */
        TriggerSource: string;
        /**
         * 任务名称
         * @example `SampleJob`
         */
        Name: string;
        /**
         * 任务类型
         * @example `Sprite`
         */
        Type: string;
        /**
         * 任务输入
         */
        Input: {
            /**
             * 输入类型，取值：
             * 1. OSS：oss文件地址
             * 2. Media：媒资ID
             * @example `OSS`
             */
            Type: string;
            /**
             * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
             * OSS地址规则为：
             * 1.OSS://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
             * @example `oss://bucket/object.mp4`
             */
            Media: string;
        };
        /**
         * 任务输出
         */
        Output: {
            /**
             * 输出类型，取值：
             * 1. OSS：oss文件地址
             * 2. Media：媒资ID
             * @example `OSS`
             */
            Type: string;
            /**
             * 输出媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
             * OSS地址规则为：
             * 1. OSS://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
             * 截取多张静态截图时，object必须要带有”{Count}“占位符；截取雪碧图时，object必须要带有“{TileCount}”占位符。WebVTT截图object的后缀必须是“.vtt”。
             * @example `http://test-bucket.oss-cn-shanghai.aliyuncs.com/output-{Count}.jpg`
             */
            Media: string;
        };
        /**
         * 截图数量
         * @example `10`
         */
        Count: number;
        /**
         * 是否异步截图
         * @example `true`
         */
        Async: boolean;
        /**
         * 模板ID
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        TemplateId: string;
        /**
         * 管道ID
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        PipelineId: string;
        /**
         * 任务状态。
         * - **Success**：成功
         * - **Fail**：失败
         * - **Init**：已提交
         * @example `Success`
         */
        Status: string;
        /**
         * 任务提交时间
         * @example `2022-07-12T16:17:54Z`
         */
        SubmitTime: string;
        /**
         * 任务完成时间
         * @example `2022-07-12T16:30:54Z`
         */
        FinishTime: string;
        /**
         * 创建时间
         * @example `2022-07-12T16:17:54Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间
         * @example `2022-07-12T16:30:54Z`
         */
        ModifiedTime: string;
    }[];
    /**
     * 查询下一页标识
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    NextPageToken: string;
}
