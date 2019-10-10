interface UpdateLiveDetectNotifyConfigRequest {
    "RegionId"?: string;
    /**
    * 发现涉黄等违规内容的回调函数。
    * @example `http://www.yourdomain.cn/examplecallback.action`
    */ "NotifyUrl": string;
    /**
    * 用户域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { UpdateLiveDetectNotifyConfigRequest };