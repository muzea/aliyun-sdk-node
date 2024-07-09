export interface DescribeParametersResponse {
    /**
     * 请求ID。
     * @example `6BA32080EEA`
     */
    RequestId: string;
    /**
     * 参数详情。
     */
    Data: {
        /**
         * 引擎版本，默认2.0。
         * @example `2.0`
         */
        EngineVersion: string;
        /**
         * 引擎，默认polarx。
         * @example `polarx`
         */
        Engine: string;
        /**
         * 原始参数列表。
         */
        ConfigParameters: {
            /**
             * 参数描述。
             * @example `存储节点私有协议开关(-1关闭，0开启)`
             */
            ParameterDescription: string;
            /**
             * 参数名称。
             * @example `CONN_POOL_XPROTO_STORAGE_DB_PORT`
             */
            ParameterName: string;
            /**
             * 参数值。
             * @example `-1`
             */
            ParameterValue: string;
        }[];
        /**
         * 运行中的参数详情列表。
         */
        RunningParameters: {
            /**
             * 参数描述。
             * @example `存储节点私有协议开关(-1关闭，0开启)`
             */
            ParameterDescription: string;
            /**
             * 参数名称。
             * @example `CONN_POOL_XPROTO_STORAGE_DB_PORT`
             */
            ParameterName: string;
            /**
             * 参数取值。
             * @example `-1`
             */
            ParameterValue: string;
        }[];
    };
}
