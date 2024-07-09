export interface GetDynamicImageJobResponse {
    /**
     * 请求ID
     * @example `******36-3C1E-4417-BDB2-1E034F******`
     */
    RequestId: string;
    /**
     * 截图任务信息
     */
    DynamicImageJob: {
        /**
         * 任务ID
         * @example `****d80e4e4044975745c14b****
        `
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
             * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
             * OSS地址规则为：
             * 1. OSS://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
             * @example `oss://test-bucket/sample-input.mp4`
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
                 * @example `sample-input.mp4`
                 */
                Object: string;
            };
        };
        /**
         * 任务输出
         */
        Output: {
            /**
             * 输入类型，取值：
             * OSS：oss文件地址
             * Media：媒资ID
             * @example `Media`
             */
            Type: string;
            /**
             * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
             * OSS地址规则为：
             * 1. OSS://bucket/object
             * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
             * 其中bucket为和当前项目处于同一区域的OSS bucket名称，object为文件路径。
             * @example `****d80e4e4044975745c14b****`
             */
            Media: string;
            /**
             * OSS三元组
             */
            OssFile: {
                /**
                 * OSS Bucket
                 * @example `sample-bucket`
                 */
                Bucket: string;
                /**
                 * OSS Location
                 * @example `oss-cn-shanghai`
                 */
                Location: string;
                /**
                 * OSS Object
                 * @example `path/to/object`
                 */
                Object: string;
            };
        };
        /**
         * 输出动图的URL地址
         * @example `http://test-bucket.oss-cn-shanghai.aliyuncs.com/output.gif`
         */
        OutputUrl: string;
        /**
         * 动图模板配置
         * @example `{"Format":"gif","Fps":5,"Height":1080,"Width":1920}`
         */
        TemplateConfig: string;
        /**
         * 模板ID
         * @example `****d80e4e4044975745c14b****`
         */
        TemplateId: string;
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
         * @example `The specified resource for "CustomTemplate" could not be found.`
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
         * 用户自定义数据
         * @example `{"sampleParam": "sampleValue"}`
         */
        UserData: string;
        /**
         * 创建时间
         * @example `2022-07-12T16:17:54Z`
         */
        CreateTime: string;
        /**
         * 最后一次修改时间
         * @example `2022-07-12T16:30:54Z`
         */
        ModifiedTime: string;
    };
}
