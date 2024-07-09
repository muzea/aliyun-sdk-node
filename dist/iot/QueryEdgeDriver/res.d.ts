export interface QueryEdgeDriverResponse {
    /**
     * 接口返回码：
     * - **Success**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E0BD540E-DCFE-4602-B6D1-D208E8594BF7`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `15`
         */
        PageSize: number;
        /**
         * 官方驱动或自研驱动的总数量：
         * - 请求参数**Type**的值为**0**，则此处是官方驱动的总数量。
         * - 请求参数**Type**的值为**1**，则此处是自研驱动的总数量。
         * @example `1`
         */
        Total: number;
        /**
         * 驱动信息列表。
         */
        DriverList: {
            /**
             * 创建驱动的Unix时间戳。
             * @example `1581912859713`
             */
            GmtCreateTimestamp: number;
            /**
             * 驱动类型：
             * - **0**：表示官方驱动。
             * - **1**：表示自研驱动。
             * @example `1`
             */
            Type: number;
            /**
             * 驱动适配的CPU架构，有如下几种架构：
             * - **armv7**
             * - **armv7-hf**
             * - **aarch64**
             * - **x86-64**
             * - **x86**
             * @example `x86-64`
             */
            CpuArch: string;
            /**
             * 驱动ID。
             * @example `fec565038d7544978d9aed5c1a******`
             */
            DriverId: string;
            /**
             * 驱动文件是否内置：
             * - **true**：表示驱动为内置驱动，即驱动代码已预置到网关上。
             * - **false**：表示驱动为非内置驱动。
             * @example `false`
             */
            IsBuiltIn: boolean;
            /**
             * 最后一次更新驱动的Unix时间戳。
             * @example `1581912859713`
             */
            GmtModifiedTimestamp: number;
            /**
             * 该驱动是否需要申请才能使用。当前仅支持**false**值。
             * @example `false`
             */
            IsApply: boolean;
            /**
             * 驱动的语言类型，有如下三种类型：
             * - **nodejs8**：表示Node.js v8。
             * - **python3**：表示Python v3.5。
             * - **c**: 表示C语言。
             * @example `c`
             */
            Runtime: string;
            /**
             * 驱动名称。
             * @example `MyLedDriver`
             */
            DriverName: string;
            /**
             * 驱动通信协议：
             * - **modbus**：表示Modbus通信协议。
             * - **opc-ua**：表示OPC UA通信协议。
             * - **customize**：表示自定义通信协议。
             * @example `customize`
             */
            DriverProtocol: string;
        }[];
    };
}
