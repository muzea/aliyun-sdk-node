export interface PutBucketAclRequest {
    /**
     * Bucket名称。
     * @example `test`
     */
    "BucketName": string;
    /**
     * Bucket读写权限类型：
     * - **public-read-write**：公共读写
     * - **public-read**：公共读
     * - **private**：私有（默认值）
     * @example `private`
     */
    "BucketAcl": string;
}
