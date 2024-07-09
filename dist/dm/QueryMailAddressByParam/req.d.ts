export interface QueryMailAddressByParamRequest {
    /**
     * 当前页码，默认：1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小，默认：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 邮件地址，长度1-60，支持数字、字母、.、-、@。
     * @example `账号+@+域名`
     */
    "KeyWord"?: string;
    /**
     * 邮件地址类型。取值：
     * - batch：批量邮件
     * - trigger：触发邮件
     * @example `batch`
     */
    "Sendtype"?: string;
}
