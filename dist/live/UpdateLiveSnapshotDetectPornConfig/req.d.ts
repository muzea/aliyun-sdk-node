interface UpdateLiveSnapshotDetectPornConfigRequest {
    "RegionId"?: string;
    /**
    * App名，支持*表示全部。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 用户域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * OSS域名。
    * @example `oss-cn-shanghai.aliyuncs.com`
    */ "OssEndpoint"?: string;
    /**
    * OSS存储bucket名称。
    * @example `test123`
    */ "OssBucket"?: string;
    /**
    * 保存涉黄涉政等违规图片的对象模板。
    * 如不明确给出，默认为`{AppName}/{StreamName}/{Date}/{Hour}/{Minute}{Second}.jpg`。
    * @example `{AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.jpg`
    */ "OssObject"?: string;
    /**
    * 采样间隔。
    * 取值范围：**5-3600秒**。
    * @example `5`
    */ "Interval"?: number;
    "Scene"?: string[];
}
export { UpdateLiveSnapshotDetectPornConfigRequest };