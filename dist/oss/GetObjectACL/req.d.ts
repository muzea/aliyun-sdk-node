export interface GetObjectAclRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject/txt`
     */
    "key": string;
    /**
     * Object对应的版本。
     * @example `list1`
     */
    "versionId"?: string;
}
