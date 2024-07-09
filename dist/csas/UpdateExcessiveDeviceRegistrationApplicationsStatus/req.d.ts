export interface UpdateExcessiveDeviceRegistrationApplicationsStatusRequest {
    /**
     * 超额注册申请状态。取值：
     * - **Approved**：通过。只有设备注册申请为待处理状态时允许通过。
     * - **Rejected**：拒绝。只有设备注册申请为待处理状态时允许拒绝。
     * @example `Approved`
     */
    "Status": string;
    /**
     * 超额注册申请ID集合。
     */
    "ApplicationIds": string[];
}
