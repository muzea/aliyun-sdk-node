export interface GetAppSessionResponse {
    /**
     * 请求ID
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 自定义会话ID
     * @example `1ADE0XXXX`
     */
    CustomSessionId: string;
    /**
     * 平台会话ID
     * @example `100XXXX`
     */
    PlatformSessionId: string;
    /**
     * 应用ID
     * @example `13027XXXX`
     */
    AppId: string;
    /**
     * 应用版本ID
     * @example `35067XXXX`
     */
    AppVersion: string;
    /**
     * 应用会话状态，包括：
     * - starting：启动中
     * - running：执行中
     * - stopping：停止中
     * @example `running`
     */
    Status: string;
    /**
     * 业务特定的信息，如会话启动/停止时间。
     */
    BizInfo: {
        /**
         * 会话启动时间
         * @example `2022-07-20 17:58:51`
         */
        StartTime: string;
        /**
         * 会话停止时间
         * @example `2022-07-20 17:58:57`
         */
        StopTime: string;
    };
}
