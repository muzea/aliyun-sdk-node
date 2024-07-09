export interface SubmitFpShotJobRequest {
    /**
     * 作业输入文件地址，支持 OSS 地址、HTTP 地址、视频点播（VoD）媒资等形式。
     * - OSS 地址：OSS三元组，JSONString。例如：{\"Bucket\":\"test-bucket\",\"Location\":\"oss-cn-shanghai\",\"Object\":\"test.mp4\"}
     * - HTTP地址：公网可下载的地址。例如：http://example-test-****.mp4。
     * - 视频点播（VOD）媒资地址：媒资Id，JSONString。例如：{\"MediaId\":\"99238***321\"}
     * > OSS的地域和媒资存储地域需要与当前MPS所在地域保持一致。
     * @example `{"Bucket":"example-bucket-****","Location":"oss-cn-shanghai","Object":"example-****.flv"}`
     */
    "Input": string;
    /**
     * 管道ID，用于绑定消息通知。可通过**媒体处理控制台**>**全局设置**>**管道**获取。
     * @example `88c6ca184c0e47098a5b665e2a12****`
     */
    "PipelineId"?: string;
    /**
     * 视频DNA配置，JSON对象。更多信息，请参见[FpShotConfig详情](~~93568~~)。
     * @example `{
          "PrimaryKey": "12345****",
          "SaveType": "save",
          "FpDBId": "417f2ada5999daf****"
    }`
     */
    "FpShotConfig": string;
    /**
     * 用户自定义数据，最大长度128个字节，不能以特殊字符开头。
     * @example `testid-****`
     */
    "UserData"?: string;
}
