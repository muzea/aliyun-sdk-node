export interface PutObjectAclRequest {
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
     * 指定OSS创建Object时的访问权限。
     * 取值：
     * - default（默认）：Object遵循所在存储空间的访问权限。
     * - private：Object是私有资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户没有权限操作该Object。
     * - public-read：Object是公共读资源。只有Object的拥有者和授权用户有该Object的读写权限，其他用户只有该Object的读权限。请谨慎使用该权限。
     * - public-read-write：Object是公共读写资源。所有用户都有该Object的读写权限。请谨慎使用该权限。
     * 关于访问权限的更多信息，请参见**[读写权限ACL](~~100676~~)**。
     */
    "x-oss-object-acl": any;
    /**
     * Object对应的版本
     * @example `CAEQMhiBgIC3rpSD0BYiIDBjYTk5MmIzN2JlNjQxZTFiNGIzM2E3OTliODA0****`
     */
    "versionId"?: string;
}
