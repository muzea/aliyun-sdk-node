export interface GetNotificationResponse {
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 通知信息列表。
     */
    Data: {
        /**
         * 通知发出的时间，毫秒为单位的UNIX时间戳。
         * @example `1514736000000`
         */
        NoticeMillis: number;
        /**
         * 通知分类。取值：
         * - **GATEWAY_OFFLINE**：网关离线信息。
         * - **JOIN_PERMISSION_AUTH_APPLYING**：凭证授权中。
         * - **JOIN_PERMISSION_AUTH_ACCEPTED**：凭证授权成功。
         * - **JOIN_PERMISSION_AUTH_CANCELED**：撤销凭证授权。
         * - **JOIN_PERMISSION_AUTH_REJECTED**：拒绝凭证授权。
         * @example `GATEWAY_OFFLINE`
         */
        Category: string;
        /**
         * 此通知的处理状态。可取值为：
         * - **HANDLED**：已处理。
         * - **UNHANDLED**：未处理。
         * @example `UNHANDLED`
         */
        HandleState: string;
        /**
         * 通知ID。
         * @example `123`
         */
        NotificationId: string;
        /**
         * 通知被处理的时间，毫秒为单位的UNIX时间戳。
         * @example `1514736000001`
         */
        HandledMillis: number;
        /**
         * 网关离线信息。
         * 当**Category**字段为**GATEWAY_OFFLINE**时，该字段有值。
         */
        GatewayOfflineInfo: {
            /**
             * 网关唯一标识。
             * @example `0000000000000000`
             */
            GwEui: string;
            /**
             * 离线时间，毫秒为单位的UNIX时间戳。
             * @example `1514736000000`
             */
            OfflineMillis: number;
        };
        /**
         * 凭证授权信息。
         * 当**Category**字段为**JOINPERMISSION_AUTH**时该字段有值。
         */
        JoinPermissionAuthInfo: {
            /**
             * 工单被取消的UNIX时间戳，毫秒为单位。
             * @example `1514736000000`
             */
            CanceledMillis: number;
            /**
             * 发起工单的UNIX时间戳，毫秒为单位。
             * @example `1514736000000`
             */
            ApplyingMillis: number;
            /**
             * 入网凭证所使用的JoinEUI。
             * @example `d896e0`
             */
            JoinEui: string;
            /**
             * 入网凭证租户的阿里云账号ID。
             * @example `some-user2`
             */
            RenterAliyunId: string;
            /**
             * 工单审批通过的UNIX时间戳 ，毫秒为单位。
             * @example `1514736000000`
             */
            AcceptedMillis: number;
            /**
             * 发起授权的入网凭证拥有者的阿里云账号ID。
             * @example `some-user1`
             */
            OwnerAliyunId: string;
            /**
             * 工单被拒绝的UNIX时间戳，毫秒为单位。
             * @example `1514736000000`
             */
            RejectedMillis: number;
            /**
             * 唯一标识入网凭证的ID。
             * @example `123`
             */
            JoinPermissionId: string;
            /**
             * 入网凭证的名称。
             * @example `凭证1`
             */
            JoinPermissionName: string;
            /**
             * 工单状态。取值：
             * - **APPLYING**：工单发起，等待批准。
             * - **ACCEPTED**：工单被批准。
             * - **REJECTED**：工单被拒绝。
             * - **CANCELED**：工单被取消。
             * @example `123`
             */
            OrderState: string;
            /**
             * 工单ID。
             * @example `123`
             */
            OrderId: string;
        };
    };
}
