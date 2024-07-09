export interface QueryIProductionJobResponse {
    /**
     * 请求ID
     */
    RequestId: string;
    /**
     * 任务ID
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    JobId: string;
    /**
     * 任务名称
     * @example `测试任务`
     */
    Name: string;
    /**
     * 需要使用的算法功能名称。取值：
     * - **Cover**：智能封面
     * - **VideoClip**：视频摘要
     * - **VideoDelogo**：视频去图标
     * - **VideoDetext**：视频去字幕
     * @example `Cover`
     */
    FunctionName: string;
    /**
     * 输入媒体
     */
    Input: {
        /**
         * 输入类型，取值：
         * 1. OSS：OSS文件地址
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
         * @example `oss://bucket/object`
         */
        Media: string;
    };
    /**
     * 输出媒体
     */
    Output: {
        /**
         * 媒体类型：
         * - OSS：OSS路径
         * - Media：媒资ID
         * @example `OSS`
         */
        Type: string;
        /**
         * 输入媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
         * OSS地址规则为：
         * 1. oss://bucket/object
         * 2. http(s)://bucket.oss-[RegionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
         * @example `oss://bucket/object`
         */
        Media: string;
    };
    /**
     * 模板ID
     * @example `****96e8864746a0b6f3****`
     */
    TemplateId: string;
    /**
     * 算法作业参数，JSON对象，不同算法对应参数内容不同。
     * @example `{"Model":"gif"}`
     */
    JobParams: string;
    /**
     * 任务配置信息
     */
    ScheduleConfig: {
        /**
         * 管道ID
         * @example `a54fdc9c9aab413caef0d1150f565e86`
         */
        PipelineId: string;
        /**
         * 任务在其对应管道内的优先级。
         * - 最高优先级：10。
         * - 默认值：**6**。
         * @example `6`
         */
        Priority: number;
    };
    /**
     * 用户自定义数据，获取结果时原样返回
     * @example `{"test":1}`
     */
    UserData: string;
    /**
     * 算法输出的结果信息，不同FunctionName的输出不同，以JSON格式输出，详见下面的补充说明
     * @example `{}`
     */
    Result: string;
    /**
     * 创建时间，GMT时间
     * @example `2022-07-07T07:16:11Z`
     */
    CreateTime: string;
    /**
     * 完成时间，GMT时间
     * @example `2021-11-26T14:50:25Z`
     */
    FinishTime: string;
    /**
     * 作业状态。取值：
     * - Queuing：排队中。
     * - Analysing：分析中。
     * - Fail：失败。
     * - Success：成功。
     * @example `Success`
     */
    Status: string;
    /**
     * 输出文件数组
     */
    OutputFiles: string[];
    /**
     * 输出文件URL数组
     */
    OutputUrls: string[];
}
