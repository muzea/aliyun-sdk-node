export interface CreateFileRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 指定目录或文件的绝对路径，必须以正斜线（/）开头和结尾，长度为2~1024。
     * @example `/test/`
     */
    "Path": string;
    /**
     * 对象类型。取值：
     * - File：文件。
     * - Directory：目录。
     * @example `File`
     */
    "Type": string;
    /**
     * 便携账号ID。
     * 限制：长度16位字符串，支持数字和英文小写字母。
     * @example `378cc7630f26****`
     */
    "Owner"?: string;
    /**
     * 共享目录文件。
     * 取值：
     * - false（默认值）：不共享目录权限。
     * - true：共享目录权限。
     * > - 当Type=Directory并且Owner不为空时，该参数生效。
     * > - 目录带有可继承的Owner权限。该目录下创建的子目录和子文件，即使是其他人创建的，这个Owner都具有读写权限。
     * @example `false`
     */
    "OwnerAccessInheritable"?: boolean;
}
