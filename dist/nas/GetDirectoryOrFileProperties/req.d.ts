export interface GetDirectoryOrFilePropertiesRequest {
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 指定目录的绝对路径。
     * 必须以正斜线（/）开头，并且是挂载点中真实存在的路径。
     * @example `/pathway/to/folder`
     */
    "Path": string;
}
