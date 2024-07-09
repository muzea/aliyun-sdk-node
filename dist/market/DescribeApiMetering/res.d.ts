export interface DescribeApiMeteringResponse {
    /**
     * 请求id
     * @example `62FC432C55A1A63534A6CB34`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 返回值列表
     */
    Result: {
        /**
         * 阿里云pk
         * @example `102277855749****`
         */
        AliyunPk: number;
        /**
         * 商品code
         * @example `cmapi0004****`
         */
        ProductCode: string;
        /**
         * 商品名称
         * @example `身份证实名认证-身份证实名`
         */
        ProductName: string;
        /**
         * 余量
         * @example `98`
         */
        TotalQuota: number;
        /**
         * 使用量
         * @example `220`
         */
        TotalUsage: number;
        /**
         * 单位
         * @example `次`
         */
        Unit: string;
    }[];
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 结果标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 总数
     * @example `100`
     */
    Count: number;
    /**
     * 　每页个数
     * @example `20`
     */
    PageSize: number;
    /**
     * 错误信息描述
     * @example `"成功"`
     */
    Message: string;
    /**
     * 版本
     * @example `1.0`
     */
    Version: string;
    /**
     * fatal
     * @example `false`
     */
    Fatal: boolean;
}
