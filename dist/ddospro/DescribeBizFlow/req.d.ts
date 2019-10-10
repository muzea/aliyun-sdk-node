interface DescribeBizFlowRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间戳，单位为秒。
    * @example `1536496397`
    */ "StartTime": number;
    /**
    * 查询结束时间戳，单位为秒。
    * @example `1536498197`
    */ "EndTime": number;
    /**
    * 要查询的高防IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `en`
    */ "Lang"?: string;
}
export { DescribeBizFlowRequest };