export interface GetAllAppVersionsResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `4785676A-6382-4D0B-AA23-5081742EE74E`
     */
    RequestId: string;
    DataList: {
        /**
         * 返回的数据。
         */
        UsageData: {
            /**
             * 平台类型码。
             * @example `1`
             */
            Code: number;
            /**
             * 版本号。
             * @example `6.6.2`
             */
            Value: string;
        }[];
    };
}
