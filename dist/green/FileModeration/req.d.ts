export interface FileModerationRequest {
    /**
     * 文件检测增强版支持的服务
     * @example `document_detection`
     */
    "Service"?: string;
    /**
     * 审核服务需要的参数集，JSON字符串格式。
     * - url：必填，待检测对象的URL，请确保该URL能通过公网访问到。
     * - dataId：选填，检测对象对应的数据ID。
     * @example `{"url":"https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf"}`
     */
    "ServiceParameters"?: string;
}
