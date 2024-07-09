export interface GetNamespaceRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 命名空间名称
     * @example `test`
     */
    "NamespaceName"?: string;
    /**
     * 命名空间ID
     * @example `crn-tiw8t3f8i5lta****`
     */
    "NamespaceId"?: string;
}
