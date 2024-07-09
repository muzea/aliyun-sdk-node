export interface DeleteObjectTaggingRequest {
    /**
     * bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * 删除的Object的版本号。
     * @example `CAEQExiBgID.jImWlxciIDQ2ZjgwODIyNDk5MTRhNzBiYmQwYTZkMTYzZjM0****`
     */
    "versionId"?: string;
}
