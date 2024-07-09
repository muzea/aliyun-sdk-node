export interface ListPreferredEcsTypesResponse {
    /**
     * 是否支持竞价实例。
     * @example `true`
     */
    SupportSpotInstance: boolean;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    Series: {
        /**
         * 推荐的ECS实例列表，每个系列包含E-HPC集群各种节点对应的推荐规格。
         */
        SeriesInfo: {
            /**
             * 实例系列名称。可能值：
             * - SeriesHighCompute。
             * - SeriesHighMem。
             * - SeriesGPU。
             * - SeriesAll。
             * @example `SeriesAll`
             */
            SeriesName: string;
            /**
             * ECS实例系列ID。可能值：
             * - HighCompute：高计算。
             * - HighMem：高存储。
             * - GPU：GPU。
             * - All：代表全部可选项。
             * @example `All`
             */
            SeriesId: string;
            /**
             * E-HPC集群各类节点推荐的规格信息。
             */
            Roles: {
                Manager: {
                    /**
                     * 管控节点推荐使用的ECS规格列表。
                     */
                    InstanceTypeId: string[];
                };
                Compute: {
                    /**
                     * 计算节点推荐使用的ECS规格列表。
                     */
                    InstanceTypeId: string[];
                };
                Login: {
                    /**
                     * 登录节点推荐使用的ECS规格列表。
                     */
                    InstanceTypeId: string[];
                };
            };
        }[];
    };
}
