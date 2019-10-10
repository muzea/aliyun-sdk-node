interface DescribeLiveStreamRecordIndexFileRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 直播流名称。
    * @example `testStream`
    */ "StreamName": string;
    /**
    * 索引文件ID。
    * @example `xxx`
    */ "RecordId": string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DescribeLiveStreamRecordIndexFileRequest };