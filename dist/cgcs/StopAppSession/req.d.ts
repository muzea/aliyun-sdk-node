export interface StopAppSessionRequest {
    /**
     * 平台会话ID，在平台中唯一标识一个会话。
     * 注意：PlatformSessionId和CustomSessionId必须二选一。 如果同时设置了两个参数，以PlatformSessionId为准。
     * @example `100XXXX`
     */
    "PlatformSessionId"?: string;
    /**
     * 自定义会话ID。
     * 注意：PlatformSessionId和CustomSessionId必须二选一。 如果同时设置了两个参数，以PlatformSessionId为准。
     * @example `1ADE0XXXX`
     */
    "CustomSessionId"?: string;
    /**
     * 停止容器参数。此参数将透传到Agent。
     */
    "StopParam"?: {
        /**
         * 目前支持的枚举值包括：
         * - reason：停止原因。
         * @example `reason`
         */
        Key: string;
        /**
         * key对应的取值。
         * @example `exampleValue`
         */
        Value: any;
    }[];
}
