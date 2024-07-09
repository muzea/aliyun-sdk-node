export interface DescribeDcdnDomainCcActivityLogResponse {
    /**
     * 返回数据的页码。
     * @example `1`
     */
    PageIndex: number;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F`
     */
    RequestId: string;
    /**
     * 整页大小。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总条数。
     * @example `20`
     */
    Total: number;
    /**
     * 拦截事件数据。
     */
    ActivityLog: {
        /**
         * 触发对象值。
         * @example `10.10.10.10`
         */
        Value: string;
        /**
         * 生效时长，单位：秒。
         * @example `300`
         */
        Ttl: number;
        /**
         * 拦截动作。
         * @example `deny`
         */
        Action: string;
        /**
         * 触发对象。
         * @example `IP`
         */
        TriggerObject: string;
        /**
         * 时间片起始时刻。
         * @example `2015-12-10T20:00:00Z`
         */
        TimeStamp: string;
        /**
         * 加速域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 拦截规则名称。
         * @example `test2`
         */
        RuleName: string;
    }[];
}
