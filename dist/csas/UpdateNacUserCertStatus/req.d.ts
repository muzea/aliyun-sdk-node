export interface UpdateNacUserCertStatusRequest {
    /**
     * 终端设备用户ID和设备ID集合。
     */
    "IdList"?: {
        /**
         * 终端设备用户ID。
         * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
         */
        UserId: string;
        /**
         * 终端设备设备ID。
         * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****`
         */
        DevTag: string;
    }[];
    /**
     * 终端用户设备证书状态。取值：
     * - **Enabled**：启用。
     * - **Disabled**：禁用。
     * @example `Enabled`
     */
    "Status"?: string;
}
