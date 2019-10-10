interface DeleteLivePullStreamInfoConfigRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 直播流名。
    * @example `testStream`
    */ "StreamName": string;
    /**
    * 您的拉流域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DeleteLivePullStreamInfoConfigRequest };