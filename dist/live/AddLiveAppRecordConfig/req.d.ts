interface AddLiveAppRecordConfigRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * 支持通配符(*)，代表该域名下所有的AppName。
    * @example `testApp`
    */ "AppName": string;
    /**
    * OssEndpoint域名。
    * @example `oss-cn-shanghai.aliyuncs.com`
    */ "OssEndpoint": string;
    /**
    * OssBucket名称。
    * @example `testBucket`
    */ "OssBucket": string;
    "RecordFormat": string[];
    /**
    * 加速域名，指播放域名。
    * @example `test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 流名称。
    * @example `teststream`
    */ "StreamName"?: string;
    /**
    * 录制开始时间。格式：UTC时间。
    * 设置时间必须从当前时间开始15天之内的时间，只在流级别录制(StreamName不为空)有效。
    * @example `2018-04-10T09:57:21Z`
    */ "StartTime"?: string;
    /**
    * 录制结束时间。格式：UTC时间。
    * 设置时间必须从当前时间开始15天之内的时间，只在流级别录制(StreamName不为空)有效，且时间应晚于录制开始时间。
    * @example `2018-04-16T09:57:21Z`
    */ "EndTime"?: string;
    /**
    * 按需录制。
    * - 0表示关闭。
    * - 1表示通过HTTP回调方式。
    * - 7表示默认不录制，通过RealTimeRecordCommand接口手动控制录制启停。
    * >使用1方式时候需要先通过[AddLiveRecordNotifyConfig接口](~~51831~~)设置OnDemandUrl，否则默认不录制。
    * @example `1`
    */ "OnDemand"?: number;
}
export { AddLiveAppRecordConfigRequest };