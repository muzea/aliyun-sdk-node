interface DescribeClusterServiceConfigRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-F32FB31D82954C64`
    */ "ClusterId": string;
    /**
    * 服务名称。
    * @example `TEZ`
    */ "ServiceName"?: string;
    /**
    * 配置的版本信息，可通过** DescribeClusterServiceConfigHistory **接口获取。
    * @example `0`
    */ "ConfigVersion"?: string;
    /**
    * 当前配置组的ID信息。
    * @example `0`
    */ "GroupId"?: string;
    /**
    * 主机的**instanceId**信息，一般是对应的** ecsId **信息。
    * @example `ecsId`
    */ "HostInstanceId"?: string;
    /**
    * 待查询的配置的标签信息，可通过**DescribeClusterServiceConfigTag**接口获取。
    * @example `tez-site`
    */ "TagValue"?: string;
}
export { DescribeClusterServiceConfigRequest };