export interface VoiceModerationRequest {
    /**
     * 语音审核ServiceCode
     * @example `audio_media_detection`
     */
    "Service": string;
    /**
     * 审核服务需要的参数集，JSON字符串格式。
     * url：必填，待检测对象的URL，请确保该URL能通过公网访问到。
     * dataId：选填，检测对象对应的数据ID。
     * 更多信息，请参见ServiceParameter。
     * @example `{"url": "http://aliyundoc.com/test.flv", "dataId": "data1234"}`
     */
    "ServiceParameters"?: string;
}
