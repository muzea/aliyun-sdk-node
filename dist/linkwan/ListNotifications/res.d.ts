export interface ListNotificationsResponse {
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
     * 返回的结果。
     */
    Data: {
        /**
         * 符合过滤条件的通知总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 符合过滤条件的通知列表。
         */
        List: {
            /**
             * 通知发生时间，UNIX时间戳，毫秒为单位。
             * @example `1514736000000`
             */
            NoticeMillis: number;
            /**
             * 通知分类。
             * @example `GATEWAY_OFFLINE`
             */
            Category: string;
            /**
             * 通知处理状态。
             * @example `HANDLED`
             */
            HandleState: string;
            /**
             * 通知ID。
             * @example `123`
             */
            NotificationId: string;
            /**
             * 通知处理时间，UNIX时间戳，毫秒为单位。
             * @example `1514736000001`
             */
            HandledMillis: number;
            /**
             * 记录网关离线信息。
             * 当**Category**字段为**GATEWAY_OFFLINE**时，该字段有值。
             */
            GatewayOfflineInfo: {
                /**
                 * 网关的GwEUI。
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
             * 记录凭证授权信息。
             * 当**Category**字段为**JOINPERMISSION_AUTH**时，该字段有值。
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
                 * @example `0000000000000001`
                 */
                JoinEui: string;
                /**
                 * 入网凭证租户的阿里云账号ID。
                 * @example `some-user`
                 */
                RenterAliyunId: string;
                /**
                 * 工单审批通过的UNIX时间戳，毫秒为单位。
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
                 * @example `126`
                 */
                JoinPermissionId: string;
                /**
                 * 入网凭证的名称。
                 * @example `凭证2`
                 */
                JoinPermissionName: string;
                /**
                 * 工单状态。
                 * @example `ACCEPTED`
                 */
                OrderState: string;
                /**
                 * 工单ID。
                 * @example `123`
                 */
                OrderId: string;
            };
            /**
             * 网关限流通知。
             */
            GatewayDataflowLimit: {
                /**
                 * 通知内容。
                 * @example `GATEWAY_DATAFLOW_LIMIT`
                 */
                AlarmDetail: string;
                /**
                 * 限流时间。
                 * @example `1653450720919`
                 */
                DataflowLimitMillis: number;
                /**
                 * 网关的唯一标识。
                 * @example `0000000000000000`
                 */
                GwEui: string;
            };
        }[];
    };
}
