export interface DescribeDataSourceInstanceResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 数据源ID，由威胁分析根据具体参数计算md5生成。
         * @example `220ba97c9d1fdb0b9c7e8c7ca328d7ea`
         */
        DataSourceInstanceId: string;
        /**
         * 数据源的详细参数列表。
         */
        DataSourceInstanceParams: {
            /**
             * 参数code。
             * @example `region_code`
             */
            ParaCode: string;
            /**
             * 参数值。
             * @example `ap-guangzhou`
             */
            ParaValue: string;
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
         * - hcloud：华为云。
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
