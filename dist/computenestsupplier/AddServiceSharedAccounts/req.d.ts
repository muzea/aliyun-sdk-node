export interface AddServiceSharedAccountsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `BBBAAfu+XtuBE55iRLHEYYuojI4=`
     */
    "ClientToken"?: string;
    /**
     * 服务分享账户与权限。
     */
    "SharedAccounts": {
        /**
         * 用户账号。
         * @example `123456`
         */
        UserAliUid: string;
        /**
         * 权限类型。可能的值：
         * - Deployable：可部署。
         * - Accessible：可访问。
         * @example ` Accessible`
         */
        Permission: string;
    }[];
    /**
     * 服务ID。
     * @example `service-63b8a060e9d54cxxxxxx`
     */
    "ServiceId": string;
    /**
     * 服务共享类型，默认值为SharedAccount。可选值：
     * - SharedAccount：普通共享类型。
     * - Reseller：分销共享类型。
     * @example `SharedAccount`
     */
    "Type"?: string;
}
