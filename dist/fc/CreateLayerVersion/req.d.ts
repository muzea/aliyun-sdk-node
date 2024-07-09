export interface CreateLayerVersionRequest {
    /**
     * 层名称
     * @example `my-layer`
     */
    "layerName": string;
    /**
     * 层配置信息
     */
    "body": any;
}
