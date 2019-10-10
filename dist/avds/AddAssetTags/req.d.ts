interface AddAssetTagsRequest {
    "RegionId"?: string;
    "Assets": string[];
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定返回结果的语言环境。
    * - **zh**：中文
    * - **en**：英文
    * @example `zh`
    */ "Lang"?: string;
    "Tags"?: string[];
}
export { AddAssetTagsRequest };