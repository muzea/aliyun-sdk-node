interface DescribeAutoProvisioningGroupInstancesRequest {
    /**
    * 弹性供应组所在地域的ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 弹性供应组的ID。
    * @example `apg-uf6jel2bbl62wh13****`
    */ "AutoProvisioningGroupId": string;
    /**
    * @example `123456`
    */ "OwnerId"?: number;
    /**
    * 实例状态列表的页码。起始值：**1**，默认值：**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：**100**，默认值：**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeAutoProvisioningGroupInstancesRequest };