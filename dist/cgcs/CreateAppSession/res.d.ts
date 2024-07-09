export interface CreateAppSessionResponse {
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 自定义会话ID。
     * @example `1ADE0XXXX`
     */
    CustomSessionId: string;
    /**
     * 平台会话ID。
     * @example `100XXXX`
     */
    PlatformSessionId: string;
    /**
     * 应用ID。
     * @example `13027XXXX`
     */
    AppId: string;
    /**
     * 应用版本ID。
     * @example `35067XXXX`
     */
    AppVersion: string;
}
