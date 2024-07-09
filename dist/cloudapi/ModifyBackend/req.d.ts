export interface ModifyBackendRequest {
    /**
     * 后端服务名称
     * @example `testHttpModify`
     */
    "BackendName": string;
    /**
     * 后端服务ID
     * @example `20bcdc9453524b78a8beb1f6de21edb7`
     */
    "BackendId": string;
    /**
     * 后端服务类型
     * @example `HTTP`
     */
    "BackendType": string;
    /**
     * 描述信息
     * @example `test`
     */
    "Description"?: string;
}
