export interface DescribeRdsSuperAccountInstancesResponse {
    /**
     * 请求ID。
     * @example `5D64DE5944A1E541E0******`
     */
    RequestId: string;
    DbInstances: {
        DbInstance: string[];
    };
}
