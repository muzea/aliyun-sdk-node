export interface GetDoctorHBaseRegionRequest {
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
     * Region ID。
     * @example `67f6808f60a8c357103a3a95fe00610e`
     */
    "HbaseRegionId": string;
}
