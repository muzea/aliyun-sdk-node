interface ResolveAndRouteServiceInCenRequest {
    "RegionId"?: string;
    /**
    * 云企业网ID。
    * @example `cen-ckwa2hhmuislse****`
    */ "CenId": string;
    /**
    * 服务域名或IP。
    * @example `100.64.1.0/24`
    */ "Host": string;
    /**
    * 云服务的服务所在地。
    * @example `cn-beijing`
    */ "HostRegionId": string;
    "AccessRegionIds": string[];
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
    * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
    */ "ClientToken"?: string;
    /**
    * 更新间隔，默认值为**5**，不支持修改。
    * @example `5`
    */ "UpdateInterval"?: number;
    /**
    * 服务关联的VPC。
    * @example `vpc-o6woh5s494zueq40v****`
    */ "HostVpcId"?: string;
}
export { ResolveAndRouteServiceInCenRequest };