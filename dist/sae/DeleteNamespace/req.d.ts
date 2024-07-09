export interface DeleteNamespaceRequest {
    /**
     * 长版命名空间ID。如果设置了该参数会继续生效而忽略NameSpaceShortId，该参数是为了兼容保留，推荐使用短版命名空间ID，简化参数。
     * @example `cn-beijing:test`
     */
    "NamespaceId"?: string;
    /**
     * 短版命名空间ID，不需要带上Region。推荐使用该参数。
     * @example `test`
     */
    "NameSpaceShortId"?: string;
}
