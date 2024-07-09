export interface AddUserVpcAuthorizationRequest {
    /**
     * 授权资源的所属用户主账号ID。
     * @example `111222333`
     */
    "AuthorizedUserId": number;
    /**
     * 验证码。
     * AuthType取NORMAL或传空时且AuthChannel取”AUTH_CODE“或传空时为必传。
     * @example `123456`
     */
    "AuthCode"?: string;
    /**
     * 授权类型。
     * - NORMAL：普通授权。
     * - CLOUD_PRODUCT：云产品授权。
     * @example `NORMAL`
     */
    "AuthType"?: string;
    /**
     * 授权渠道，取值范围：
     * - AUTH_CODE：验证码授权，验证AuthCode传入的验证码是否正确。
     * - RESOURCE_DIRECTORY: 资源目录授权，验证AuthorizedUserId与当前账户是否存在资源目录授信。
     * - 传空时，同AUTH_CODE，即验证码授权。
     * @example `AUTH_CODE`
     */
    "AuthChannel"?: string;
}
