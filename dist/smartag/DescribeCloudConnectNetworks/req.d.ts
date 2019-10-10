interface DescribeCloudConnectNetworksRequest {
    /**
    * 云连接网的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 云连接网名称。
    * @example `ccn名称`
    */ "Name"?: string;
    /**
    * 云连接网ID。
    * @example `ccn-l9340rlu5enst*****`
    */ "CcnId"?: string;
    /**
    * 分页查询时设置的每页行数，默认值为10，最大值为50。
    * @example `4`
    */ "PageSize"?: number;
    /**
    * 实例状态列表的页码，默认值是1。
    * @example `4`
    */ "PageNumber"?: number;
    "Tag"?: string[];
}
export { DescribeCloudConnectNetworksRequest };