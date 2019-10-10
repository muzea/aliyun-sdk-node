interface DescribeInstancesRequest {
    /**
    * 实例所属的地域ID。您可以调用DescribeRegions查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 实例名称，支持使用通配符*进行模糊搜索。
    * @example `*Joshua`
    */ "InstanceName"?: string;
    /**
    * 实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
    * @example `["cityvisual-xxxxxxxxx", "cityvisual-yyyyyyyyy", … "cityvisual-zzzzzzzzz"]`
    */ "InstanceIds"?: string;
    /**
    * 实例状态列表的页码。起始值：1。
    * 默认值：1 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeInstancesRequest };