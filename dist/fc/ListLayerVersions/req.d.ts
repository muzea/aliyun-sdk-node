export interface ListLayerVersionsRequest {
    /**
     * 层名称
     * @example `my-layer`
     */
    "layerName": string;
    /**
     * 起始版本
     * @example `1`
     */
    "startVersion"?: string;
    /**
     * 返回的版本数量
     * @example `10`
     */
    "limit"?: number;
}
