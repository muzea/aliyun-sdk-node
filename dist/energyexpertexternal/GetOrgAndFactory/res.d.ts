export interface GetOrgAndFactoryResponse {
    /**
     * 请求ID
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回信息
     */
    data: {
        /**
         * 阿里云账号ID
         * @example `1319XXXXXX64960`
         */
        aliyunPk: string;
        /**
         * 企业ID
         * @example `6265f42XXXX2fec150`
         */
        organizationId: string;
        /**
         * 企业名称
         * @example `乐迪工业园`
         */
        organizationName: string;
        /**
         * 场站信息列表。
         */
        factoryList: {
            /**
             * 场站id
             * @example `pn_95`
             */
            factoryId: string;
            /**
             * 场站名称
             * @example `乐迪工业园1`
             */
            factoryName: string;
        }[];
    }[];
    /**
     * http状态码
     * @example `200`
     */
    httpCode: number;
    /**
     * 返回码。
     * @example `Success`
     */
    code: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    success: boolean;
}
