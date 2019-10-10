interface AddAssetsRequest {
    "RegionId"?: string;
    "Assets": string[];
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    "StartAfterVerified"?: boolean;
    "AssetGroupId"?: string;
    "Tags"?: string[];
}
export { AddAssetsRequest };