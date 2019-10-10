interface DescribeGlobalAccelerationInstancesRequest {
    /**
    * 全球加速实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 是否包含未生效的订购数据，默认是**false**。
    * @example `false`
    */ "IncludeReservationData"?: boolean;
    /**
    *  全球加速实例的ID。
    * @example `ga-234sljmxaz****`
    */ "GlobalAccelerationInstanceId"?: string;
    /**
    * 全球加速实例公网 IP。
    * @example `12.34.56.78`
    */ "IpAddress"?: string;
    /**
    *  全球加速实例的名称。
    * @example `GA-1`
    */ "Name"?: string;
    /**
    * 全球加速实例状态，取值：
    * - **Available**：可用
    * - **Inuse**：已分配
    *
    * - **Associating**：绑定中
    *
    * - **Unassociating**：解绑中
    * @example `Available`
    */ "Status"?: string;
    /**
    * 实例带宽类型，取值：
    *
    * - **Sharing**：查询带宽共享型实例
    *
    * - **Exclusive**（默认值）：查询带宽独享型实例
    * @example `Exclusive`
    */ "BandwidthType"?: string;
    /**
    * 被加速的服务的所属区域。取值：
    * - **china-mainland**：中国大陆
    * - **north-america**：北美
    *
    * - **asia-pacific**：亚太
    *
    * - **europe**：欧洲
    * @example `china-mainland`
    */ "ServiceLocation"?: string;
    /**
    * 加速的后端服务器的实例ID。
    * @example `i-sxjbl9x****`
    */ "ServerId"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `10`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeGlobalAccelerationInstancesRequest };