export interface GetObjectMetaRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject.txt`
     */
    "key": string;
    /**
     * Object的版本ID。只有查看Object指定版本的元数据信息时才显示该字段。
     * @example `CAEQNRiBgIDMh4mD0BYiIDUzNDA4OGNmZjBjYTQ0YmI4Y2I4ZmVlYzJlNGVk****`
     */
    "versionId"?: string;
}
