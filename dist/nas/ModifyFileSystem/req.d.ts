export interface ModifyFileSystemRequest {
    /**
     * 文件系统ID。
     * - 通用型NAS：`31a8e4****`。
     * - 极速型NAS：必须以`extreme-`开头，例如`extreme-0015****`。
     * - CPFS：必须以`cpfs-`开头，例如`cpfs-125487****`。
     * >仅中国站支持CPFS文件系统。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 文件系统描述。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `NAS-test-1`
     */
    "Description"?: string;
    "Options"?: {
        EnableOplock: boolean;
    };
}
