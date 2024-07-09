export interface DescribeNamespaceResourcesRequest {
    /**
     * 长版命名空间ID。如果设置了该参数会继续生效而忽略NameSpaceShortId，该参数是为了兼容保留，推荐使用短版命名空间ID，简化参数。
     * @example `cn-shanghai:test`
     */
    "NamespaceId"?: string;
    /**
     * 短版命名空间ID，不需要带上region，推荐。
     * @example `test`
     */
    "NameSpaceShortId"?: string;
}
