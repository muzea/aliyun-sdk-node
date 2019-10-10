interface DeleteLiveSnapshotDetectPornConfigRequest {
    "RegionId"?: string;
    /**
    * App名，支持`*`表示全部。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 用户域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DeleteLiveSnapshotDetectPornConfigRequest };