interface DescribeHealthCheckConfigRequest {
    "RegionId"?: string;
    /**
    * 要查询的高防IP。
    * @example `1.1.1.1`
    */ "Ip": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
}
export { DescribeHealthCheckConfigRequest };