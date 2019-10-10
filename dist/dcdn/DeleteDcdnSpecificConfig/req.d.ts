interface DeleteDcdnSpecificConfigRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 配置ID。
    * @example `2317`
    */ "ConfigId": string;
    "OwnerId"?: number;
}
export { DeleteDcdnSpecificConfigRequest };