export interface DescribeNodeToolExecutionHistoryRequest {
    /**
     * 集群ID。
     * @example `cds-t4n98w89z77*****`
     */
    "ClusterId": string;
    /**
     * 数据中心Id，可通过DescribeDataCenters获得相应的数据中心Id。
     * @example `ap-southeast-1a`
     */
    "DcId": string;
    /**
     * 具体某个执行作业的Id，可通过DescribeNodeToolExecutionHistories查询到。
     * @example `job-y0edwqo993m*****`
     */
    "JobId": string;
}
