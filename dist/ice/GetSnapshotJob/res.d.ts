export interface GetSnapshotJobResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 截图任务信息
     */
    SnapshotJob: {
        /**
         * 任务ID
         * @example `****d80e4e4044975745c14b****`
         */
        JobId: string;
        /**
         * 请求触发来源
         * @example `API`
         */
        TriggerSource: string;
        /**
         * 任务名称
         * @example `测试任务`
         */
        Name: string;
        /**
         * 截图类型
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
             * 1. oss://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
             * @example `oss://test-bucket/object.mp4`
             */
            Media: string;
            /**
             * OSS三元组
             */
            OssFile: {
                /**
                 * OSS Bucket
                 * @example `test-bucket`
                 */
                Bucket: string;
                /**
                 * OSS Location
                 * @example `oss-cn-shanghai`
                 */
                Location: string;
                /**
                 * OSS Object
                 * @example `object.mp4`
                 */
                Object: string;
            };
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
             * 1. oss://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
             * 截取多张静态截图时，object必须要带有”{Count}“占位符；截取雪碧图时，object必须要带有“{TileCount}”占位符。WebVTT截图object的后缀必须是“.vtt”。
             * @example `http://test-bucket.oss-cn-shanghai.aliyuncs.com/output-{Count}.jpg`
             */
            Media: string;
            /**
             * OSS三元组
             */
            OssFile: {
                /**
                 * OSS Bucket
                 * @example `test-bucket`
                 */
                Bucket: string;
                /**
                 * OSS Location
                 * @example `oss-cn-shanghai`
                 */
                Location: string;
                /**
                 * OSS Object
                 * @example `output-{Count}.jpg`
                 */
                Object: string;
            };
        };
        /**
         * 截图数量
         * @example `8`
         */
        Count: number;
        /**
         * 是否异步截图。默认：true
         * @example `true`
         */
        Async: boolean;
        /**
         * 模板ID
         * @example `****d80e4e4044975745c14b****`
         */
        TemplateId: string;
        /**
         * 截图模板配置
         * @example `{"Type":"Normal","FrameType":"normal","Time":0,"Count":10}`
         */
        TemplateConfig: string;
        /**
         * 管道ID
         * @example `****d80e4e4044975745c14b****`
         */
        PipelineId: string;
        /**
         * 任务状态
         * @example `Success`
         */
        Status: string;
        /**
         * 错误码
         * @example `ResourceNotFound`
         */
        Code: string;
        /**
         * 错误消息
         * @example `The specified resource for "Pipeline" could not be found.`
         */
        Message: string;
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
         * 用户自定义参数。
         * @example `{"test parameter": "test value"}`
         */
        UserData: string;
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
    };
}
