interface DescribeZonesRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 返回值的语言，取值：
    * * zh-CN（中文）
    * * en-US（英文）
    * * ja（日文）
    * > 默认值：zh-CN。
    * @example `en-US`
    */ "AcceptLanguage"?: string;
}
export { DescribeZonesRequest };