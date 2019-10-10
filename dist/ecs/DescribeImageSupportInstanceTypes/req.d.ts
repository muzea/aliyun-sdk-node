interface DescribeImageSupportInstanceTypesRequest {
    /**
    * 实例所属的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 镜像 ID。
    * @example `m-imageid1`
    */ "ImageId"?: string;
    /**
    * 实例规格需要使用到的场景。取值范围：
    * - CreateEcs（默认）：创建实例
    * - Upgrade：升级实例规格
    * - Downgrade：降级实例规格
    * - RenewDowngrade：续费降配
    * @example `*`
    */ "ActionType"?: string;
    "Filter"?: string[];
}
export { DescribeImageSupportInstanceTypesRequest };