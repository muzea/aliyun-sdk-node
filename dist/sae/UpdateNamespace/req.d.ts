export interface UpdateNamespaceRequest {
    /**
     * 长版命名空间ID。如果设置了该参数会继续生效而忽略NameSpaceShortId，为了兼容保留，推荐使用短版命名空间ID；格式为`<RegionId>:<NamespaceId>`，`NamespaceId`仅允许小写英文字母和数字，例如`cn-beijing:test`，不超过32个字符。SAE支持的**RegionId**，请参见[DescribeRegions](~~126213~~)。
     * @example `cn-beijing:test`
     */
    "NamespaceId"?: string;
    /**
     * 命名空间名称，不超过64个字符。
     * @example `name`
     */
    "NamespaceName": string;
    /**
     * 命名空间描述，不超过100个字符。
     * @example `desc`
     */
    "NamespaceDescription"?: string;
    /**
     * 短版命名空间ID，不需要带上region，不超过20个字符，推荐；仅允许小写英文字母和数字。
     * @example `test`
     */
    "NameSpaceShortId"?: string;
    "EnableMicroRegistration"?: boolean;
}
