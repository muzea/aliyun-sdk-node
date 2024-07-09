export interface RevokeUserSessionRequest {
    /**
     * 用户所属身份源配置ID。
     * @example `idp-cfg9vcrqylo39c39uxnw`
     */
    "IdpId": string;
    /**
     * 外部身份源用户唯一ID。
     * @example `12345678`
     */
    "ExternalIds": string;
}
