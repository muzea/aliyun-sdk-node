export interface UpdateNacosServiceRequest {
    /**
     * 实例ID。
     * > 此接口同时有InstanceId与ClusterId，则其中一项必填。
     * >
     * @example `mse-cn-st21ri2****`
     */
    "InstanceId"?: string;
    /**
     * 服务名称。
     * @example `com.dingtalk.doc.thumbnails.pdf.ThumbnailService`
     */
    "ServiceName": string;
    /**
     * 分组名称。
     * @example `DEFAULT_GROUP`
     */
    "GroupName"?: string;
    /**
     * 命名空间ID。
     * @example `5e3ee449-b5c0-4aee-b857-32c0acbebf26`
     */
    "NamespaceId"?: string;
    /**
     * 保护阈值。
     * @example `0`
     */
    "ProtectThreshold"?: string;
    /**
     * 集群ID。
     * > 此接口同时有InstanceId与ClusterId，则其中一项必填。
     * >
     * @example `mse-09k1q11****`
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
