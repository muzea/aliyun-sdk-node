interface AddTagsRequest {
    /**
    * 资源所在的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源类型。取值范围：
    * -   disk
    * -   instance
    * -   image
    * -   securitygroup
    * -   snapshot
    * 以上取值均为小写。
    * @example `instance`
    */ "ResourceType": string;
    /**
    * 要绑定标签的资源ID。例如，当资源类型（ResourceType）为实例（instance）时，资源ID可以理解为实例ID。
    * @example `i-instanceid1`
    */ "ResourceId": string;
    "Tag": string[];
    /**
    * @example `cn-hangzhou`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { AddTagsRequest };