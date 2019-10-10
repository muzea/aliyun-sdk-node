interface DescribeCenAttachedChildInstanceAttributeRequest {
    "RegionId"?: string;
    /**
    * 指定云企业网实例的ID。
    * @example `cen-3cub0ges01xmvm****`
    */ "CenId": string;
    /**
    * 要查询的已加载网络实例的ID。
    * @example `vpc-sa17uy0itvgxiq9gb****`
    */ "ChildInstanceId": string;
    /**
    * 已加载的网络实例的类型。
    * @example `VPC`
    */ "ChildInstanceType": string;
    /**
    * 已加载网络实例的 Region ID。
    * @example `cn-hangzhou`
    */ "ChildInstanceRegionId": string;
    "OwnerId"?: number;
}
export { DescribeCenAttachedChildInstanceAttributeRequest };