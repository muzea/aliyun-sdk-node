interface AddLiveSnapshotDetectPornConfigRequest {
    "RegionId"?: string;
    /**
    *
    * 直播流所属应用名称。
    * 支持*，表示全部。
    * @example `testApp`
    */ "AppName": string;
    /**
    * OSS域名。
    * @example `oss.aliyunlive.com`
    */ "OssEndpoint": string;
    /**
    * OSS存储bucket名称。
    * @example `livebucket`
    */ "OssBucket": string;
    /**
    * 用户域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 保存涉黄涉政等违规图片的对象模板。
    * 如不明确给出，默认为`{AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.jpg`。
    * @example `record/{AppName}/{StreamName}/{Sequence}`
    */ "OssObject"?: string;
    "Scene"?: string[];
    /**
    * 采样间隔。单位：秒。
    * 取值范围：**5~3600**。
    * @example `10`
    */ "Interval"?: number;
}
export { AddLiveSnapshotDetectPornConfigRequest };