export interface UpdateLiveAudioAuditConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属的应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * OSS存储Bucket名称。
     * @example `liveBucket****`
     */
    "OssBucket"?: string;
    /**
     * OSS存储Endpoint名称。
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
     * @example ` example.edu`
     */
    "BizType"?: string;
}
