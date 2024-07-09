export interface DeleteUserVpcAuthorizationRequest {
    /**
     * 授权资源的所属用户主账号ID。
     * @example `22354325`
     */
    "AuthorizedUserId": number;
    /**
     * 授权类型。
     * - NORMAL：普通授权。
     * - CLOUD_PRODUCT：云产品授权。
     * @example `NORMAL`
     */
    "AuthType"?: string;
}
