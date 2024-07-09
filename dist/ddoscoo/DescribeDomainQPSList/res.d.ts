export interface DescribeDomainQPSListResponse {
    /**
     * 本次请求的ID。
     * @example `327F2ABB-104D-437A-AAB5-D633E29A8C51`
     */
    RequestId: string;
    /**
     * 网站业务QPS统计信息。
     */
    DomainQPSList: {
        /**
         * 返回数据的索引号。
         * @example `0`
         */
        Index: number;
        /**
         * 统计时间。时间戳格式，单位：秒。
         * @example `1582992000`
         */
        Time: number;
        /**
         * 攻击QPS峰值。
         * @example `37`
         */
        MaxAttackQps: number;
        /**
         * 攻击QPS。
         * @example `1`
         */
        AttackQps: number;
        /**
         * 总QPS峰值。
         * @example `130`
         */
        MaxQps: number;
        /**
         * 正常QPS峰值。
         * @example `93`
         */
        MaxNormalQps: number;
        /**
         * 总QPS。
         * @example `1`
         */
        TotalQps: number;
        /**
         * 总访问次数。
         * @example `20008`
         */
        TotalCount: number;
        /**
         * 缓存命中数。
         * @example `0`
         */
        CacheHits: number;
    }[];
}
