export interface ModifyInstanceRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 实例的描述，长度不超过256个字符。
     * @example `新的实例描述。`
     */
    "Description"?: string;
}
