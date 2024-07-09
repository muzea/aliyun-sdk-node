export interface ListApplicationsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `c-e6a9d46e92675****`
     */
    "ClusterId": string;
    /**
     * 下页页码。
     * @example `0`
     */
    "NextToken"?: string;
    /**
     * 分页总数。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 应用名称列表。
     * @example `c-b933c5aac8fe****`
     */
    "ApplicationNames"?: string[];
}
