export interface AddLiveAudioAuditConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 直播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * OSS存储的Bucket名称。
     * @example `liveBucket****`
     */
    "OssBucket"?: string;
    /**
     * OSS存储的Endpoint名称。
     * @example `cn-oss-****.aliyuncs.com`
     */
    "OssEndpoint"?: string;
    /**
     * OSS存储的录制文件名。
     * @example `liveObject****`
     */
    "OssObject"?: string;
    /**
     * 业务类型。可用于选择模型，默认值为域名。
     * @example `example.edu`
     */
    "BizType"?: string;
}
