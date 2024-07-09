export interface VideoModerationRequest {
    /**
     * 视频审核ServiceCode
     * @example `videoDetection`
     */
    "Service"?: string;
    /**
     * 审核服务需要的参数集，JSON字符串格式。
     * - url：必填，待检测对象的URL，请确保该URL能通过公网访问到。
     * - dataId：选填，检测对象对应的数据ID。
     * 更多信息，请参见[ServiceParameter](https://help.aliyun.com/document_detail/2505810.html)。
     * @example `{"url": "https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4", "dataId": "data1234"}`
     */
    "ServiceParameters"?: string;
}
