export interface DescribeDdosCountResponse {
    /**
     * 本次请求的ID。
     * @example `7D66C762-324E-51CE-B461-2007996087B2`
     */
    RequestId: string;
    /**
     * 正在遭受DDoS攻击的实例数量详情。
     */
    DdosCount: {
        /**
         * 处于黑洞状态的实例的数量。
         * @example `0`
         */
        BlackholeCount: number;
        /**
         * 实例的总数量。
         * @example `0`
         */
        InstacenCount: number;
        /**
         * 正在进行攻击流量清洗的实例的数量。
         * @example `4`
         */
        DefenseCount: number;
    };
}
