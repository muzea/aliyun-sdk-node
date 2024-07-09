export interface GetAutoResourceOptimizeRulesResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 所有开启过空间碎片自动回收功能的数据库实例数量。
         * @example `3`
         */
        TotalAutoResourceOptimizeRulesCount: number;
        /**
         * 正在使用空间碎片自动回收功能的数据库实例数量。
         * @example `1`
         */
        EnableAutoResourceOptimizeCount: number;
        /**
         * 曾经开启并且当前已关闭空间碎片自动回收功能的数据库实例数量。
         * @example `1`
         */
        TurnOffAutoResourceOptimizeCount: number;
        /**
         * 已开启并且未关闭空间碎片自动回收功能，但已不再使用DAS企业版的数据库实例数量。
         * @example `1`
         */
        HasEnableRuleButNotDasProCount: number;
        /**
         * 正在使用空间碎片自动回收功能的数据库实例信息列表。
         */
        EnableAutoResourceOptimizeList: {
            /**
             * 数据库实例ID。
             * @example `rm-2ze8g2am97624****`
             */
            InstanceId: string;
            /**
             * 是否开启了自动空间碎片回收功能。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            AutoDefragment: boolean;
            /**
             * 触发空间碎片自动回收单个物理表的最小空间，单位为GB。
             * @example `10`
             */
            TableSpaceSize: number;
            /**
             * 是否开启了DAS企业版。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            DasProOn: boolean;
            /**
             * 触发空间碎片自动回收单个物理表的碎片率。
             * @example `0.2`
             */
            TableFragmentationRatio: number;
            /**
             * 用户ID，即创建数据库实例的阿里云主账号ID。
             * @example `140692647406****`
             */
            UserId: string;
        }[];
        /**
         * 曾经开启并且当前已关闭空间碎片自动回收功能的数据库实例信息列表。
         */
        TurnOffAutoResourceOptimizeList: {
            /**
             * 数据库实例ID。
             * @example `rm-2vc54m2a6pd6p****`
             */
            InstanceId: string;
            /**
             * 是否开启了自动空间碎片回收功能。
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            AutoDefragment: boolean;
            /**
             * 触发空间碎片自动回收单个物理表的最小空间，单位为GB。
             * @example `10`
             */
            TableSpaceSize: number;
            /**
             * 是否开启了DAS企业版。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            DasProOn: boolean;
            /**
             * 触发空间碎片自动回收单个物理表的碎片率。
             * @example `0.2`
             */
            TableFragmentationRatio: number;
            /**
             * 用户ID，即创建数据库实例的阿里云主账号ID。
             * @example `140692647406****`
             */
            UserId: string;
        }[];
        /**
         * 已开启并且未关闭空间碎片自动回收功能，但已不再使用DAS企业版的数据库实例列表。
         * > 此类数据库实例不会执行空间碎片自动回收，直至再次为数据库实例开启DAS企业版。
         */
        HasEnableRuleButNotDasProList: {
            /**
             * 数据库实例ID。
             * @example `rm-2ze9xrhze0709****`
             */
            InstanceId: string;
            /**
             * 是否开启了自动空间碎片回收功能。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            AutoDefragment: boolean;
            /**
             * 触发空间碎片自动回收单个物理表的最小空间，单位为GB。
             * @example `10`
             */
            TableSpaceSize: number;
            /**
             * 是否开启了DAS企业版。
             * - **true**：是。
             * - **false**：否。
             * @example `false`
             */
            DasProOn: boolean;
            /**
             * 触发空间碎片自动回收单个物理表的碎片率。
             * @example `0.2`
             */
            TableFragmentationRatio: number;
            /**
             * 用户ID，即创建数据库实例的阿里云主账号ID。
             * @example `140692647406****`
             */
            UserId: string;
        }[];
        /**
         * 从未开启过空间碎片自动回收或者实例不存在的数据库实例数量。
         * > 实例不存在：数据库实例已经释放或者传入的数据库实例ID存在错误。
         * @example `1`
         */
        NeverEnableAutoResourceOptimizeOrReleasedInstanceCount: number;
        /**
         * 从未开启过空间碎片自动回收或者实例不存在的数据库实例信息列表。
         */
        NeverEnableAutoResourceOptimizeOrReleasedInstanceIdList: string[];
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
