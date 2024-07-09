export interface SubmitMediaCensorJobRequest {
    /**
     * 统一模板ID，为空使用默认模板进行审核。
     * @example `S00000001-100060`
     */
    "TemplateId"?: string;
    /**
     * 封面图片的OSS文件，最多支持5个封面图片，JSON数组。
     * > 如果设置，会优先使用这个字段中的封面代替**Media**中的封面。
     * @example `[{"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.jpeg","RoleArn":"acs:ram::1997018457688683:role/AliyunICEDefaultRole"}]`
     */
    "CoverImages"?: string;
    /**
     * 视频标题，最大长度64个字节。
     * > 如果设置，会优先使用这个字段中的标题代替Media中的标题。
     * @example `Hello World`
     */
    "Title"?: string;
    /**
     * 视频介绍，最大长度128个字节。
     * > 如果设置，会优先使用这个字段中的描述代替Media中的描述。
     * @example `example description`
     */
    "Description"?: string;
    /**
     * 视频弹幕。
     * > 如果设置，会优先使用这个字段中的描述代替Media中的描述。
     * @example `hello world`
     */
    "Barrages"?: string;
    /**
     * 截图输出。审核任务会在文件输入文件对应的path下面生成审核截图和结果JSON文件。
     * - 输出格式参考：oss://bucket/snapshot-{Count}.jpg，其中，bucket为和当前项目处于同一区域的oss bucket名称，{Count}为截帧图片序号替换符。
     * - 审核结果详细信息保存在Output相同OSS文件夹下，命名为{jobId}.output，output文件具体字段格式，请参见[媒体审核结果文件字段](~~609211~~)。
     * @example `oss://sashimi-cn-shanghai/censor/snapshot-{Count}.jpg`
     */
    "Output"?: string;
    /**
     * 用户自定义数据，最大长度128个字节。
     * @example `UserDatatestid-001-****`
     */
    "UserData"?: string;
    /**
     * Callback路径，支持MNS和HTTP回调。
     * @example `mns://125340688170****.oss-cn-shanghai.aliyuncs.com/queues/example-pipeline`
     */
    "NotifyUrl"?: string;
    /**
     * 输入待审核文件信息。
     */
    "Input"?: {
        /**
         * 输入文件类型：
         * OSS：OSS路径
         * Media：媒资ID
         * @example `Media`
         */
        Type: string;
        /**
         * 输入文件信息，支持OSS地址和媒资ID两种。
         * OSS地址规则为
         * 1、oss://bucket/object
         * 2、http(s)://bucket.oss-[regionId].aliyuncs.com/object
         * 其中bucket为和当前项目处于同一区域的oss bucket名称，object为文件路径。
         * @example `1b1b9cd148034739af413150fded****`
         */
        Media: string;
    };
    /**
     * 调度配置。
     */
    "ScheduleConfig"?: {
        /**
         * 管道ID。
         * @example `5246b8d12a62433ab77845074039****`
         */
        PipelineId: string;
        /**
         * 任务优先级。数值越大优先级越高，取值范围：1~10。
         * @example `6`
         */
        Priority: number;
    };
}
