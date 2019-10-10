interface DescribeDdosFlowProportionDiagramRequest {
    "RegionId"?: string;
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
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { DescribeDdosFlowProportionDiagramRequest };