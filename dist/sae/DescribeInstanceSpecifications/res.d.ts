export interface DescribeInstanceSpecificationsResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 实例规格信息。
     */
    Data: {
        /**
         * CPU大小，规格为微核。
         * @example `2000`
         */
        Cpu: number;
        /**
         * 规格配置版本号。
         * @example `0`
         */
        Version: number;
        /**
         * 内存规格，单位为MB。
         * @example `4096`
         */
        Memory: number;
        /**
         * 规格配置名称。
         * @example `通用型4`
         */
        SpecInfo: string;
        /**
         * 规格配置ID。
         * @example `4`
         */
        Id: number;
        /**
         * 实例是否可用。取值说明如下：
         * - **true**：可用。
         * - **false**：不可用。
         * @example `true`
         */
        Enable: boolean;
    }[];
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取实例规格是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
