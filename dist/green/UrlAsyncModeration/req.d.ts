export interface UrlAsyncModerationRequest {
    /**
     * 服务名称：URL风险链接检测
     * @example `URL风险链接检测：url_detection_pro`
     */
    "Service"?: string;
    /**
     * 内容检测对象的相关参数集，JSON字符串格式，请参见ServiceParameters说明。
     * @example `{
            "url": "https://help.aliyun.com/",
            "dataId": "url123******"
    }`
     */
    "ServiceParameters"?: string;
}
