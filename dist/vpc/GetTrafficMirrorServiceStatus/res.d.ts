export interface GetTrafficMirrorServiceStatusResponse {
    /**
     * 流量镜像功能是否开通，取值：
     * - **true**：已开通。
     * - **false**：未开通。
     * @example `true`
     */
    Enabled: boolean;
    /**
     * 请求ID。
     * @example `37626066-2C6C-4B62-ADD3-498920C409C5`
     */
    RequestId: string;
}
