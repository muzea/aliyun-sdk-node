export interface GetCloudMetricProfilingRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 性能剖析ID。您可以通过调用[ListCloudMetricProfilings](~~188711~~)接口获取性能剖析ID。
     * @example `ehpc-hz-i-bplukzqgl****_21687_2019-09-09-02-37-40`
     */
    "ProfilingId": string;
}
