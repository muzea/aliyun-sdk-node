interface PublishRouteEntriesRequest {
    "RegionId"?: string;
    /**
    * 云企业网的ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 加载的网络实例ID（VPC或VBR的ID）。
    * @example `vpc-rj9gt5nll27onu****`
    */ "ChildInstanceId": string;
    /**
    * 网络实例类型，取值： **VPC|VBR**。
    * @example `VPC`
    */ "ChildInstanceType": string;
    /**
    * 加载的网络实例的地域ID。
    * @example `us-west-1`
    */ "ChildInstanceRegionId": string;
    /**
    * 网络实例的路由表ID。
    * @example `vtb-bp174d1gje7****`
    */ "ChildInstanceRouteTableId": string;
    /**
    * 要发布的网段。
    * @example `172.16.xx.xx/24`
    */ "DestinationCidrBlock": string;
}
export { PublishRouteEntriesRequest };