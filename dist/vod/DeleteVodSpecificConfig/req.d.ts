interface DeleteVodSpecificConfigRequest {
    "RegionId"?: string;
    /**
    * 点播加速域名。
    * @example `www.example.com`
    */ "DomainName": string;
    /**
    * 配置ID。
    * @example `2317`
    */ "ConfigId": string;
    "OwnerId"?: number;
}
export { DeleteVodSpecificConfigRequest };