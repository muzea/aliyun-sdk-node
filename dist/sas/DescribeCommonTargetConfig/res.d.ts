export interface DescribeCommonTargetConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F`
     */
    RequestId: string;
    /**
     * 目标开关的配置信息列表。
     */
    TargetList: {
        /**
         * 配置生效类型。取值：
         * - **add**：包含
         * - **del**：排除
         * @example `add`
         */
        Flag: string;
        /**
         * 目标开关的配置的操作值。
         * >- **TargetType**取值为 **uuid**时，该值表示资产UUID。
         * >- **TargetType**取值为**Cluster**时，该值表示集群ID。
         * >- **TargetType**取值为**image_repo**时，该值表示镜像仓库ID。
         * @example `c23551de6149343e8a54e69fbefe6****`
         */
        Target: string;
        /**
         * 目标开关的配置的操作维度。取值：
         * - **uuid**：资产UUID
         * - **Cluster**：集群ID
         * - **image_repo**：镜像仓ID
         * @example `image_repo`
         */
        TargetType: string;
    }[];
}
