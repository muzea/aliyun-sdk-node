export interface DescribeInstanceTypeFamiliesRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例规格族的系列信息。更多详情，请参见[实例规格族](~~25378~~)。取值范围：
     * - ecs-1：系列I实例规格，上线时间较早，性价比高。
     * - ecs-2：系列II实例规格族，第二次软硬件升级，实例性能增强。
     * - ecs-3：系列III实例规格族，实例性能优良，能承载不同业务需求。
     * - ecs-4：系列IV实例规格族，包含常见的企业级实例规格（g5、c5、r5等）、弹性裸金属服务器实例规格（ebmc5s、ebmg5s、ebmr5s等）、突发性能实例规格（t5）等，具有强大的场景适应性，能承载海量热门业务需求，延迟更低。
     * - ecs-5：系列V实例规格族，包含常见的企业级实例规格（g6、c6、r6等）、弹性裸金属服务器实例规格（ebmg6、ebmg6e、ebmc6等）、存储增强型实例规格（g6e）等，响应更快，性能更优越。
     * - ecs-6：系列VI实例规格族，包含企业级实例规格（hfc7、hfg7、hfr7等）、弹性裸金属服务器实例规格（ebmhfg7等），该系列实例规格族正在邀测中。
     * @example `ecs-5`
     */
    "Generation"?: string;
}
