export interface DeleteNacosServiceRequest {
    /**
     * 实例ID。
     * @example `mse-cn-123456`
     */
    "InstanceId": string;
    /**
     * 服务名称。
     * @example `hello_service`
     */
    "ServiceName": string;
    /**
     * 分组名称。
     * @example `DEFAULT_GROUP`
     */
    "GroupName": string;
    /**
     * 命名空间ID。
     * @example `9e78a671-4b9b-4dd4-99c1-0****`
     */
    "NamespaceId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
