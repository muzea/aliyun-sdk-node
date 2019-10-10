interface SetWafConfigRequest {
    "RegionId"?: string;
    /**
    * 您的加速域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 配置ID。
    * @example `123`
    */ "ConfigId"?: number;
}
export { SetWafConfigRequest };