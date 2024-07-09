export interface GetDoctorJobRequest {
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
}
