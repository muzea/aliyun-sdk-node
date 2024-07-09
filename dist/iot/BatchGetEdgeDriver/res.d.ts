export interface BatchGetEdgeDriverResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
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
     * @example `A42CAB88-6E26-4DC7-9A35-584D17E82DE0`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
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
         * 驱动类型。
         * - 0：表示官方驱动。
         * - 1：表示自研驱动。
         * @example `1`
         */
        Type: number;
        /**
         * 驱动适配的CPU架构。有如下几种架构：
         * - armv7
         * - armv7-hf
         * - aarch64
         * - x86-64
         * - x86
         * @example `x86-64`
         */
        CpuArch: string;
        /**
         * 驱动ID。
         * @example `fec565038d7544978d9aed5c1a******`
         */
        DriverId: string;
        /**
         * 驱动文件是否内置。
         * - true：表示驱动为内置驱动，即驱动代码已预置到网关上。
         * - false：表示驱动为非内置驱动。
         * @example `false`
         */
        IsBuiltIn: boolean;
        /**
         * 最后一次更新驱动的Unix时间戳。
         * @example `1581912859713`
         */
        GmtModifiedTimestamp: number;
        /**
         * 驱动的语言类型。有如下三种类型：
         * - nodejs8：Node.js v8
         * - python3：Python v3.5
         * - c: C语言
         * @example `c`
         */
        Runtime: string;
        /**
         * 驱动名称。
         * @example `MyLedDriver`
         */
        DriverName: string;
        /**
         * 驱动通信协议。
         * - modbus：Modbus通信协议。
         * - opc-ua：OPC UA通信协议。
         * - customize：自定义通信协议。
         * @example `customize`
         */
        DriverProtocol: string;
    }[];
}
