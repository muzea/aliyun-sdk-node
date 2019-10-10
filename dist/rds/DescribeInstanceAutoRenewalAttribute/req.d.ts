interface DescribeInstanceAutoRenewalAttributeRequest {
    /**
    * 地域名称的ID，例如：cn-hangzhou
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 用于保证幂等性。
    * @example `ETnLKlblzczshOTUbOCziJZNwHlYBQ`
    */ "ClientToken"?: string;
    /**
    * 隐藏参数
    * @example `隐藏参数`
    */ "proxyId"?: string;
    /**
    * 实例名ID。
    * @example `rm-bp1842vmucoa5w874`
    */ "DBInstanceId"?: string;
    /**
    * 每页记录数，可选值为30、50、100，默认值为30。
    * @example `30`
    */ "PageSize"?: number;
    /**
    * 当前页数。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeInstanceAutoRenewalAttributeRequest };