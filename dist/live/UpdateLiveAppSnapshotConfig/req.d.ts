interface UpdateLiveAppSnapshotConfigRequest {
    "RegionId"?: string;
    /**
    *
    * 直播流所属应用名称。
    * 支持**＊**号，代表该域名下所有的AppName。
    * @example `test123`
    */ "AppName": string;
    /**
    * 加速域名。
    * @example `test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 截图周期，单位：秒。
    * 取值范围：**5~3600**。
    * @example `5`
    */ "TimeInterval"?: number;
    /**
    * OSSEndpoint域名。
    * @example `oss-cn-shanghai.aliyuncs.com`
    */ "OssEndpoint"?: string;
    /**
    * OSSBucket名称。
    * @example `test123`
    */ "OssBucket"?: string;
    /**
    * OSS存储文件名，每次截图都覆盖此文件。
    * - 小于256bytes。
    * - 目前仅支持生成jpg图片。
    * - 支持变量匹配，包含 {AppName}、{StreamName}。例如：`{AppName}/{StreamName}.jpg`。
    * - 传入**-**，表示删除此字段。
    * @example `{AppName}/{StreamName}.jpg`
    */ "OverwriteOssObject"?: string;
    /**
    * OSS存储文件名。每次截图都递增存储，**DescribeLiveStreamSnapshotInfo**接口查询一段时间的文件。
    * - 小于256bytes。
    * - 目前仅支持生成jpg图片。
    * - 支持变量匹配，包含 {AppName}、{StreamName}、{UnixTimestamp}、{Sequence}，其中 {UnixTimestamp}、{Sequence} 必填一个。例如：`snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`。
    * - 传入**-**，表示删除此字段。
    * @example `snapshot/{AppName}/{StreamName}/{UnixTimestamp}.jpg`
    */ "SequenceOssObject"?: string;
}
export { UpdateLiveAppSnapshotConfigRequest };