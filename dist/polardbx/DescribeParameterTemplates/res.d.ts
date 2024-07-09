export interface DescribeParameterTemplatesResponse {
    /**
     * 请求ID。
     * @example `C458B1E8-1683-3645-B154-6BA32080EEA`
     */
    RequestId: string;
    /**
     * 数据结构体。
     */
    Data: {
        /**
         * 引擎，默认polarx。
         * @example `polarx`
         */
        Engine: string;
        /**
         * 引擎版本，默认2.0。
         * @example `2.0`
         */
        EngineVersion: string;
        /**
         * 参数个数。
         * @example `218`
         */
        ParameterCount: number;
        /**
         * 参数列表。
         */
        Parameters: {
            /**
             * 检测约制。
             * @example `[0|1]`
             */
            CheckingCode: string;
            /**
             * 参数名。
             * @example `loose_enable_gts`
             */
            ParameterName: string;
            /**
             * 是否动态：
             * - **0**：否；
             * - **1**：是。
             * @example `0`
             */
            Dynamic: number;
            /**
             * 参数值。
             * @example `1`
             */
            ParameterValue: string;
            /**
             * 参数描述。
             * @example `polarx hatp addition param`
             */
            ParameterDescription: string;
            /**
             * 是否可以修改
             * - **0**：不能修改；
             * - **1**：修改。
             * @example `0`
             */
            Revisable: number;
        }[];
    };
}
