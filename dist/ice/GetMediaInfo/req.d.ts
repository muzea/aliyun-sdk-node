export interface GetMediaInfoRequest {
    /**
     * IMS媒资ID，若为空，则必须有InputURL。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "MediaId"?: string;
    /**
     * 待查询的媒资在相应系统中的地址，使用前必须在IMS内容库中注册并与IMS的mediaId绑定
     * - OSS地址，支持两种格式
     * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或者
     * oss://example-bucket/example.mp4 此格式默认oss region与服务接入区域一致。
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
     */
    "InputURL"?: string;
    /**
     * 返回值中媒资文件地址的类型：
     * - "oss" 返回OSS地址，默认。
     * - "cdn" 返回CDN地址。仅当媒资是由vod导入的、且在vod配置了加速域名，才会返回CDN地址。
     * @example `cdn`
     */
    "OutputType"?: string;
    /**
     * 配置对应媒资字段是否返回详细信息，支持字段：
     * AiRoughData.StandardSmartTagJob: 如果媒资提交过标签分析，是否返回详细标签结果。
     * - 默认false，任务结果以URL形式返回。
     * - true，任务结果以文本形式返回。
     * @example `{"AiRoughData.StandardSmartTagJob": false} `
     */
    "ReturnDetailedInfo"?: string;
}
