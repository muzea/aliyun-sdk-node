export interface GetAppSessionRequest {
    /**
     * 平台会话ID，在平台中唯一标识一个会话。
     * 注意：PlatformSessionId和CustomSessionId必须二选一。 如果同时设置了两个参数，以PlatformSessionId为准。
     * @example `100XXXX`
     */
    "PlatformSessionId"?: string;
    /**
     * 自定义会话ID，用于查询最近一条未结束的应用会话记录。
     * 注意：PlatformSessionId和CustomSessionId必须二选一。 如果同时设置了两个参数，以PlatformSessionId为准。
     * @example `1ADE0XXXX`
     */
    "CustomSessionId"?: string;
}
