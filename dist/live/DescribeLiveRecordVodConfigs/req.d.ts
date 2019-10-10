interface DescribeLiveRecordVodConfigsRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `play.aliyunlive.com`
    */ "DomainName": string;
    /**
    * 直播流所属应用名称。
    * @example `app`
    */ "AppName"?: string;
    /**
    * 直播流名称。
    * @example `stream`
    */ "StreamName"?: string;
    /**
    * 分页的页码。默认值：**1**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 每页大小。默认值为**10**。
    * - 取值范围：5~100
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeLiveRecordVodConfigsRequest };