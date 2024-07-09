export interface GetDoctorHiveTableRequest {
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
     * 其日期和时间信息以 ISO 8601 格式表示， 例如：2023年1月1日为 2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 表名称，表名称遵循Hive通用写法，以{库名称.表名称}唯一确定。
     * @example `dw.dwd_creta_service_order_long_renew_long_da`
     */
    "TableName": string;
}
