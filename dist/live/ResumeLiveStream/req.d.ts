interface ResumeLiveStreamRequest {
    "RegionId"?: string;
    /**
    * 用于指定主播推流还是客户端拉流，目前支持“publisher”（主播推送）。
    * @example `publisher`
    */ "LiveStreamType": string;
    /**
    * 应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 流名称。
    * @example `testStream`
    */ "StreamName": string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { ResumeLiveStreamRequest };