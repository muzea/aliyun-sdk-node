export interface ListUserGroupsMappingsRequest {
    /**
     * 文件系统所在的Region。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 文件存储 HDFS 版的文件系统实例ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    "FilesystemId": string;
    /**
     * 分页查询的下一页起始点，首次查询是为空字符串，如果需要分页查询，则每个请求的返回值中会包含下次请求的NextToken值。
     * @example `user1`
     */
    "NextToken"?: string;
    /**
     * 每次查询需要返回的用户个数。
     * @example `10`
     */
    "Limit": number;
}
