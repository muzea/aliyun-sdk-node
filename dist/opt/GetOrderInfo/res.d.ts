export interface GetOrderInfoResponse {
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回结果信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回业务数据，licenseKey：授权证书key；currentConcurrency：并发度；instanceId：实例id；totalDays：总购买天数；currentDays：当前剩余天数。
     * @example `{"licenseKey":"eems7ri3b1u5nui*****","currentConcurrency":2,"instanceId":"opt_mplicense_public_cn-****","totalDays":124,"currentDays":103}`
     */
    Data: {
        /**
         * 并发度
         * @example `1`
         */
        currentConcurrency: number;
        /**
         * 总购买天数
         * @example `10`
         */
        totalDays: number;
        /**
         * 当前剩余天数。
         * @example `1`
         */
        currentDays: number;
        /**
         * 授权证书key
         * @example `xxxxxxxx`
         */
        licenseKey: string;
        /**
         * 实例id
         * @example `opt_mplicense_public_cn-xxxxxx`
         */
        instanceId: string;
        /**
         * 商品类型
         * @example `0`
         */
        bizType: string;
        /**
         * 实例备注
         * @example `remark`
         */
        remark: string;
    }[];
    /**
     * 请求唯一标识
     * @example `5D6653C5-CA2B-14EC-9CF0-50AA0FF49C31`
     */
    RequestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    Success: boolean;
}
