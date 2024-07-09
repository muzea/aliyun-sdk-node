export interface DescribeMaliciousAddressResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 币种
         * @example `ETH`
         */
        Coin: string;
        /**
         * 钱包地址加密hash
         * @example `f6d239ff***df816`
         */
        Address: string;
        /**
         * 拉黑时间
         * @example `2017-07-18 00:00:00`
         */
        AddTime: string;
        /**
         * 恶意行为
         * @example `实施钓鱼活动`
         */
        Tag: string;
        /**
         * 恶意行为说明
         * @example `FAKE_Coindash_2`
         */
        Detail: string;
    }[];
}
