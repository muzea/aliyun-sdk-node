interface ListClusterHostRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-D7CA98AAA96A****`
    */ "ClusterId": string;
    /**
    * ECS实例ID。
    * @example `i-bp11vdyh3l6xvmnl****`
    */ "HostInstanceId"?: string;
    /**
    * 机器组ID。
    * @example `G-A5EA210E15FCFF8E`
    */ "HostGroupId"?: string;
    /**
    * 主机名。
    * @example `emr-header-1`
    */ "HostName"?: string;
    /**
    * 主机内网IP。
    * @example `192.***.***.***`
    */ "PrivateIp"?: string;
    /**
    * 主机公网IP。
    * @example `47.***.***.***`
    */ "PublicIp"?: string;
    /**
    * 机器组类型。
    * @example `MASTER`
    */ "GroupType"?: string;
    /**
    * 安装了指定组件名称的主机。
    * @example `HiveServer2`
    */ "ComponentName"?: string;
    "StatusList"?: string[];
    /**
    * 分页页数，从1开始。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页大小。
    * @example `10`
    */ "PageSize"?: number;
}
export { ListClusterHostRequest };