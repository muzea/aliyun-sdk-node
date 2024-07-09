export interface QueryLoRaJoinPermissionsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 使用该凭证的设备所属产品的ProductKey。
     * @example `a1BwAGV****`
     */
    ProductKey: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    JoinPermissions: {
        /**
         * 调用成功时，返回的入网凭证数据（**JoinPermission**）。
         */
        JoinPermission: {
            /**
             * 入网凭证的启停用状态。取值：
             * - **true**：启用。
             * - **false**：停用。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 入网凭证的类型。取值：
             * - **LOCAL**：专用凭证。
             * - **ROAMING**：漫游凭证。
             * @example `LOCAL`
             */
            JoinPermissionType: string;
            /**
             * 入网凭证ID，入网凭证的唯一标识。
             * @example `80***`
             */
            JoinPermissionId: string;
            /**
             * 入网凭证名称。
             * @example `ForTest`
             */
            JoinPermissionName: string;
            /**
             * 入网凭证创建者的阿里云账号ID。
             * @example `1375364789****`
             */
            OwnerAliyunPk: string;
            /**
             * 入网凭证采用的通信模式。取值：
             * - **A**：终端设备允许双向通信。
             * - **B**：终端设备会在预设时间中开放接收窗口。
             * - **C**：终端设备持续开放接收窗口，只在传输时关闭。
             * @example `A`
             */
            ClassMode: string;
        }[];
    };
}
