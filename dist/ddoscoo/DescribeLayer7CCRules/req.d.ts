interface DescribeLayer7CCRulesRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * 开始索引位置，即从第几个结果开始返回。
    * > 若不传入该参数，则从第0个结果开始返回。
    * @example `0`
    */ "Offset": number;
    /**
    * 分页大小，即每页显示过少个结果。最大值**10**。
    * @example `10`
    */ "PageSize": string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * 要查询的域名。
    * @example `www.aliyun.com`
    */ "Domain": string;
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
}
export { DescribeLayer7CCRulesRequest };