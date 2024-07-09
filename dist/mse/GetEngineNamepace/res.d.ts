export interface GetEngineNamepaceResponse {
    /**
     * http状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 命名空间类型，取值如下：
     * - 0：全局配置
     * - 1：默认命名空间
     * - 2：自定义命名空间
     * @example `1`
     */
    Type: string;
    /**
     * 配额。
     * @example `200`
     */
    Quota: string;
    /**
     * 请求ID。
     * @example `FA8F966F-420C-52F5-B49E-6ED7CCE02697`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 配置数量。
     * @example `1`
     */
    ConfigCount: string;
    /**
     * 命名空间展示名称。
     * @example `public`
     */
    NamespaceShowName: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 命名空间描述。
     * @example `mytest`
     */
    NamespaceDesc: string;
    /**
     * 命名空间ID。
     * @example `public`
     */
    Namespace: string;
}
