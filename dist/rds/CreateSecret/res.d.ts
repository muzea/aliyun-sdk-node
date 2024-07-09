export interface CreateSecretResponse {
    /**
     * 请求ID。
     * @example `DF4961DD-16F5-5B24-BD4C-0C7788F7ADAF`
     */
    RequestId: string;
    /**
     * 创建的Data API账号的用户凭证。
     * @example `acs:rds:cn-hangzhou:1335786****:dbInstance/rm-bp1m7l3j63****`
     */
    SecretArn: string;
    /**
     * 用户凭证的名称。
     * @example `Foo`
     */
    SecretName: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
}
