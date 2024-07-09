export interface CreateLDAPConfigRequest {
    /**
     * 文件系统ID。
     * @example `109c04****`
     */
    "FileSystemId": string;
    /**
     * LDAP服务地址。
     * @example `ldap://ldap.example.example`
     */
    "URI": string;
    /**
     * 绑定LDAP的指定条目。
     * @example `cn=alibaba,dc=com`
     */
    "BindDN"?: string;
    /**
     * LDAP搜索起始点。
     * @example `dc=example`
     */
    "SearchBase": string;
}
