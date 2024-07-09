export interface DescribeNamespaceRequest {
    /**
     * 命名空间ID。默认命名空间不可查询、更改或删除。
     * @example `cn-beijing:test`
     */
    "NamespaceId"?: string;
    /**
     * 短版命名空间ID，不需要带上region；不超过20个字符，仅允许小写英文字母和数字。
     * @example `test`
     */
    "NameSpaceShortId"?: string;
}
