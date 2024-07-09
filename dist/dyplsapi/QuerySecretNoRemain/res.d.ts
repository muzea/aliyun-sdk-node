export interface QuerySecretNoRemainResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9FC30594-3841-43AD-9008-03393BCB5CD2`
     */
    RequestId: string;
    /**
     * 接口调用成功后返回的结构体。
     */
    SecretRemainDTO: {
        /**
         * 可购号码余量。
         * @example `0`
         */
        Amount: number;
        /**
         * 号码的归属地。
         * @example `杭州`
         */
        City: string;
        RemainDTOList: {
            /**
             * 可购号码余量列表。
             */
            remainDTO: {
                /**
                 * 城市可购号码余量。
                 * @example `120`
                 */
                Amount: number;
                /**
                 * 号码的归属地。
                 * @example `武汉`
                 */
                City: string;
            }[];
        };
    };
}
