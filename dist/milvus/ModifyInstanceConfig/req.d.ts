export interface ModifyInstanceConfigRequest {
    /**
     * 实例ID。
     * @example `c-123xxx`
     */
    "InstanceId": string;
    /**
     * 更新原因。
     * @example `for test`
     */
    "Reason": string;
    /**
     * 用户自定义配置。
     * @example `dataCoord:\n  segment:\n    maxSize: 1024`
     */
    "UserConfig"?: string;
}
