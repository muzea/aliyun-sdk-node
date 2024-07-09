export interface PutDcdnKvNamespaceRequest {
    /**
     * Namespace描述信息。
     * @example `the first namespace`
     */
    "Description": string;
    /**
     * Namespace名称，不区分大小写，可以包含字母、数字、上划线和下划线。
     * @example `ns1`
     */
    "Namespace": string;
}
