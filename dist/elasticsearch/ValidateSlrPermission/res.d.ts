export interface ValidateSlrPermissionResponse {
    /**
     * 是否已创建服务关联角色。支持：
     * - true：已创建
     * - false：未创建
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `BC4ED7DD-8C84-49B5-8A95-456F82E44D13`
     */
    RequestId: string;
}
