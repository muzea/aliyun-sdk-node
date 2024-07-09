export interface QuerySecretNoDetailResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码详见[错误码列表](~~109196~~)。
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
     * @example `066E6E47-04CB-4774-A976-4F73CB76D4A3`
     */
    RequestId: string;
    /**
     * 号码属性。
     */
    SecretNoInfoDTO: {
        /**
         * 号码购买时间。
         * @example `2021-12-03 15:19:27`
         */
        PurchaseTime: string;
        /**
         * 归属运营商。取值：
         * - **1**：中国移动
         * - **2**：中国联通
         * - **3**：中国电信
         * @example `1`
         */
        Vendor: number;
        /**
         * 省份。
         * @example `陕西`
         */
        Province: string;
        /**
         * 城市。
         * @example `西安`
         */
        City: string;
        /**
         * 号码状态。取值：
         * - **0**：未绑定。
         * - **1**：已绑定。
         * - **2**：已锁定。
         * - **3**：已冻结。
         * @example `0`
         */
        SecretStatus: number;
        /**
         * 号码认证状态。取值：
         * - **0**：未认证。
         * - **1**：已认证。
         * @example `0`
         */
        CertifyStatus: number;
    };
}
