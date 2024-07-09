export interface SubmitASRJobRequest {
    /**
     * 输入配置，支持OSS地址和内容库素材ID
     * @example `oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或 ****20b48fb04483915d4f2cd8ac****`
     */
    "InputFile"?: string;
    /**
     * 用户自定义设置，可传入客户业务信息，如业务方环境、任务信息，JSON字符串格式。
     * @example `{
          "user": "data",
          "env": "prod"
    }`
     */
    "UserData"?: string;
    /**
     * 任务标题，长度不超过128字节
     * @example `测试标题`
     */
    "Title"?: string;
    /**
     * 任务描述，长度不超过128字节
     * @example `测试描述`
     */
    "Description"?: string;
    /**
     * 开始时间
     * @example `00:00:00`
     */
    "StartTime"?: string;
    /**
     * 持续时间
     * @example `00:00:10`
     */
    "Duration"?: string;
}
