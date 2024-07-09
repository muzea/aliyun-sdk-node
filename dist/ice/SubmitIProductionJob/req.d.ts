export interface SubmitIProductionJobRequest {
    /**
     * 任务名称，长度不超过100字符。
     * @example `测试任务`
     */
    "Name"?: string;
    /**
     * 需要使用的算法功能名称。取值：
     * - **Cover**：智能封面
     * - **VideoClip**：视频摘要
     * - **VideoDelogo**：视频去图标
     * - **VideoDetext**：视频去字幕
     * @example `Cover`
     */
    "FunctionName": string;
    /**
     * 输入媒体，支持OSS或媒资ID。
     */
    "Input": {
        /**
         * 媒体类型：
         * - OSS：OSS路径
         * - Media：媒资ID
         * @example `OSS`
         */
        Type: string;
        /**
         * 输入媒体，支持OSS地址和媒资ID两种。
         * oss地址规则为
         * 1. oss://bucket/object
         * 2. http(s)://bucket.oss-[regionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
         * @example `oss://bucket/object`
         */
        Media: string;
    };
    /**
     * 输出媒体，支持OSS或媒资ID。
     */
    "Output": {
        /**
         * 媒体类型：
         * - OSS：OSS路径
         * - Media：媒资ID
         * @example `OSS`
         */
        Type: string;
        /**
         * 输出媒体。当Type为OSS时填入OSS地址，Type为Media时填入媒资ID。
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
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "TemplateId"?: string;
    /**
     * 算法作业参数，JSON对象，不同算法对应参数内容不同。详见补充说明。
     * @example `{"Model":"gif"}`
     */
    "JobParams"?: string;
    /**
     * 任务调度配置信息
     */
    "ScheduleConfig"?: {
        /**
         * 管道ID
         * @example `5246b8d12a62433ab77845074039c3dc`
         */
        PipelineId: string;
        /**
         * 取值范围为1到10，数值越小优先级越高。
         * @example `6`
         */
        Priority: number;
    };
    /**
     * 用户自定义数据，获取结果时原样返回。长度不超过1024字节。
     * @example `{"test":1}`
     */
    "UserData"?: string;
}
