interface RoutePrivateZoneInCenToVpcRequest {
    "RegionId"?: string;
    /**
    * 云企业网ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 访问所在地。
    * 访问所在地是指通过CEN访问PrivateZone服务的源地域。
    * @example `cn-hangzhou`
    */ "AccessRegionId": string;
    /**
    * 服务所在地。
    * 服务所在地是指通过CEN访问PrivateZone服务的目的地域。
    * @example `cn-hangzhou`
    */ "HostRegionId": string;
    /**
    * 服务所在地的VPC。
    * @example `cn-hangzhou`
    */ "HostVpcId": string;
    "OwnerId"?: number;
}
export { RoutePrivateZoneInCenToVpcRequest };