interface DescribeInstanceTypeFamiliesRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例规格族的系列信息。更多详情，请参见[实例规格族](~~25378~~)。取值范围：
    * - ecs-1：系列I实例规格，上线时间较早，性价比高。
    * - ecs-2：系列II实例规格族，第二次软硬件升级，实例性能增强。
    * - ecs-3：系列III实例规格族，实例性能优良，能承载不同业务需求，响应更快。
    * - ecs-4：系列IV实例规格族，最新规格族，具有强大的场景适应性，能承载海量热门业务需求，延迟更低。
    * @example `ecs-3`
    */ "Generation"?: string;
}
export { DescribeInstanceTypeFamiliesRequest };