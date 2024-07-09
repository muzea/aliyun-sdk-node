export interface CreateDeploymentSetRequest {
    /**
     * 部署集所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 部署集内实例宕机迁移后，缺乏可供打散的实例库存的紧急处理方案。取值范围：
     *
     * - CancelMembershipAndStart：将实例移出部署集，宕机迁移后即刻启动实例。
     * - KeepStopped：维持实例的部署集属性，实例保持停止状态。
     * 默认值：CancelMembershipAndStart。
     * @example `CancelMembershipAndStart`
     */
    "OnUnableToRedeployFailedInstance"?: string;
    /**
     * 部署集描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 部署集名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testDeploymentSetName`
     */
    "DeploymentSetName"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "Domain"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "Granularity"?: string;
    /**
     * 部署策略。取值范围：
     * - Availability：高可用策略。
     * - AvailabilityGroup：部署集组高可用策略。
     * - LowLatency：网络低时延策略。
     * 默认值：Availability。
     * @example `Availability`
     */
    "Strategy"?: string;
    /**
     * 为部署集组高可用策略设置分组数量。取值范围：1~7。
     * 默认值：3。
     * > 该参数仅当`Strategy=AvailabilityGroup`时生效。
     * @example `1`
     */
    "GroupCount"?: number;
}
