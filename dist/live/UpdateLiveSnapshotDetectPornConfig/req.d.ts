export interface UpdateLiveSnapshotDetectPornConfigRequest {
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
     * OSS存储Endpoint名称。
     * @example `cn-oss-****.aliyuncs.com`
     */
    "OssEndpoint"?: string;
    /**
     * OSS存储Bucket名称。
     * @example `liveBucket****`
     */
    "OssBucket"?: string;
    /**
     * 保存涉黄涉政等违规图片名称。
     * @example `{liveApp****}/{liveStream****}/{Date}/{Hour}/{Minute}_{Second}.jpg`
     */
    "OssObject"?: string;
    /**
     * 采样间隔。取值范围：**5-3600**。单位：秒。
     * @example `5`
     */
    "Interval"?: number;
    /**
     *
     * @example `porn`
     */
    "Scene"?: string[];
}
