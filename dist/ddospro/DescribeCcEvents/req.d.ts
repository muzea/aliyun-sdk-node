interface DescribeCcEventsRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `en`
    */ "Lang"?: string;
    /**
    * 查询开始时间戳，单位为秒。
    * @example `1536891600`
    */ "StartTime"?: number;
    /**
    * 要查询的域名。
    * @example `www.aliyun.com`
    */ "Domain"?: string;
    /**
    * 查询结束时间戳，单位为秒。时间跨度不能超过30天。
    * @example `1534921519`
    */ "EndTime"?: number;
    /**
    * 分页大小，最大值为**20**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 分页页号，最小值为**1**。
    * @example `1`
    */ "PageNo"?: number;
}
export { DescribeCcEventsRequest };