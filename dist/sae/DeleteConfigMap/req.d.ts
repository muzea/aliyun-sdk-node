export interface DeleteConfigMapRequest {
    /**
     * 需要删除的ConfigMap实例ID。需要调用[ListNamespacedConfigMaps](~~176917~~)接口查看。
     * @example `1`
     */
    "ConfigMapId": number;
}
