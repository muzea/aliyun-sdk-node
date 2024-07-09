export interface BuildIndexRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 一个JSON格式的字符串，完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{}`
     */
    "body"?: {
        /**
         * 数据源名称
         * @example `ha-cn-pl32rf0****_test_api`
         */
        dataSourceName: string;
        /**
         * 数据源机房
         * @example `sz_vpc_domain_1`
         */
        domain: string;
        /**
         * 数据源类型
         * @example `odps`
         */
        dataSourceType: string;
        /**
         * 数据源为odps时必填
         * @example `ds=20201010`
         */
        partition: string;
        /**
         * int类型，秒级时间戳，数据源为API推送时必填
         * @example `1640867288`
         */
        dataTimeSec: number;
        /**
         * 重建index方式: api、indexRecover
         * @example `api`
         */
        buildMode: string;
        /**
         * 历史回流ID
         * @example `160131146`
         */
        generation: number;
    };
}
