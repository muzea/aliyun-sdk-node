export interface ListDataSourceLogsResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 日志对应的阿里云账号ID。
         * @example `123XXXXXXXX`
         */
        SubUserId: number;
        /**
         * 数据源ID，由威胁分析根据具体参数计算md5生成。
         * @example `220ba97c9d1fdb0b9c7e8c7ca328d7ea`
         */
        DataSourceInstanceId: string;
        /**
         * 数据源名称。
         * @example `waf kafka`
         */
        DataSourceInstanceName: string;
        /**
         * 数据源备注。
         * @example `waf kafka`
         */
        DataSourceInstanceRemark: string;
        /**
         * 该数据源下日志列表。
         */
        DataSourceInstanceLogs: {
            /**
             * 日志的ID，由威胁分析根据具体参数计算md5生成。
             * @example `220ba97c9d1fdb0b9c7e8c7ca328d7ea`
             */
            LogInstanceId: string;
            /**
             * 日志code。
             * @example `cloud_siem_waf_xxxxx`
             */
            LogCode: string;
            /**
             * 日志显示code。
             * @example `${siem.prod.cloud_siem_waf_xxxxx}`
             */
            LogMdsCode: string;
            /**
             * 日志详细参数列表。
             */
            LogParams: {
                /**
                 * 日志参数code。
                 * @example `region_code`
                 */
                ParaCode: string;
                /**
                 * 日志参数值。
                 * @example `ap-guangzhou`
                 */
                ParaValue: string;
            }[];
            /**
             * 日志对应的接入任务状态。取值：
             *  - 1：已接入。
             *  - 0：未接入。
             * @example `1`
             */
            TaskStatus: number;
        }[];
        /**
         * 云账号ID。
         * @example `123xxxxxxx`
         */
        AccountId: string;
        /**
         * 多云的code。取值：
         * - qcloud：腾讯云。
         * - aliyun：阿里云。
         * - hcloud：华为云
         * @example `hcloud`
         */
        CloudCode: string;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
