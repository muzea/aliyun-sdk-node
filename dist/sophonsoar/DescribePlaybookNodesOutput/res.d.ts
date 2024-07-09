export interface DescribePlaybookNodesOutputResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A491170C-FE1F-520E-83D4-72ED205B72ED`
     */
    RequestId: string;
    /**
     * 节点输出数据。
     */
    PlaybookNodesOutput: {
        /**
         * 剧本的节点名称。
         * @example `DataFormat_1`
         */
        NodeName: string;
        /**
         * 组件输出的历史数据，为JSON格式，如果不存在，则为空。
         * @example `{
            "datalist": [
                {
                    "score": "10",
                    "ip": "1.1.1.1"
                }
            ],
            "total_data_successful": 1,
            "filter_total_data": 1,
            "total_data": 1,
            "total_exe_successful": 1,
            "total_exe": 1,
            "total_data_with_dup": 1,
            "filter_total_data_successful": 1,
            "status": true
        }`
         */
        NodeOutput: string;
    };
}
