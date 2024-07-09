export interface GetDoctorReportComponentSummaryRequest {
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
     * 报告日期。
     * @example `2023-01-01`
     */
    "DateTime": string;
    /**
     * 选择组件过滤类型。取值：
     * - compute
     * - hive
     * - hdfs
     * - yarn
     * - oss
     * - hbase
     * @example `compute`
     */
    "ComponentType": string;
}
