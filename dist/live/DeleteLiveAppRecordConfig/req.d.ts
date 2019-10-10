interface DeleteLiveAppRecordConfigRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 流名称。
    * @example `teststream`
    */ "StreamName"?: string;
}
export { DeleteLiveAppRecordConfigRequest };