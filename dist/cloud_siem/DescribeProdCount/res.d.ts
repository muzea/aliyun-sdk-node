export interface DescribeProdCountResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 阿里云产品的数量。
         * @example `19`
         */
        AliyunProdCount: number;
        /**
         * 华为云产品的数量。
         * @example `2`
         */
        HcloudProdCount: number;
        /**
         * 腾讯云产品的数量。
         * @example `2`
         */
        QcloudProdCount: number;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
