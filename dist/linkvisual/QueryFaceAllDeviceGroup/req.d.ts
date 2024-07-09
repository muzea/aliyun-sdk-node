export interface QueryFaceAllDeviceGroupRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 实例Id
     * @example `TestIotInstanceId`
     */
    "IotInstanceId"?: string;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
    /**
     * 分页号
     * @example `1`
     */
    "PageNo": number;
}
