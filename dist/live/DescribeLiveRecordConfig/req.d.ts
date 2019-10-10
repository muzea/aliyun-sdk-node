interface DescribeLiveRecordConfigRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName"?: string;
    /**
    * 直播流名称。
    * @example `myStreamName`
    */ "StreamName"?: string;
    /**
    * 当前页码。默认值：**1**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 每页大小。默认值：**10**，取值范围：**5~30**。
    * @example `5`
    */ "PageSize"?: number;
    /**
    * 排序。取值：
    * - asc（默认值）：升序
    * - desc：降序
    * @example `asc`
    */ "Order"?: string;
}
export { DescribeLiveRecordConfigRequest };