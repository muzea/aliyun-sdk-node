export interface UpdateVirtualPhysicalConnectionResponse {
    /**
     * 请求ID。
     * @example `7035627E-1C1D-5BC7-A830-F897A35912D1`
     */
    RequestId: string;
    /**
     * 是否已成功修改共享专线的VLAN ID。
     * - **true**：已成功修改。
     * - **false**：未成功修改。
     * @example `true`
     */
    Success: string;
}
