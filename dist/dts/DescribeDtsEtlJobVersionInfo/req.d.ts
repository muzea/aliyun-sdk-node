export interface DescribeDtsEtlJobVersionInfoRequest {
    /**
     * 分页查询时设置的每页行数，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前实例状态列表的页码，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * DTS实例ID，您可以调用[DescribeDtsJobs](~~209702~~)接口查询实例ID。
     * @example `dtsggk12iwya1a****`
     */
    "DtsInstanceId": string;
    /**
     * ETL任务ID，您可以调用[DescribeDtsJobs](~~209702~~)接口查询任务ID。
     * @example `l5512es7w15****`
     */
    "DtsJobId"?: string;
    /**
     * DTS实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)接口查询阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
