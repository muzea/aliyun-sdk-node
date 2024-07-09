export interface ReindexRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 索引表名称
     * @example `test_summary`
     */
    "tableName": string;
    /**
     * 一个JSON格式的字符串，完整JSON字符串信息，具体内容参见以下详细信息。
     */
    "body"?: {
        /**
         * int类型，秒级时间戳，数据源为API推送时必填
         * @example `1640867288`
         */
        dataTimeSec: number;
        /**
         * 数据源为odps时必填
         * @example `ds=20220713`
         */
        partition: string;
        /**
         * oss文件路径
         * @example `oss://opensearch`
         */
        ossDataPath: string;
    };
}
