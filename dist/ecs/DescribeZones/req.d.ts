interface DescribeZonesRequest {
    /**
    * 可用区所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * @example `false`
    */ "Verbose"?: boolean;
    /**
    * 可用区里支持的资源计费方式。更多详情，请参见[计费概述](~~25398~~)。取值范围：
    * - PrePaid：包年包月
    * - PostPaid（默认）：按量付费
    * @example `PostPaid`
    */ "InstanceChargeType"?: string;
    /**
    * 按量付费实例的竞价策略。当InstanceChargeType为PostPaid时，您可以传入该参数。更多详情，请参见[抢占式实例](~~52088~~)。取值范围:
    *
    * - NoSpot（默认）：正常按量付费实例
    * - SpotWithPriceLimit：设置上限价格的抢占式实例
    * - SpotAsPriceGo：系统自动出价，最高按量付费价格
    *
    * @example `NoSpot`
    */ "SpotStrategy"?: string;
    /**
    *  根据汉语、英语和日语筛选返回结果。更多详情，请参见[RFC7231](https://tools.ietf.org/html/rfc7231)。取值范围：
    *
    * - zh-CN
    * - en-US
    * - ja
    * 默认值：zh-CN。
    * @example `zh-CN`
    */ "AcceptLanguage"?: string;
}
export { DescribeZonesRequest };