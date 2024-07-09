export interface DeleteLayerVersionRequest {
    /**
     * 层名称
     * @example `my-layer`
     */
    "layerName": string;
    /**
     * 层版本
     * @example `1`
     */
    "version": number;
}
