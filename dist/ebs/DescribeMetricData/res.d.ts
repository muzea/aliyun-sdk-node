export interface DescribeMetricDataResponse {
    /**
     * 查询到的数据总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 云盘的监控数据集合。
     */
    DataList: {
        /**
         * 标签。
         * @example `{"DiskId": "d-1234"}`
         */
        Labels: any;
        /**
         * 监控数据列表，一系列连续的秒级时间戳和查询的指标对应时刻的值的列表。
         * @example `{"1699258861": 1,"1699259461": 0}`
         */
        Datapoints: any;
    }[];
    /**
     * 请求ID。
     * @example `11B55F58-D3A4-4A9B-9596-342420D0****`
     */
    RequestId: string;
}
