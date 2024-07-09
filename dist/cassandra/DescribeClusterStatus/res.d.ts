export interface DescribeClusterStatusResponse {
    /**
     * 集群运行状态，取值部分示例：
     * - Creating：创建中
     * - CreateFailed：创建失败
     * - Running：运行中
     * - Deleting：删除中
     * - DeleteFailed：删除失败
     * - Deleted：已删除
     * @example `Running`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `3AC5F451-8B0F-47B4-9733-4A09C8838AD4`
     */
    RequestId: string;
    /**
     * 集群创建时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC 通用标准时，以Z来标识）。
     * @example `2020-02-26T01:30:40Z`
     */
    CreatedTime: string;
}
