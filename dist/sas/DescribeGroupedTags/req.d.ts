export interface DescribeGroupedTagsRequest {
    /**
     * 指定要查询的资产类型。不指定资产类型时，默认查询所有资产类型下的标签信息。取值：
     * - **ecs**：服务器
     * - **cloud_product**：云产品
     * @example `ecs`
     */
    "MachineTypes"?: string;
}
