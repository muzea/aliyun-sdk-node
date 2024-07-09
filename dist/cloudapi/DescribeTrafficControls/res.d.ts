export interface DescribeTrafficControlsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `93D91A99-F093-4596-87BA-3C4FBFD3FD8A`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `1`
     */
    TotalCount: number;
    TrafficControls: {
        /**
         * 由 TrafficControl 组成的数组格式，返回流控策略信息
         */
        TrafficControl: {
            /**
             * 每个用户默认的流控值
             * @example `15000`
             */
            UserDefault: number;
            /**
             * 每个API默认流控值
             * @example `20000`
             */
            ApiDefault: number;
            /**
             * 上一次修改时间（格林威治时间）
             * @example `2016-01-27T10:34:38Z`
             */
            ModifiedTime: string;
            /**
             * 流控策略描述
             * @example `test`
             */
            Description: string;
            /**
             * 流控策略单位，可选值：
             * - MINUTE：分钟
             * - HOUR：小时
             * - DAY：天
             * @example `Minute`
             */
            TrafficControlUnit: string;
            /**
             * 流控策略名称
             * @example `wulingtestq1`
             */
            TrafficControlName: string;
            /**
             * 每个app默认的流控值
             * @example `8000`
             */
            AppDefault: number;
            /**
             * 流控策略ID
             * @example `cfed6c970d45481dbe136d6b5ac68c41`
             */
            TrafficControlId: string;
            /**
             * 创建时间（格林威治时间）
             * @example `2016-01-27T10:19:39Z`
             */
            CreatedTime: string;
            SpecialPolicies: {
                /**
                 * 由 SpecialPolicy 组成的数组格式，返回特殊流控策略信息
                 */
                SpecialPolicy: {
                    /**
                     * 特殊流控类型，可选值：
                     * - **APP**：应用
                     * - **USER**：用户
                     * @example `USER`
                     */
                    SpecialType: string;
                    Specials: {
                        /**
                         * 由 Special 组成的数组格式，返回特殊流控策略数据项信息
                         */
                        Special: {
                            /**
                             * 流控值
                             * @example `100`
                             */
                            TrafficValue: number;
                            /**
                             * 根据SpecialType对应的AppId或者是用户账号
                             * @example `test_wg@aliyun.com`
                             */
                            SpecialKey: string;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
