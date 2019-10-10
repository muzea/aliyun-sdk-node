interface DeleteLiveRecordVodConfigRequest {
    /**
    * 区域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName": string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    /**
    * 播流地址。
    * @example `testApp`
    */ "StreamName"?: string;
}
export { DeleteLiveRecordVodConfigRequest };