interface DescribeInstancePageRequest {
    "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    /**
    * @example `cn`
    */ "Lang"?: string;
    /**
    * 分页大小，最大值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 分页页号，最小值为**1**。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 要查询的实例ID，优先级比**InstanceIdList**高。
    * @example `ddosBag-cn-xxxxx`
    */ "InstanceId"?: string;
    /**
    * 要查询的线路，取值：
    * - **CUT**：联通
    * - **CT**：电信
    * @example `CUT`
    */ "Line"?: string;
    "InstanceIdList"?: string[];
    "IpList"?: string[];
}
export { DescribeInstancePageRequest };