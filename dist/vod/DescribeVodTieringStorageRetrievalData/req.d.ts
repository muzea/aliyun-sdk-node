export interface DescribeVodTieringStorageRetrievalDataRequest {
    /**
     * 获取数据起始时间点。日期格式按照ISO8601表示法，使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。最小数据粒度为5分钟，若为空，则默认读取最近24小时的数据。
     * @example `2023-06-02T10:20:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间点，需晚于起始时间，不能相差超过31天。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2023-06-02T11:20:00Z
    `
     */
    "EndTime"?: string;
    /**
     * 存储地域。默认返回所有地域。支持批量查询，多个区域用半角逗号（,）分隔。
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * 存储类型。取值：
     * - **IA**：低频
     * - **Archive**：归档
     * - **ColdArchive**：冷归档
     * @example `IA`
     */
    "StorageClass"?: string;
}
