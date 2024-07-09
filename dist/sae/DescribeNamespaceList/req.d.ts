export interface DescribeNamespaceListRequest {
    /**
     * 是否返回自定义命名空间。取值说明如下：
     * - **true**：返回自定义命名空间。
     * - **false**：不返回自定义命名空间。
     * @example `true`
     */
    "ContainCustom"?: boolean;
    /**
     * 是否排除混合云命名空间。取值说明如下：
     * - **true**：排除混合云命名空间。
     * @example `true`
     */
    "HybridCloudExclude"?: boolean;
}
