interface DeleteSpecificConfigRequest {
    "RegionId"?: string;
    /**
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 配置ID，多个用逗号（,）隔开。
    * @example `2317`
    */ "ConfigId": string;
    "OwnerId"?: number;
}
export { DeleteSpecificConfigRequest };