export interface EvaluateMultiZoneResourceResponse {
    /**
     * 是否有可用资源，返回值：
     * - **true**：有可用的资源。
     * - **false**：没有可用的资源。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `FB703B69-D4D4-4879-B9FE-6A37F67C46FD`
     */
    RequestId: string;
}
