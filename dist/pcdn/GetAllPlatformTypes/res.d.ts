export interface GetAllPlatformTypesResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `E500E41E-C47B-4F0E-835B-71AFB0EB9773`
     */
    RequestId: string;
    DataList: {
        /**
         * 返回的数据。
         */
        UsageData: {
            /**
             * 终端名称。
             * @example `Flash`
             */
            Name: string;
            /**
             * 终端类型码。
             * @example `10`
             */
            Code: number;
        }[];
    };
}
