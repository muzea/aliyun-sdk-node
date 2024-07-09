export interface GetDefaultStorageLocationResponse {
    /**
     * 请求ID
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 存储类型
     * @example `user_oss_bucket`
     */
    StorageType: string;
    /**
     * oss bucket 名称
     * @example `oss-test-bucket`
     */
    Bucket: string;
    /**
     * 路径
     * @example `ice/dir`
     */
    Path: string;
    /**
     * bucket状态：
     * - normal：bucket状态正常
     * - notExist：bucket 不存在
     * @example `normal`
     */
    Status: string;
}
