interface DeleteRouteServiceInCenRequest {
    "RegionId"?: string;
    /**
    * 云企业网实例ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId": string;
    /**
    * 云服务的IP地址或域名。
    * @example `100.64.0.0/8`
    */ "Host": string;
    /**
    * 云服务的服务所在地。
    * @example `cn-shanghai`
    */ "HostRegionId": string;
    /**
    * 云服务的访问所在地。
    * @example `cn-hangzhou`
    */ "AccessRegionId": string;
    "OwnerId"?: number;
    /**
    * 服务关联的VPC。
    * @example `vpc-bp1t36rn9l53iwbsf****`
    */ "HostVpcId"?: string;
}
export { DeleteRouteServiceInCenRequest };