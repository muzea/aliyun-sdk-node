interface DescribeResourceProfilesRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 资源参数集列表的页码。起始值：**1**。
    * 默认值：**1** 。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：**100**。
    * 默认值：**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 资源参数集ID。
    * @example `3`
    */ "ResourceProfileId"?: string;
    /**
    * 实例ID。
    * @example `cityvisual-Instance`
    */ "InstanceId": string;
}
export { DescribeResourceProfilesRequest };