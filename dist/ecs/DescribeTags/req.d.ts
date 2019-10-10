interface DescribeTagsRequest {
    /**
    * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    *  分页查询时设置的每页行数。
    * 最大值：100
    * 默认值：50
    * @example `50`
    */ "PageSize"?: number;
    /**
    *  标签列表的页码。
    * 起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 资源类型。取值范围：
    *
    * - disk
    * - instance
    * - image
    * - securitygroup
    * - snapshot
    * 以上取值均为小写。
    * @example `snapshot`
    */ "ResourceType"?: string;
    /**
    * 标签绑定的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。
    * @example `s-946ntx4wr`
    */ "ResourceId"?: string;
    "Tag"?: string[];
    "Category"?: string;
}
export { DescribeTagsRequest };