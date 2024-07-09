export interface DescribeDBClusterServerlessConfResponse {
    /**
     * 请求ID。
     * @example `5E71541A-6007-4DCC-A38A-F872C31FEB45`
     */
    RequestId: string;
    /**
     * 单节点伸缩下限。取值范围：1 PCU~31 PCU。
     * @example `1`
     */
    ScaleMin: string;
    /**
     * 单节点伸缩上限。取值范围：1 PCU~32 PCU。
     * @example `3`
     */
    ScaleMax: string;
    /**
     * 只读节点个数伸缩下限。取值范围：0~15。
     * @example `2`
     */
    ScaleRoNumMin: string;
    /**
     * 只读节点个数伸缩上限。取值范围：0~15。
     * @example `4`
     */
    ScaleRoNumMax: string;
    /**
     * 是否开启无活动暂停。取值：
     * - **true**：开启
     * - **false**：关闭（默认）
     * @example `true`
     */
    AllowShutDown: string;
    /**
     * 无活动暂停的检测时长。取值范围：300~86,400。单位秒。检测时长必须是300秒的倍数。
     * @example `10`
     */
    SecondsUntilAutoPause: string;
    /**
     * Serverless集群ID。
     * @example `pc-bp10gr51qasnl****`
     */
    DBClusterId: string;
    /**
     * 只读列存节点个数下限。取值范围：0～7。
     * @example `1`
     */
    ScaleApRoNumMin: string;
    /**
     * 只读列存节点个数上限。取值范围：0～7。
     * @example `1`
     */
    ScaleApRoNumMax: string;
    /**
     * 稳态是否开启。取值：
     * 1：开启
     * 0：关闭
     * @example `1`
     */
    Switchs: string;
    ServerlessRuleMode: string;
    ServerlessRuleCpuEnlargeThreshold: string;
    ServerlessRuleCpuShrinkThreshold: string;
}
