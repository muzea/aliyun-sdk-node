export interface GenerateTokenRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "instanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "applicationId": string;
    /**
     * 客户端ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "client_id"?: string;
    /**
     * 客户端密钥，赋值场景：
     * 当grant\_type为client\_credentials"，采用client\_secret\_post方式时，需填写此值。
     * @example `CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx`
     */
    "client_secret"?: string;
    /**
     * 授权类型，目前支持的类型如下：
     * - client\_credentials 客户端模式，需要传入client\_id和client\_secret
     * - refresh\_token 刷新令牌
     * - authorization\_code 授权码模式
     * - urn:ietf:params:oauth:grant-type:device_code 设备流模式
     * - password 帐密模式【暂不支持】
     * @example `client_credentials`
     */
    "grant_type": string;
    /**
     * 授权code码，传入场景：
     * grant\_type=authorization_code 授权码模式时，必须参数
     * @example `xxxx`
     */
    "code"?: string;
    /**
     * 账户名，在帐密模式下，必须传入，暂不支持
     * @example `uesrname_001`
     */
    "username"?: string;
    /**
     * 账户名，在帐密模式下，必须传入，暂不支持
     * @example `xxxxxx`
     */
    "password"?: string;
    /**
     * 设备code码，传入场景：
     * grant\_type=urn:ietf:params:oauth:grant-type:device_code即设备流模式时，必须参数
     * @example `xxxx`
     */
    "device_code"?: string;
    /**
     * 重定向URI，传入场景：
     * grant_type=authorization_code 授权码模式时，必须参数，与获取授权码请求中的重定向URI必须是一致的
     * @example `xxx`
     */
    "redirect_uri"?: string;
    /**
     * 刷新token，传入场景：
     * grant\_type=refresh_token即刷新令牌模式时，必须参数
     * @example `ATxxx`
     */
    "refresh_token"?: string;
    /**
     * 验证code
     * @example `xxx`
     */
    "code_verifier"?: string;
    /**
     * 排除的tag
     * @example `ATxxx`
     */
    "exclusive_tag"?: string;
    /**
     * scope范围, 非必须，可选的值
     * - openid
     * - email
     * - phone
     * - profile
     * @example `xxxx`
     */
    "scope"?: string;
}
