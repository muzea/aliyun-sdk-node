export interface GetDoctorHBaseTableRequest {
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
     * 日期。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 表名。
     * @example `namespace1:tb_item`
     */
    "TableName": string;
}
