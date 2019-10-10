interface DescribeRegionsRequest {
    "RegionId"?: string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例的计费方式，更多详情，请参见[计费概述](~~25398~~)。取值范围：
    * - PrePaid：包年包月。此时，您必须确认自己的账号支持余额支付或者信用支付，否则将报错InvalidPayMethod。
    * - PostPaid（默认）：按量付费。
    * @example `PrePaid`
    */ "InstanceChargeType"?: string;
    /**
    * 资源类型。
    * @example `Instance`
    */ "ResourceType"?: string;
    /**
    *  根据汉语、英语和日语筛选返回结果。更多详情，请参见[RFC7231](https://tools.ietf.org/html/rfc7231)。取值范围：
    *
    * - zh-CN：中文
    * - en-US：英文
    * - ja：日文
    * 默认值：zh-CN。
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeRegionsRequest };