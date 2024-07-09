export interface CountNotificationsRequest {
    /**
     * 通知类型列表，传null值则不过滤类型。
     * - GATEWAY_OFFLINE：网关离线信息。
     * - JOIN_PERMISSION_AUTH_APPLYING：凭证授权中。
     * - JOIN_PERMISSION_AUTH_ACCEPTED：凭证授权成功。
     * - JOIN_PERMISSION_AUTH_CANCELED：撤销凭证授权。
     * - JOIN_PERMISSION_AUTH_REJECTED：拒绝凭证授权。
     * @example `GATEWAY_OFFLINE`
     */
    "Category"?: string[];
    /**
     * 根据通知处理状态过滤，传null值则不过滤处理状态。
     * @example `UNHANDLED`
     */
    "HandleState"?: string;
    /**
     * 查询开始时间，毫秒为单位的 UNIX 时间戳。
     * @example `1514736000000`
     */
    "BeginMillis"?: number;
    /**
     * 查询结束时间，毫秒为单位的 UNIX 时间戳。
     * @example `1514736000000`
     */
    "EndMillis"?: number;
}
