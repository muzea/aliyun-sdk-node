export interface ListAllProdsResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 日志总数。
         * @example `19`
         */
        TotalCount: number;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 当前页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 产品列表。
         * @example `1`
         */
        ProdList: {
            /**
             * 产品code。
             * @example `sas`
             */
            ProdCode: string;
            /**
             * 该产品下总共的日志数量。
             * @example `19`
             */
            TotalLogCount: number;
            /**
             * 该产品下已经接入的日志数量。
             * @example `10`
             */
            ImportedLogCount: number;
            /**
             * 该产品下日志最近接入时间。
             * @example `2023-11-23 12:12:12`
             */
            ModifyTime: string;
            /**
             * 多云的code。取值：
             * - qcloud：腾讯云。
             * - aliyun：阿里云。
             * - hcloud：华为云。
             * @example `hcloud`
             */
            CloudCode: string;
        }[];
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
