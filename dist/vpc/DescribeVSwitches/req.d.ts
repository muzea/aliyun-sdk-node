interface DescribeVSwitchesRequest {
    /**
    *  交换机所属VPC所在的地域。 您可以通过调用[DescribeRegions](https://help.aliyun.com/document_detail/36063.html?spm=a2c4g.11186623.6.617.672255b1j9oVah)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    *  VPC的ID。
    * @example `vpc-25eq58pl****`
    */ "VpcId"?: string;
    /**
    *  交换机的ID。
    * @example `vsw-23dsf3****`
    */ "VSwitchId"?: string;
    /**
    *  交换机所属区的ID。 您可以通过调用[DescribeZones](https://help.aliyun.com/document_detail/36064.html?spm=a2c4g.11186623.6.618.672255b1j9oVah)接口获取地域ID。
    * @example `cn-hangzhou-d`
    */ "ZoneId"?: string;
    "Tag"?: string[];
    /**
    * 交换机的名称。
    * @example `VSwitch-1`
    */ "VSwitchName"?: string;
    "DryRun"?: boolean;
    /**
    * 是否查询指定地域下的默认交换机，取值：
    * - **true**（默认值）：查询指定地域下的所有交换机。
    * - **false**：不查询默认交换机。
    * @example `true`
    */ "IsDefault"?: boolean;
    /**
    * 路由表的ID。
    * @example `vtb-bp145q7glnuzdvzu2****`
    */ "RouteTableId"?: string;
    /**
    * 资源组ID。
    * @example `1234567`
    */ "ResourceGroupId"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeVSwitchesRequest };