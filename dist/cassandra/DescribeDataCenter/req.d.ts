export interface DescribeDataCenterRequest {
    /**
     * 集群ID
     * @example `cds-t4n98w89z77*****`
     */
    "ClusterId": string;
    /**
     * 数据中心Id，可通过DescribeDataCenters获得相应的数据中心Id
     * @example `ap-southeast-1a`
     */
    "DataCenterId": string;
}
