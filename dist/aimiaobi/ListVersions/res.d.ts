export interface ListVersionsResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `DataNotExists`
     */
    Code: string;
    /**
     * 错误说明
     * @example `数据不存在`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 实例ID
         * @example `ga-bp12pismsw4v3tzhf62p1`
         */
        InstanceId: string;
        /**
         * 订单ID
         * @example `7`
         */
        OrderId: number;
        /**
         * 版本
         * @example `试用版`
         */
        VersionName: string;
        /**
         * 版本明细
         * @example `标准版-公共并发：1并发`
         */
        VersionDetail: string;
        /**
         * 版本类型 (TRIAL: 试用版, STANDARD: 专业版, CUSTOMIZE: 定制版)
         * @example `CUSTOMIZE`
         */
        ProductType: string;
        /**
         * 并发数
         * @example `43`
         */
        ConcurrentCount: number;
        /**
         * 实例数
         * @example `55`
         */
        InstanceCount: number;
        /**
         * 服务开始时间
         * @example `2023-05-27 04:11:00`
         */
        StartTime: string;
        /**
         * 服务到期时间
         * @example `2023-04-23 02:00:34`
         */
        EndTime: string;
        /**
         * 有效状态：0-表示有效、1-版本过期-续费页、2-版本不可用-购买页
         * @example `87`
         */
        VersionStatus: number;
        /**
         * 试用版限额次数
         * @example `13`
         */
        Quota: number;
        /**
         * 试用版已使用次数
         * @example `65`
         */
        UseQuota: number;
    }[];
}
