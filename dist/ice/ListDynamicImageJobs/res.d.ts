export interface ListDynamicImageJobsResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 任务列表
     */
    Jobs: {
        /**
         * 动图任务ID
         * @example `****cdb3e74639973036bc84****`
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
             * 输入媒体，支持OSS地址和媒资ID两种。
             * OSS地址规则为
             * 1. OSS://bucket/object
             * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
             * @example `oss://bucket/object`
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
             * @example `Media`
             */
            Type: string;
            /**
             * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
             * OSS地址规则为：
             * 1. OSS://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
             * @example `****cdb3e74639973036bc84****`
             */
            Media: string;
        };
        /**
         * 模板ID
         * @example `****cdb3e74639973036bc84****`
         */
        TemplateId: string;
        /**
         * 管道ID
         * @example `****cdb3e74639973036bc84****`
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
         * 任务完成时间。
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
     * @example `****cdb3e74639973036bc84****
    `
     */
    NextPageToken: string;
}
