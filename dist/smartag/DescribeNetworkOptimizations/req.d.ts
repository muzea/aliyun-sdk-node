interface DescribeNetworkOptimizationsRequest {
    /**
    * 网络优化实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络优化实例ID，多个ID以逗号隔开。
    * 不填则查询Region内所有网络优化实例规则。
    * @example `opt-hit1puq1t8j5****`
    */ "NetworkOptId"?: string;
    /**
    * 绑定的云连接网ID。
    * @example `ccn-wfrxakqrppqzo*****`
    */ "CcnId"?: string;
    /**
    * 网络优化实例名称。
    * @example `doctest`
    */ "Name"?: string;
    "OwnerId"?: number;
    "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为50，默认值为10。
    * @example `2`
    */ "PageSize"?: number;
}
export { DescribeNetworkOptimizationsRequest };