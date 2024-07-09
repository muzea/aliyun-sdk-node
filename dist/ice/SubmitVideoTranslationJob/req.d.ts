export interface SubmitVideoTranslationJobRequest {
    /**
     * - 视频翻译任务的输入参数
     * - 支持以视频、字幕文件作为输入
     * - 符合 JSON 格式
     * @example `{"Type":"Video","Media":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/xxx.mp4"}`
     */
    "InputConfig"?: string;
    /**
     * - 视频翻译任务的配置参数
     * - 符合 JSON 格式
     * @example `{"SourceLanguage":"zh","TargetLanguage":"en","DetextArea":"Auto"}`
     */
    "EditingConfig"?: string;
    /**
     * - 视频翻译任务的输出参数‘
     * - 支持以视频类型、字幕文件类型输出
     * @example `{"MediaURL": "https://your-bucket.oss-cn-shanghai.aliyuncs.com/your-object.mp4"}`
     */
    "OutputConfig"?: string;
    /**
     * - 任务标题
     * @example `测试标题`
     */
    "Title"?: string;
    /**
     * - 任务描述
     * @example `测试描述`
     */
    "Description"?: string;
    /**
     * - 自定义信息
     * @example `测试 UserData`
     */
    "UserData"?: string;
    /**
     * - ClientToken
     * @example `测试 ClientToken`
     */
    "ClientToken"?: string;
}
