export interface AddLiveAppSnapshotConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 截图周期。单位：秒。取值范围：**5~3600**。
     * @example `5`
     */
    "TimeInterval": number;
    /**
     * OSS存储的Endpoint名称。
     * 配置完成后，您可以根据配置回调信息，在OSS控制台查找指定的配置内容。OSS Endpoint需要提前创建，创建方法请参考[配置OSS](~~84932~~) 。
     * @example `cn-oss-****.aliyuncs.com`
     */
    "OssEndpoint": string;
    /**
     * OSS存储的Bucket名称。
     * 配置完成后，您可以根据配置回调信息，在OSS控制台查找指定的配置内容。OSS Bucket需要提前创建，创建方法请参考[配置OSS](~~84932~~) 。
     * @example `liveBucket****`
     */
    "OssBucket": string;
    /**
     * 覆盖截图存储文件名。每次截图都覆盖此文件。
     * - 小于256 Byte。
     * - 目前仅支持生成JPG图片。
     * - 支持变量匹配，包含{AppName}、{StreamName}。
     * @example `{AppName}/{StreamName}.jpg`
     */
    "OverwriteOssObject"?: string;
    /**
     * 实时截图存储文件名。
     * 每次截图都递增存储，调用[DescribeLiveStreamSnapshotInfo](~~44797~~)接口可以查询某一段时间的截图文件。
     * - 小于256 Byte。
     * - 目前仅支持生成JPG图片。
     * - 支持变量匹配，包含{AppName}、{StreamName}、{UnixTimestamp}、{Sequence}，其中 {UnixTimestamp}、{Sequence} 必填一个。
     * @example `snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`
     */
    "SequenceOssObject"?: string;
    /**
     * 截图回调地址。
     * @example `https://learn.aliyundoc.com`
     */
    "Callback"?: string;
}
