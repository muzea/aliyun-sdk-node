export interface DeleteLayerRequest {
    /**
     * 层ID，可通过接口ListLayers获取。
     * @example `3`
     */
    "LayerId"?: string;
    /**
     * 实例ID，可通过接口ListInstances获取。
     * @example `pairec-cn-abcdefg1234`
     */
    "InstanceId"?: string;
}
