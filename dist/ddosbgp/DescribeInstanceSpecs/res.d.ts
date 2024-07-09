export interface DescribeInstanceSpecsResponse {
    /**
     * 本次请求的ID。
     * @example `5840AB9F-1419-4620-807D-5EA476090247`
     */
    RequestId: string;
    /**
     * DDoS原生防护企业版实例的规格信息，包含全力防护的开启状态、可用和已用的全力防护次数等。
     */
    InstanceSpecs: {
        /**
         * 该实例是否开启了全力防护模式。取值：
         * - **0**：未开启全力防护模式。
         * - **1**：开启了全力防护模式。
         * @example `1`
         */
        IsFullDefenseMode: number;
        /**
         * DDoS原生防护企业版实例的地域ID。
         * > 您可以调用[DescribeRegions](~~118703~~)查询地域ID的具体含义。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 当前可用的全力防护次数。
         * @example `2`
         */
        AvailableDefenseTimes: number;
        /**
         * 总共可用的全力防护次数。
         * @example `2`
         */
        TotalDefenseTimes: number;
        /**
         * 全力防护次数使用的百分比。单位：百分比。
         * @example `30`
         */
        DefenseTimesPercent: number;
        /**
         * 当前可用的解除黑洞次数。
         * @example `100`
         */
        AvailableDeleteBlackholeCount: string;
        /**
         * DDoS原生防护企业版实例的ID。
         * @example `ddosbgp-cn-n6w1r7nz****`
         */
        InstanceId: string;
        /**
         * DDoS原生防护企业版实例的配置信息，包含防护IP数量、防护带宽信息等。
         */
        PackConfig: {
            /**
             * 原生防护企业版实例的基础防护带宽。单位：Gbps。
             * @example `20`
             */
            PackBasicThre: number;
            /**
             * 已添加防护的IP数量。
             * @example `0`
             */
            BindIpCount: number;
            /**
             * 原生防护企业版实例的弹性防护带宽。单位：Gbps。
             * @example `300`
             */
            PackAdvThre: number;
            /**
             * 正常业务带宽。单位：Mbps。
             * @example `200`
             */
            NormalBandwidth: number;
            /**
             * 被防护IP的基础防护阈值。单位：Gbps。
             * @example `20`
             */
            IpBasicThre: number;
            /**
             * 被防护IP的弹性防护阈值。单位：Gbps。
             * @example `300`
             */
            IpAdvanceThre: number;
            /**
             * 可添加的防护IP的数量。
             * @example `100`
             */
            IpSpec: number;
            /**
             * 带宽。单位：Gbit/s。
             * @example `2`
             */
            Bandwidth: number;
        };
    }[];
}
