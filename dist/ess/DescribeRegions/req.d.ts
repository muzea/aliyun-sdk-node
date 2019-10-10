interface DescribeRegionsRequest {
    "RegionId"?: string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 根据所选语言筛选返回结果，更多详情请参见[RFC7231](https://tools.ietf.org/html/rfc7231)，取值范围：
    * - zh-CN：根据汉语筛选
    * - en-US：根据英语筛选
    * - ja：根据日语筛选
    * 默认值：zh-CN。
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeRegionsRequest };