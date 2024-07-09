export interface ListServiceContainersRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId"?: string;
    /**
     * 服务名称。
     * @example `foo`
     */
    "ServiceName"?: string;
    /**
     * 服务实例的名称。
     * @example `foo-69xxxx4f4-5w9r9`
     */
    "InstanceName"?: string;
}
