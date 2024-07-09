export interface DescribeEtlJobLogsRequest {
    /**
     * ETL任务ID，您可以调用[DescribeDtsJobs](~~209702~~)接口查询任务ID。
     * @example `l5512es7w15****`
     */
    "DtsJobId": string;
    /**
     * DTS实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)接口查询阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
