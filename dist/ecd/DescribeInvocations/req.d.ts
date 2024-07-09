export interface DescribeInvocationsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 脚本进程执行ID。
     * @example `t-hz0jdfwd9f****`
     */
    "InvokeId"?: string;
    /**
     * 脚本类型。取值范围：
     * - RunBatScript
     * - RunPowerShellScript
     * @example `RunPowerShellScript`
     */
    "CommandType"?: string;
    /**
     * 脚本执行的总执行状态。总执行状态取决于创建执行中的一台或多台云桌面的共同执行状态。取值范围：
     * - Running：一旦有进行中的脚本进程，总的执行状态就为进行中。
     * - Finished：所有云桌面全部完成执行。或者手动停止部分云桌面的脚本进程，其余云桌面全部执行完成。
     * - Failed：所有云桌面全部执行失败。
     * - PartialFailed：部分云桌面有执行失败的脚本进程，则总执行状态为部分失败。
     * - Stopped：停止执行脚本。
     * 默认值：Running。
     * @example `Finished`
     */
    "InvokeStatus"?: string;
    /**
     * 云桌面ID。如果指定了云桌面，则查询该桌面所有的脚本执行记录。
     * @example `ecd-7w78ozhjcwa3u****`
     */
    "DesktopId"?: string;
    /**
     * 是否在结果中返回脚本运行的输出信息。取值范围：
     * - true：返回。
     * - false：不返回。
     * 默认值：false。
     * @example `false`
     */
    "IncludeOutput"?: boolean;
    /**
     * 返回数据的编码方式。取值范围：
     * - PlainText：返回原始脚本内容和输出信息。
     * - Base64：返回Base64编码后的脚本内容和输出信息。
     * 默认值：Base64。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：50。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    "NextToken"?: string;
    /**
     * 用户ID。
     * @example `test1`
     */
    "EndUserId"?: string;
    /**
     * 云桌面ID列表。DesktopId即将弃用，请使用当前字段传递DesktopId列表信息。
     */
    "DesktopIds"?: string[];
}
