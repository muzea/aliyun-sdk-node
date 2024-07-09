export interface AnalyzeFileRequest {
    /**
     * 文件名称
     * @example `123-456-file.log`
     */
    "name"?: string;
    /**
     * 共享访问文件token
     * @example `6e54e9d5-3147-458e-a85d-bae8722de747`
     */
    "token"?: string;
    /**
     * 是否保留不可达对象
     * @example `true`
     */
    "keepUnreachableObjects"?: boolean;
}
