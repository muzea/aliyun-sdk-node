export interface ListDoctorHDFSUGIRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-b933c5aac8fe****`
     */
    "ClusterId": string;
    /**
     * 标记当前开始读取的位置。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    "NextToken"?: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 其日期和时间信息以 ISO 8601 格式表示， 例如：2023年1月1日为 2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 选择过滤类型。取值：
     * - user：选取用户过滤。
     * - group：选取组过滤。
     * @example `group`
     */
    "Type": string;
    /**
     * 排序方向。取值：
     * - ASC：升序排列
     * - DESC：降序排列
     * @example `ASC`
     */
    "OrderType"?: string;
    /**
     * 排序依据。取值：
     * - totalFileCount：总文件个数。
     * - totalDataSize：总数据量大小。
     * - totalDirCount：总目录个数。
     * @example `totalFileCount`
     */
    "OrderBy"?: string;
}
