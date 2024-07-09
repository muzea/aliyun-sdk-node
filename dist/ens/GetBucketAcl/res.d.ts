export interface GetBucketAclResponse {
    /**
     * 请求ID。
     * @example `5C881388-2D4B-46F4-A96B-D4E6BD0886A2`
     */
    RequestId: string;
    /**
     * Bucket读写权限。
     * @example `private`
     */
    BucketAcl: string;
}
