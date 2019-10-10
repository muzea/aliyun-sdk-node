interface DescribeDemandsRequest {
    /**
    * 目标地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `155780923770`
    */ "OwnerId"?: number;
    "Tag"?: string[];
    /**
    * 报备单列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 是否只预检此次请求。
    * - true：发送检查请求，不会查询报备单状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
    * - false（默认值）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询报备单状况。
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    /**
    * 报备实例的规格族。
    * @example `ecs.g5`
    */ "InstanceTypeFamily"?: string;
    /**
    * 报备实例的规格。
    * @example `ecs.g5.large`
    */ "InstanceType"?: string;
    /**
    * 实例的计费方式。取值范围：
    * - PostPaid：按量付费
    * - PrePaid：包年包月
    * @example `PostPaid`
    */ "InstanceChargeType"?: string;
    "DemandStatus"?: string[];
}
export { DescribeDemandsRequest };