interface DeleteAssetsRequest {
    "RegionId"?: string;
    "AssetIds": string[];
    /**
    * 指定访问源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
}
export { DeleteAssetsRequest };