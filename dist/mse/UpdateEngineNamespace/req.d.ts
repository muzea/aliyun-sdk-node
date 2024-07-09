export interface UpdateEngineNamespaceRequest {
    /**
     * 集群名称。
     * @example `name`
     */
    "Name": string;
    /**
     * 集群描述。
     * @example `public`
     */
    "Desc"?: string;
    /**
     * 活跃服务数。
     * @example `3`
     */
    "ServiceCount"?: number;
    /**
     * 命名空间ID。
     * @example `33ff74b6-d21e-4f9b-91a8-bc1ea4ef****`
     */
    "Id": string;
    /**
     * 集群ID。
     * @example `mse-09k1q11****`
     */
    "ClusterId"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
