export interface ModifySmbAclRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * keytab文件内容通过base64加密后的字符串。
     * @example `BQIAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAQAIqIx6v7p11oUAAABHAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAAwAIqIx6v7p11oUAAABPAAIADUFMSUFEVEVTVC5DT00ABGNpZnMAGXNtYnNlcnZlcjI0LmFsaWFkdGVzdC5jb20AAAABAAAAAAEAFwAQnQZWB3RAPHU7PMIJyBWePAAAAF8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQASACAGJ7F0s+bcBjf6jD5HlvlRLmPSOW+qDZe0Qk0lQcf8WwAAAE8AAgANQUxJQURURVNULkNPTQAEY2lmcwAZc21ic2VydmVyMjQuYWxpYWR0ZXN0LmNvbQAAAAEAAAAAAQARABDdFmanrSIatnDDh****`
     */
    "Keytab"?: string;
    /**
     * keytab文件内容通过MD5加密后的字符串。
     * @example `E3CCF7E2416DF04FA958AA4513EA****`
     */
    "KeytabMd5"?: string;
    /**
     * 是否允许匿名访问。
     * - true：允许匿名访问。
     * - false（默认）：不允许匿名访问。
     * @example `false`
     */
    "EnableAnonymousAccess"?: boolean;
    /**
     * 是否启用传输加密。
     * - true：启用传输加密。
     * - false（默认）：不启用传输加密。
     * @example `false`
     */
    "EncryptData"?: boolean;
    /**
     * 是否拒绝非加密客户端。
     * - true：拒绝非加密客户端。
     * - false（默认）：不拒绝非加密客户端 。
     * @example `false`
     */
    "RejectUnencryptedAccess"?: boolean;
    /**
     * 超级用户的ID。ID规则如下：
     * - 必须以`S`开头且除开头的S之外后面不能出现其他字母。
     * - 至少三个短横线（-）相隔。
     * 例如`S-1-5-22`或`S-1-5-22-23`。
     * @example `S-1-5-22`
     */
    "SuperAdminSid"?: string;
    /**
     * 每个用户的用户目录主路径。文件路径格式如下：
     * - 以正斜线（/）或反斜线（\）作为分隔符。
     * - 每段内容不能包含`<>":|?*`。
     * - 每段长度范围为0~255。
     * - 总长度范围为0~32767。
     * 例如用户目录是`/home`，则对于用户A，文件系统会在A登录时自动创建`/home/A`的目录。如果`/home/A`已经存在，则跳过。
     * > 用户A需要拥有创建目录的权限，否则无法创建`/home/A`目录。
     * @example `/home`
     */
    "HomeDirPath"?: string;
}
