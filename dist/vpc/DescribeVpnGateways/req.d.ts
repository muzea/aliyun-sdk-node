interface DescribeVpnGatewaysRequest {
    /**
    * VPN网关所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    *  VPN网关所属VPC的ID。
    * @example `vpc-bp1ub1yt9cvakoelj****`
    */ "VpcId"?: string;
    /**
    * VPN网关的ID。
    * @example `vpn-bp1q8bgx4xnkm2ogj****`
    */ "VpnGatewayId"?: string;
    /**
    * VPN网关的状态，取值：
    * - **init**
    * - **provisioning**
    * - **active**
    * - **updating**
    * - **deleting**
    * @example `init`
    */ "Status"?: string;
    /**
    * VPN网关的付费状态。
    * 取值： **Normal | FinancialLocked **
    * @example `Normal`
    */ "BusinessStatus"?: string;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeVpnGatewaysRequest };