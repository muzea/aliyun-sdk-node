export interface DescribeContactListRequest {
    /**
     * 每页显示的记录条数。
     * 默认值：100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 当前页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 报警联系人姓名。
     * @example `Alice`
     */
    "ContactName"?: string;
    /**
     * 报警类型。取值：
     * <props="china">- SMS：短信。</props>
     * <props="china">- AliIM：阿里旺旺。</props>
     * - Mail：邮件。
     * - DingWebHook：钉钉机器人。
     * @example `Mail`
     */
    "ChanelType"?: string;
    /**
     * 报警类型的值。
     * > 仅当`ChanelType`设置为`Mail`时，需要设置该参数。
     * @example `Alice@example.com`
     */
    "ChanelValue"?: string;
}
