interface DescribeRegionsRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * 支持的语言。包括以下取值：
    * - 中文：zh-CN
    * - 英文：en-US
    * - 日文：ja
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeRegionsRequest };