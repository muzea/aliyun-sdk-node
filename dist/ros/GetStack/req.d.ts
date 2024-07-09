export interface GetStackRequest {
    /**
     * 资源栈ID。
     * @example `c754d2a4-28f1-46df-b557-9586173a****`
     */
    "StackId": string;
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求的幂等性。 该值由客户端生成，并且必须全局唯一。
     * 长度不超过64个字符。
     * 更多信息，请参见[如何保证幂等性](~~134212~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否返回Outputs参数（资源栈输出列表）。取值：
     * - Enabled（默认值）：返回Outputs参数。
     * - Disabled：不返回Outputs参数。
     * > Outputs计算较为耗时。如果不需要获取Outputs信息，建议您将OutputOption指定为Disabled，提高接口响应速度。
     * @example `Disabled`
     */
    "OutputOption"?: string;
    /**
     * 是否返回ResourceProgress参数（资源处理进度）。取值：
     * - Disabled（默认值）：不返回ResourceProgress参数。
     * - PercentageOnly：返回ResourceProgress中StackOperationProgress和StackActionProgress参数。
     * > 支持ROS类型和Terraform类型资源栈。支持资源栈创建（含继续创建）、更新、删除、导入及相应的回滚操作。
     * - EnabledIfCreateStack（不推荐）：仅在创建资源栈时返回ResourceProgress中*Count和InProgressResourceDetails参数。
     * >  创建资源栈时资源栈状态为CREATE_IN_PROGRESS、CREATE_COMPLETE、CREATE_FAILED、CREATE_ROLLBACK_IN_PROGRESS、CREATE_ROLLBACK_COMPLETE或CREATE_ROLLBACK_FAILED。
     * @example `Disabled`
     */
    "ShowResourceProgress"?: string;
    /**
     * 日志选项。取值：
     * - None：不返回日志。
     * - Stack（默认值）：返回资源栈相关日志。
     * - Resource：返回资源相关日志。
     * - All：返回所有日志。
     * @example `Stack`
     */
    "LogOption"?: string;
}
