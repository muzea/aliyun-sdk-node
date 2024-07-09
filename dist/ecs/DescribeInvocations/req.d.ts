export interface DescribeInvocationsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命令执行的资源组ID。传入该参数后，需要在执行命令时指定ResourceGroupId，支持筛选出对应的命令执行结果。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 命令执行ID。
     * @example `t-hz0jdfwd9f****`
     */
    "InvokeId"?: string;
    /**
     * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
     * @example `c-hz0jdfwcsr****`
     */
    "CommandId"?: string;
    /**
     * 命令名称。如果同时设置了`InstanceId`参数，则该参数不生效。
     * @example `CommandTestName`
     */
    "CommandName"?: string;
    /**
     * 命令类型。取值范围：
     * - RunBatScript：命令为在Windows实例中运行的Bat脚本。
     * - RunPowerShellScript：命令为在Windows实例中运行的PowerShell脚本。
     * - RunShellScript：命令为在Linux实例中运行的Shell脚本。
     * @example `RunShellScript`
     */
    "CommandType"?: string;
    /**
     * 查询的命令是否在将来会自动执行。取值范围：
     * - true：查询在调用`RunCommand`或`InvokeCommand`执行命令时，`RepeatMode`参数取值为`Period`、`NextRebootOnly`或者`EveryReboot`。
     * - false：查询以下两种状态的命令。
     *     - 在调用`RunCommand`或`InvokeCommand`执行命令时，`RepeatMode`参数取值为`Once`。
     *     - 已被取消、被停止或者已完成执行的命令。
     * 默认值：false。
     * @example `true`
     */
    "Timed"?: boolean;
    /**
     * 命令执行的总执行状态。总执行状态取决于创建执行中的一台或多台实例的共同执行状态。取值范围：
     *
     * - Running：
     *     - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
     *     - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
     * - Finished：
     *     - 定时执行：命令进程不可能为执行完成。
     *     - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
     * - Success：各个实例上的命令执行状态均为Stopped或Success，且至少一个实例的命令执行状态是Success，则总执行状态为Success。
     *     - 立即运行的任务：命令执行完成，且退出码为0。
     *     - 定时运行的任务：最近一次执行成功且退出码为0，且指定的时间已全部完成。
     * - Failed：
     *     - 定时执行：命令进程不可能为执行失败。
     *     - 单次执行：所有实例全部执行失败。
     * - Stopped：停止命令。
     * - Stopping：停止中。
     * - PartialFailed：部分失败；如果同时设置了`InstanceId`参数，则不生效。
     * @example `Finished`
     */
    "InvokeStatus"?: string;
    /**
     * 实例ID。当您传入了该参数，将查询该实例所有的命令执行记录。
     * @example `i-bp1i7gg30r52z2em****`
     */
    "InstanceId"?: string;
    /**
     * 设置返回数据中`CommandContent`字段和`Output`字段的编码方式。取值范围：
     * - PlainText：返回原始命令内容和输出信息。
     * - Base64：返回Base64编码后的命令内容和输出信息。
     * 默认值：Base64。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
    /**
     * 是否在结果中返回命令运行的输出信息。
     * - true：返回。此时，您至少指定参数`InvokeId`或`InstanceId`。
     * - false：不返回。
     * 默认值：false。
     * @example `false`
     */
    "IncludeOutput"?: boolean;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时每页的最大条目数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2`
     */
    "NextToken"?: string;
    /**
     * 命令执行的方式。如果同时设置了`InstanceId`参数，则不生效。取值范围：
     * - Once：立即执行命令。
     * - Period：定时执行命令。
     * - NextRebootOnly：当实例下一次启动时，自动执行命令。
     * - EveryReboot：实例每一次启动都将自动执行命令。
     * 默认值为空，表示查询全部。
     * @example `Once`
     */
    "RepeatMode"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 命令执行的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个；使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
         * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 命令执行的标签值。N的取值范围为1~20。该值可以为空字符串。
         * 最多支持128个字符，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
