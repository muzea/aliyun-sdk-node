export interface DeleteEngineNamespaceRequest {
    /**
     * 命名空间ID。
     * @example `678ca857-****-b1bf-d0a98c5ca84b`
     */
    "Id"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-7pp2d1****`
     */
    "InstanceId"?: string;
    /**
     * 集群ID。
     * @example `mse-0c738****`
     */
    "ClusterId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
