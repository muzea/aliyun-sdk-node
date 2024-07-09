export interface ListDataSourceTypesResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 数据源类型。取值：
         *  - obs：华为云obs。
         *  - wafApi：腾讯云waf下载api。
         *  - ckafka： 腾讯云ckafka。
         * @example `obs`
         */
        DataSourceType: string;
        /**
         * 多云的code。
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
