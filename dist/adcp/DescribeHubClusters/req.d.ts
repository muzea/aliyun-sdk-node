export interface DescribeHubClustersRequest {
    /**
     * 面向场景时的主控类型，取值：
     * - `Default`：标准场景主控实例。
     * - `XFlow`：工作流场景主控实例。
     * 默认值：`Default`。
     * @example `Default`
     */
    "Profile"?: string;
    /**
     * 资源组ID
     * @example `rg-aek3dinj3xkf***`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。最多支持指定20个标签。
     */
    "Tag"?: any[];
}
