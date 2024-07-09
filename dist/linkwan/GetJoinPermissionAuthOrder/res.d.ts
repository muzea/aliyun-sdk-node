export interface GetJoinPermissionAuthOrderResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 授权工单的详细信息。
     */
    Data: {
        /**
         * 工单被取消的 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        CanceledMillis: number;
        /**
         * 发起工单的 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        ApplyingMillis: number;
        /**
         * 专用入网凭证的目标租户的阿里云账号ID。
         * @example `some_user`
         */
        RenterAliyunId: string;
        /**
         * 工单被接受的 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        AcceptedMillis: number;
        /**
         * 发起授权的专用入网凭证拥有者的阿里云账号ID。
         * @example `some_user`
         */
        OwnerAliyunId: string;
        /**
         * 工单被回绝的 UNIX 时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        RejectedMillis: number;
        /**
         * 要授权的专用入网凭证ID。
         * @example `123456`
         */
        JoinPermissionId: string;
        /**
         * 工单状态。取值：
         * - **APPLYING**：工单发起，等待目标租户处理。
         * - **ACCEPTED**：工单被接受。
         * - **REJECTED**：工单被回绝。
         * - **CANCELED**：工单被取消。
         * @example `ACCEPTED`
         */
        OrderState: string;
        /**
         * 授权工单ID。
         * @example `123`
         */
        OrderId: string;
    };
}
