export interface DescribeParameterGroupTemplateListResponse {
    /**
     * Id of the request
     * @example `5D622714-AEDD-4609-9167-F5DDD3D1****`
     */
    RequestId: string;
    /**
     * 兼容版本，取值：
     * Redis社区版支持5.0、6.0和7.0。 Tair内存型支持5.0、6.0。 Tair持久内存型支持6.0。 Tair云盘（ESSD）型支持4.0。
     * @example `5`
     */
    EngineVersion: string;
    /**
     * 参数的详细信息列表。
     */
    Parameters: {
        /**
         * 是否支持修改小版本true/false。
         * @example `true`
         */
        SupportModifyForMinorVersion: boolean;
        /**
         * 检查参数正则表达式
         * @example `"\\d+\\s+\\d+\\s+\\d+"`
         */
        CheckingCode: string;
        /**
         * 参数默认值。
         * @example `10`
         */
        ParameterValue: string;
        /**
         * 是否可以修改
         * - **0**：不能修改；
         * - **1**：修改。
         * @example `0`
         */
        Revisable: number;
        /**
         * 整除因子。对于整数和字节类型的参数，参数值除了必须满足参数的可选范围，还须是Factor（不等于0）的倍数。
         * @example `1`
         */
        Factor: number;
        /**
         * 参数名称。
         * @example `appendonly`
         */
        ParameterName: string;
        /**
         * 参数值单位。
         * INT: 普通的整型，STRING: 固定的字符串，B: 字节
         * @example `STRING`
         */
        Unit: string;
        /**
         * 参数描述。
         * @example `开启aof持久化模式`
         */
        ParameterDescription: string;
        /**
         * 是否生效：0否，1是
         * @example `1`
         */
        Effective: number;
    }[];
}
