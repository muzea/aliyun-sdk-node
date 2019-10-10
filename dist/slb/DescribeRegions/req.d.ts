interface DescribeRegionsRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 支持的语言。包括以下取值：
    * - 中文：zh-CN
    * - 英文：en-US
    * - 日文：ja
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
    "OwnerId"?: number;
    "access_key_id"?: string;
    "Tags"?: string;
}
export { DescribeRegionsRequest };