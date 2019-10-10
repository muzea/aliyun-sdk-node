interface ForbidLiveStreamRequest {
    /**
    * 所在区域。
    * @example `cn-beijing`
    */ "RegionId"?: string;
    /**
    * 应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 流名称。
    * @example `testStream`
    */ "StreamName": string;
    /**
    * 用于指定主播推流还是客户端拉流，目前支持 “publisher”(主播推送)。
    * @example `publisher`
    */ "LiveStreamType": string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    /**
    * 是否只断流不加入黑名单，取值: yes，表示只断流不加黑名单
    * @example `no`
    */ "Oneshot"?: string;
    "ControlStreamAction"?: string;
    /**
    * 恢复流的时间。
    * UTC时间，格式：2015-12-01T17:37:00Z。
    * @example `2015-12-01T17:37:00Z`
    */ "ResumeTime"?: string;
}
export { ForbidLiveStreamRequest };