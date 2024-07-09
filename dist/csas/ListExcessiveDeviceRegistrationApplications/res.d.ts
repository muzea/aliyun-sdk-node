export interface ListExcessiveDeviceRegistrationApplicationsResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 超额注册申请总数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 超额注册申请列表。
     */
    Applications: {
        /**
         * 终端设备ID。
         * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****`
         */
        DeviceTag: string;
        /**
         * 终端设备操作系统类型。取值：
         * - **Windows**：Windows系统。
         * - **macOS**：macOS系统。
         * - **Linux**：Linux系统。
         * - **Android**：Android系统。
         * - **iOS**：iOS系统。
         * - **Windows_Wuying**：无影云桌面系统。
         * @example `Windows`
         */
        DeviceType: string;
        /**
         * 终端设备名称。
         * @example `win10-64bit`
         */
        Hostname: string;
        /**
         * 用户名。
         * @example `王先生`
         */
        Username: string;
        /**
         * 用户ID。
         * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
         */
        SaseUserId: string;
        /**
         * 用户所属部门。
         * @example `测试部`
         */
        Department: string;
        /**
         * 终端设备MAC地址。
         * @example `00:16:XX:XX:7c:46`
         */
        Mac: string;
        /**
         * 超额注册申请是否被使用。取值：
         * - **true**：被使用。
         * - **false**：尚未使用。
         * @example `false`
         */
        IsUsed: boolean;
        /**
         * 超额注册申请状态。取值：
         * - **Pending**：待处理。
         * - **Approved**：通过。
         * - **Rejected**：拒绝。
         * @example `Approved`
         */
        Status: string;
        /**
         * 超额注册申请创建时间。
         * @example `2023-07-17 18:46:55`
         */
        CreateTime: string;
        /**
         * 超额注册申请理由。
         * @example `这是一条超额注册申请`
         */
        Description: string;
        /**
         * 超额注册申请ID。
         * @example `reg-application-0f4a127b7e78****`
         */
        ApplicationId: string;
    }[];
}
