export interface ListBindDataSourcesResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 多云账号名称。
         * @example `sas_tq_account_xxxx`
         */
        AccountName: string;
        /**
         * 数据源ID，由威胁分析根据具体参数计算md5生成。
         * @example `220ba97c9d1fdb0b9c7e8c7ca328d7ea`
         */
        DataSourceInstanceId: string;
        /**
         * 数据源类型。取值：
         *  - obs：华为云obs。
         *  - wafApi：腾讯云waf下载api。
         *  - ckafka： 腾讯云ckafka。
         * @example `obs`
         */
        DataSourceType: string;
        /**
         * 数据源名称。
         * @example `waf_kafka`
         */
        DataSourceName: string;
        /**
         * 数据源备注。
         * @example `waf_kafka`
         */
        DataSourceRemark: string;
        /**
         * 该数据源下已添加的日志的数量。
         * @example `1`
         */
        LogCount: number;
        /**
         * 该数据源下已创建的日志接入任务的数量。
         * @example `0`
         */
        TaskCount: number;
        /**
         * 云账号ID。
         * @example `123xxxxxxx`
         */
        AccountId: string;
        /**
         * 多云的code。取值：
         * - qcloud：腾讯云。
         * - aliyun：阿里云。
         * - hcloud：华为云。
         * @example `hcloud`
         */
        CloudCode: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
