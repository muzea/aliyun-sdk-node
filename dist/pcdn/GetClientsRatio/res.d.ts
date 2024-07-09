export interface GetClientsRatioResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `42FA014D-045F-491F-8749-20745C516F89`
     */
    RequestId: string;
    DataList: {
        /**
         * 返回的数据。
         */
        UsageData: {
            /**
             * 流量值。
             * @example `28914025061`
             */
            Value: string;
            /**
             * 平台类型。
             * @example `iOS`
             */
            Name: string;
            /**
             * 比例。
             * @example `0.000001762543363929356`
             */
            Rate: string;
        }[];
    };
}
