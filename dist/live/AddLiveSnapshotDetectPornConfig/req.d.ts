export interface AddLiveSnapshotDetectPornConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `testApp`
     */
    "AppName": string;
    /**
     * OSS存储Endpoint名称。
     * 审核完成后，您可以根据审核回调信息，在OSS控制台查找指定的审核内容。OSS Endpoint需要提前创建，创建方法请参考[配置审核](~~199449~~) 。
     * @example `cn-oss-****.aliyuncs.com`
     */
    "OssEndpoint": string;
    /**
     * OSS存储Bucket名称。
     * 审核完成后，您可以根据审核回调信息，在OSS控制台查找指定的审核内容。OSS Bucket需要提前创建，创建方法请参考[配置审核](~~199449~~) 。
     * @example `livebucket`
     */
    "OssBucket": string;
    /**
     * 保存涉黄涉政等违规图片名称。
     * @example `record/{AppName}/{StreamName}/{Sequence}.jpg`
     */
    "OssObject"?: string;
    /**
     * 采样间隔。取值范围：**5~3600**。单位：秒。
     * @example `10`
     */
    "Interval"?: number;
    /**
     * 检测场景列表。
     * @example `live`
     */
    "Scene"?: string[];
}
