interface RemoveTagsRequest {
    /**
    * 资源所属地域。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-shenzhen`
    */ "RegionId": string;
    /**
    * 资源类型。取值范围：
    *
    * - disk
    * - instance
    * -  image
    * - securitygroup
    * - snapshot
    * 以上取值均为小写。
    * @example `snapshot`
    */ "ResourceType": string;
    /**
    * 要解绑标签的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例 ID。
    * @example `s-946ntx4wr`
    */ "ResourceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    "Tag"?: string[];
}
export { RemoveTagsRequest };