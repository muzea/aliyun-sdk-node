export interface ListCheckTypesResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 检查项类型。
         * @example `data_integrity`
         */
        CheckType: string;
        /**
         * 检查项类型展示名称。
         * @example `Data Integrity`
         */
        CheckTypeDisName: string;
        /**
         * 检查项详情列表。
         */
        CheckDetails: {
            /**
             * 检查项的ID。
             * @example `31`
             */
            CheckId: number;
            /**
             * 检查项描述。
             * @example `Configure the idle session timeout period.`
             */
            CheckItem: string;
            /**
             * 该检查项归属的基线分类列表。
             */
            AffiliatedRiskTypes: string[];
            /**
             * 该检查项归属的基线列表。
             */
            AffiliatedRisks: string[];
        }[];
    }[];
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果的数据条数。
     * @example `10`
     */
    Count: number;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D65AADFC-1D20-5A6A-8F6A-9FA53C0D****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
