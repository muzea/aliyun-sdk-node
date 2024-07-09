export interface CreateDirRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 目录名称。
     * - 必须以正斜线（/）开头。
     * - 支持数字、大小写字母。
     * - 可以包含下划线（_）、短划线（-）或半角句号（.）。
     * - 路径中不能包含软链接，如本层目录（.）、上层目录（..）或其他软链接。
     * >  - 如果根目录不存在，则需要配置目录创建信息，系统将根据设置自动创建指定的根目录。
     *  > - 如果根目录已存在，则不需要配置目录创建信息，如果进行配置，目录创建信息中的配置也会被忽略。
     * @example `/test`
     */
    "RootDirectory": string;
    /**
     * 目录的拥有者用户ID。
     * 支持从0至4294967295的值。
     * @example `1`
     */
    "OwnerUserId": number;
    /**
     * 目录的拥有者用户组ID。支持从0至4294967295的值。
     * @example `123`
     */
    "OwnerGroupId": number;
    /**
     * 指定应用到根目录路径的POSIX权限。
     * 格式为合法的八进制数，如0755。
     * @example `0755`
     */
    "Permission": string;
    /**
     * 是否创建多级目录。
     * 取值：
     * - true（默认值）：如果多级目录不存在，逐级创建。
     * - false：只创建最后一级目录，父目录不存在返回错误信息。
     * @example `true`
     */
    "Recursion"?: boolean;
}
