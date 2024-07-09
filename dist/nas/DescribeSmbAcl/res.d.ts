export interface DescribeSmbAclResponse {
    /**
     * 请求ID。
     * @example `98696EF0-1607-4E9D-B01D-F20930B6****`
     */
    RequestId: string;
    /**
     * ACL信息。
     */
    Acl: {
        /**
         * 是否允许匿名访问。取值如下：
         * - true：允许匿名访问。
         * - false ：不允许匿名访问。
         * @example `true`
         */
        EnableAnonymousAccess: boolean;
        /**
         * 是否启用SMB AD ACL功能。
         * - true：启用SMB AD ACL功能。
         * - false：不启用SMB AD ACL功能。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 是否启用传输加密。
         * - true：启用传输加密。
         * - false：不启用传输加密。
         * @example `true`
         */
        EncryptData: boolean;
        /**
         * 是否拒绝非加密客户端。
         * - true：拒绝非加密客户端。
         * - false：不拒绝非加密客户端 。
         * @example `true`
         */
        RejectUnencryptedAccess: boolean;
        /**
         * 超级用户的ID。
         * @example `S-1-0-0`
         */
        SuperAdminSid: string;
        /**
         * 每个用户的用户目录主路径。
         * @example `/home`
         */
        HomeDirPath: string;
    };
}
