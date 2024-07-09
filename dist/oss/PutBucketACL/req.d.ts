export interface PutBucketAclRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 设置Bucket的访问权限ACL。PutBucketAcl接口通过Put请求中的x-oss-acl请求头来设置访问权限，如果没有该请求头，则访问权限设置不生效。
     * <br>取值如下：
     * - public-read-write（公共读写）：所有用户都有该Bucket内的文件的读写权限。请谨慎使用该访问权限。
     * - public-read（公共读）：Bucket的拥有者和授权用户有该Bucket内的文件的读写权限，其他用户只有该Bucket内的文件的读权限。请谨慎使用该访问权限。
     * - private：Bucket的拥有者和授权用户有该Bucket内的文件的读写权限，其他用户没有权限操作该Bucket内的文件。
     */
    "x-oss-acl": any;
}
