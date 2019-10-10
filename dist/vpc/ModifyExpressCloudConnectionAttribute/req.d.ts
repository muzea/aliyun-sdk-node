interface ModifyExpressCloudConnectionAttributeRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 高速上云连接实例ID。
    * @example `ecc-bp1t9osmuln*******`
    */ "EccId": string;
    "OwnerId"?: number;
    /**
    * 高速上云服务说明。
    * @example `ECC`
    */ "Description"?: string;
    /**
    * 高速上云服务实例名称。
    * @example `doctest`
    */ "Name"?: string;
}
export { ModifyExpressCloudConnectionAttributeRequest };