interface RealTimeRecordCommandRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `test.com`
    */ "DomainName": string;
    /**
    * App名。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 直播流名。
    * @example `testStream`
    */ "StreamName": string;
    "OwnerId"?: number;
    /**
    * 操作行为。支持start、stop两种类型。
    * @example `start`
    */ "Command": string;
}
export { RealTimeRecordCommandRequest };