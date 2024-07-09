export interface GetDoctorHDFSClusterRequest {
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
}
