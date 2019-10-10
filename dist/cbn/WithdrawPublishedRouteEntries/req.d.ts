interface WithdrawPublishedRouteEntriesRequest {
    "RegionId"?: string;
    /**
    * 云企业网的ID。
    * @example `cen-sxjfjkjfkjfiein****`
    */ "CenId": string;
    /**
    * 加载的网络实例ID（VPC或VBR ID）。
    * @example `vpc-rj9gt5nll27onu7****`
    */ "ChildInstanceId": string;
    /**
    * 网络实例类型，取值：
    * - **VPC**：专有网络。
    * - **VBR**：边界路由器。
    * @example `VPC`
    */ "ChildInstanceType": string;
    /**
    * 加载的网络实例的地域ID。
    * @example `cn-hangzhou`
    */ "ChildInstanceRegionId": string;
    /**
    * 网络实例的路由表ID。
    * @example `vtb-bp174d1gje79u1g4t****`
    */ "ChildInstanceRouteTableId": string;
    /**
    * 要解除的路由的目标网段。
    * @example `172.16.xx.xx/24`
    */ "DestinationCidrBlock": string;
}
export { WithdrawPublishedRouteEntriesRequest };