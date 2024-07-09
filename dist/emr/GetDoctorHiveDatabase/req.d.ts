export interface GetDoctorHiveDatabaseRequest {
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
     * 数据库名称。
     * @example `db1`
     */
    "DatabaseName": string;
}
