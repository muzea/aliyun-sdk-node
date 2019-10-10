interface DescribeBackSourceCidrRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
    /**
    * 要查询的防护线路。
    * @example `coop-line-001`
    */ "Line"?: string;
}
export { DescribeBackSourceCidrRequest };