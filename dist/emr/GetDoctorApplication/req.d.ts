export interface GetDoctorApplicationRequest {
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
     * 任务提交到YARN的ID。
     * @example `application_1542620905989_****`
     */
    "AppId": string;
    /**
     * 其日期和时间信息以ISO 8601格式表示，例如：2023年1月1日为 2023-01-01。
     * @example `2023-01-01`
     */
    "DateTime": string;
}
