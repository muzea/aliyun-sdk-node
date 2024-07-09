export interface DescribeVodStorageDataRequest {
    /**
     * 获取数据起始时间点。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-02-01T14:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点，需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-02-01T15:00:00Z`
     */
    "EndTime": string;
    /**
     * 存储地域。默认返回所有地域。支持批量查询，多个区域用半角逗号（,）分隔。取值：
     * - **cn-shanghai**：上海。
     * - **cn-beijing**：北京。
     * - **eu-central-1**：德国。
     * - **ap-southeast-1**：新加坡。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 存储类型。固定取值：**OSS**。
     * @example `OSS`
     */
    "StorageType"?: string;
    /**
     * 存储名称（阿里云OSS存储Bucket名称），默认返回所有存储。支持批量查询，多个用半角逗号（,）分隔。
     * @example `bucket`
     */
    "Storage"?: string;
    "AppId"?: string;
}
