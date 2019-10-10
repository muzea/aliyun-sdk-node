interface DescribleLayer7InstanceRelationsRequest {
    /**
    * @example `cn`
    */ "RegionId"?: string;
    /**
    * @example `1.1.1.1`
    */ "SourceIp"?: string;
    "DomainList": string[];
    /**
    * 资源组ID。
    * @example `test`
    */ "ResourceGroupId"?: string;
}
export { DescribleLayer7InstanceRelationsRequest };