interface DescribeInstanceStatusRequest {
    /**
    * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例所属可用区。
    * @example `cn-hangzhou-d`
    */ "ZoneId"?: string;
    /**
    * 实例所属的集群ID。
    * @example `cls-clusterid1`
    */ "ClusterId"?: string;
    /**
    * 实例状态列表的页码。起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。取值范围：1~50
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeInstanceStatusRequest };