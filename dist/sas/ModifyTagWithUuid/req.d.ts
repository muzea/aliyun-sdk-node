export interface ModifyTagWithUuidRequest {
    /**
     * 要修改的标签下的资产实例的UUID列表。多个UUID使用半角逗号（,）分隔。
     * >您可调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口查询资产标签下的资产实例的UUID列表。如果该参数为空，将清空**TagList**参数指定的标签下的所有资产实例。
     * @example `e2737dc3-78f4-4653-a986-dc5fad4b****,c189f0e3-df22-42d5-a73d-02c05667****`
     */
    "UuidList"?: string;
    /**
     * 要修改标签的名称列表。多个标签名称使用半角逗号（,）隔开。
     * > 您可调用[DescribeGroupedTags](~~DescribeGroupedTags~~)接口查询资产标签的名称列表。
     * @example `ac,ad`
     */
    "TagList": string;
    /**
     * 要修改标签的标签ID。
     * > 您可调用[DescribeGroupedTags](~~DescribeGroupedTags~~)接口查询资产标签的标签ID。
     * @example `3897941`
     */
    "TagId"?: string;
    /**
     * 要修改的资产类型。取值：
     * - **ecs**：服务器，包括阿里云和非阿里云服务器。
     * - **cloud_product**：云产品。
     * > 不传该参数，默认指定资产类型为**ecs**。
     * @example `ecs`
     */
    "MachineTypes"?: string;
    /**
     * 主机资产标签管理的服务器的配置信息。此参数为JSON格式，包含以下参数：
     * - **Target**：要添加或删除的服务器的UUID。
     * - **targetType**：生效资产的添加模式。取值：
     *     - **uuid**：按单个服务器添加。
     *     - **groupId**：按照服务器分组添加。
     * - **flag**：对该资产的具体操作。取值：
     *     - **del**：将该服务器从规则中删除。
     *     - **add**：将该服务器添加到规则中。
     * @example `[{"target":"inet-7c676676-06fa-432e-90fb-b802e5d6****","targetType":"uuid","flag":"add"}]`
     */
    "Target"?: string;
}
