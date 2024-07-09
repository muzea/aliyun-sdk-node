export interface ImportAdminsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 阿里云RAM账户的UID列表，格式为JSON数组的字符串，数组元素最多20个。
     * @example `["26972543893791****"]`
     */
    "RamIdList": string;
}
