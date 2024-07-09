export interface UpdateKibanaSettingsResponse {
    /**
     * 返回结果：
     * - true：Kibana语言修改成功
     * - false：Kibana语言修改失败
     * @example `true`
     */
    Result: boolean;
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DC*****`
     */
    RequestId: string;
}
