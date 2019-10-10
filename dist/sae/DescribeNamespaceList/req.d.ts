interface DescribeNamespaceListRequest {
    "RegionId"?: string;
    /**
    * 是否返回自定义命名空间
    * @example `true`
    */ "ContainCustom"?: boolean;
    /**
    * 是否排除混合云命名空间
    * @example `true`
    */ "HybridCloudExclude"?: boolean;
}
export { DescribeNamespaceListRequest };