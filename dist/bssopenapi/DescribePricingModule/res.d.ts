export interface DescribePricingModuleResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `This API is not applicable for caller.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C40A8EE0-8084-49FE-B66E-5E1C3B6AE025`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        ModuleList: {
            /**
             * 模块及定价属性信息。
             */
            Module: {
                /**
                 * 计价模块名称。
                 * @example `实例`
                 */
                ModuleName: string;
                /**
                 * 价格类型：
                 * - Usage：使用量。
                 * - Hour：小时价。
                 * - Day：天价。
                 * - Week：星期价。
                 * - Month：月价。
                 * -  Year：年价。
                 * @example `Month`
                 */
                PriceType: string;
                /**
                 * 币种：CNY：人民币。
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 计价模块标识。
                 * @example `InstanceType`
                 */
                ModuleCode: string;
                ConfigList: {
                    ConfigList: string[];
                };
            }[];
        };
        AttributeList: {
            /**
             * 模块定价属性值。
             */
            Attribute: {
                /**
                 * 属性Code。
                 * @example `DBInstanceStorage`
                 */
                Code: string;
                /**
                 * 属性名称。
                 * @example `存储空间`
                 */
                Name: string;
                /**
                 * 属性单位。
                 * @example `GB`
                 */
                Unit: string;
                Values: {
                    /**
                     * 属性。
                     */
                    AttributeValue: {
                        /**
                         * 模块Code对应属性值类型。取值：
                         * - single_float：单一数值类型。
                         * - single_string：单一字符串类型。
                         * - range_float：范围取值类型。
                         * @example `single_string`
                         */
                        Type: string;
                        /**
                         * 模块Code对应属性值。
                         * > 在Type = range_float时格式1024-1024000:1024表示从1024至1024000，步长1024。
                         * @example `mysql.n2.medium.1`
                         */
                        Value: string;
                        /**
                         * 模块取值描述信息。
                         * @example `连接数：4000 IOPS与存储空间大小有关`
                         */
                        Remark: string;
                        /**
                         * 模块Code对应属性值。
                         * @example `2 核 4GB（单机基础版）`
                         */
                        Name: string;
                    }[];
                };
            }[];
        };
    };
}
