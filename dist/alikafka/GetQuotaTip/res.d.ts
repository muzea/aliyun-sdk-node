export interface GetQuotaTipResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息，典型应用场景是对失败调用进行简述，方便调用方定位问题
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0178A3A7-E87B-5E50-A16F-3E62F534****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * quota配额。
     */
    QuotaData: {
        /**
         * Topic购买量。
         * @example `50`
         */
        TopicNumOfBuy: number;
        /**
         * Topic配额。
         * @example `50`
         */
        TopicQuota: number;
        /**
         * Topic余量。
         * @example `20`
         */
        TopicLeft: number;
        /**
         * Topic使用量。
         * @example `30`
         */
        TopicUsed: number;
        /**
         * 分区购买量。
         * @example `100`
         */
        PartitionNumOfBuy: number;
        /**
         * 分区余量。
         * @example `1050`
         */
        PartitionLeft: number;
        /**
         * 分区使用量。
         * @example `50`
         */
        PartitionUsed: number;
        /**
         * Group余量。
         * @example `50`
         */
        GroupLeft: number;
        /**
         * Group用量。
         * @example `50`
         */
        GroupUsed: number;
        /**
         * 分区购买方式区分，取值如下：
         * - 0：代表实例用topic模型购买；
         * - 1：代表分区模型购买。
         * @example `1`
         */
        IsPartitionBuy: number;
        /**
         * 分区配额。
         * @example `1100`
         */
        PartitionQuota: number;
    };
}
