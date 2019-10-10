interface DescribeDdosAttackTypeChartRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间戳，单位为毫秒。
    * @example `1536893404`
    */ "StartTime": number;
    /**
    * 查询结束时间戳，单位为毫秒。
    * @example `1536891600`
    */ "EndTime": number;
    /**
    * 要查询的高防实例IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `en`
    */ "Lang"?: string;
}
export { DescribeDdosAttackTypeChartRequest };