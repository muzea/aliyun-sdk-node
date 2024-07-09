export interface DescribeEipResourcesRequest {
    /**
     * ASM实例ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId"?: string;
    /**
     * 可选参数，用于分页查询，表示查询第几页。默认查询第一页。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 可选参数，用于分页查询，每页查询数目。
     * @example `50`
     */
    "PageSize"?: number;
}
