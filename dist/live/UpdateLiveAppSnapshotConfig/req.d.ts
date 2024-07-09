export interface UpdateLiveAppSnapshotConfigRequest {
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
     * 截图周期。取值范围：**5~3600**。单位：秒。
     * @example `5`
     */
    "TimeInterval"?: number;
    /**
     * OSS存储的Endpoint名称。
     * @example `cn-oss-****.aliyuncs.com`
     */
    "OssEndpoint"?: string;
    /**
     * OSS存储Bucket名称。
     * @example `liveBucket****`
     */
    "OssBucket"?: string;
    /**
     * 覆盖截图存储文件名。每次截图都覆盖此文件。
     * - 小于256 Byte。
     * - 目前仅支持生成JPG图片。
     * - 支持变量匹配，包含 {AppName}、{StreamName}。
     * - 传入短划线（-），表示删除此字段。
     * @example `{liveApp****}/{liveStream****}.jpg`
     */
    "OverwriteOssObject"?: string;
    /**
     * 实时截图存储文件名。每次截图都递增存储，调用[DescribeLiveStreamSnapshotInfo](~~44797~~)接口，可以查询某一段时间的文件。
     * - 小于256 Byte。
     * - 目前仅支持生成JPG图片。
     * - 支持变量匹配，包含 {AppName}、{StreamName}、{UnixTimestamp}、{Sequence}，其中 {UnixTimestamp}、{Sequence} 必填一个。
     * - 传入短划线（-），表示删除此字段。
     * @example `snapshot/{liveApp****}/{liveStream****}/{UnixTimestamp****}.jpg`
     */
    "SequenceOssObject"?: string;
    /**
     * 截图回调地址。
     * @example `https://learn.aliyundoc.com`
     */
    "Callback"?: string;
}
