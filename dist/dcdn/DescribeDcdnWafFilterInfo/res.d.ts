export interface DescribeDcdnWafFilterInfoResponse {
    /**
     * 请求ID。
     * @example `153ca2cd-3c01-44be-204c-64dbc6c88630`
     */
    RequestId: string;
    /**
     * 查询到的信息。
     */
    Content: {
        /**
         * 防护策略类型，同请求参数的DefenseScene。
         * @example `custom_acl`
         */
        DefenseScene: string;
        /**
         * 匹配条件信息。
         */
        Fields: {
            /**
             * 匹配字段的扩展tip，无此字段或此字段为空表示无扩展字段。
             * @example `自定义Header`
             */
            ExtendField: string;
            /**
             * 匹配字段。
             * @example `Header`
             */
            MatchField: string;
            /**
             * 逻辑符。
             */
            LogicalSymbol: {
                /**
                 * 可输入的匹配内容个数，取值：
                 * - multi：可输入多个匹配内容。
                 * - single：仅可输入单个匹配内容。
                 * - none：不能输入。
                 * @example `multi`
                 */
                Type: string;
                /**
                 * 代码内部传给后端逻辑符。
                 * @example `match-one`
                 */
                Symbol: string;
                /**
                 * 匹配内容中显示的提示信息。
                 * @example `可以输入多个，最多50个，按回车键确认`
                 */
                Tip: string;
                /**
                 * 可设置的属性，位域变量，具体内容见下表<br>例：1(0000 0001)表示可开启大小写敏感，不可开启流式匹配；3(0000 0011)表示可开启大小写敏感，也可开启流式匹配
                 * - 位（低位到高位）- 描述
                 * - 1                           - 大小写敏感
                 * - 2                           - 流式匹配
                 * @example `1`
                 */
                Attributes: number;
                /**
                 * 匹配内容可输入的最大个数限制，根据Type取值不同，该参数取值如下：
                 * - 取值为**multi**时，表示可输入的最大个数限制。
                 * - 取值为**single**时，该参数为1。
                 * - 取值为**none**时，该参数为0。
                 * @example `50`
                 */
                MaxLength: number;
                /**
                 * 控制台显示逻辑符。
                 * @example `等于多值之一`
                 */
                Description: string;
                /**
                 * 正则表达式。
                 */
                Regexp: {
                    /**
                     * 正则表达式。
                     * @example `^\S+$`
                     */
                    Pattern: string;
                    /**
                     * 匹配不上正则表达式的错误信息。
                     * @example `字段不能为空`
                     */
                    ErrMsg: string;
                };
            }[];
        }[];
    }[];
}
