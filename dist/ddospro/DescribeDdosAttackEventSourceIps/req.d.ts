interface DescribeDdosAttackEventSourceIpsRequest {
    "RegionId"?: string;
    /**
    * 分页大小，最大值为**20**。
    * @example `10`
    */ "PageSize": number;
    /**
    * 查询开始时间戳，单位为毫秒。
    * @example `1536891600`
    */ "StartTime": number;
    /**
    * 查询结束时间戳，单位为毫秒。时间跨度不能超过30天。
    * @example `1536893404`
    */ "EndTime": number;
    /**
    * 要查询的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * 分页页号，最小值为**1**。
    * @example `1`
    */ "CurrentPage": number;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { DescribeDdosAttackEventSourceIpsRequest };