export interface DescribeInvocationResultsRequest {
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
     * 命令执行ID。您可以通过接口[DescribeInvocations](~~64840~~)查询InvokeId。
     * @example `t-hz0jdfwd9f****`
     */
    "InvokeId"?: string;
    /**
     * 实例ID。
     * @example `i-bp1i7gg30r52z2em****`
     */
    "InstanceId"?: string;
    /**
     * 命令ID。
     * @example `c-hz0jdfwcsr****`
     */
    "CommandId"?: string;
    /**
     * 命令执行状态。取值范围：
     * - Running：运行中。
     *     - 定时执行：未手动停止定时执行命令前，执行状态一直为进行中。
     *     - 单次执行：一旦有进行中的命令进程，总的执行状态就为进行中。
     * - Finished：已完成。
     *     - 定时执行：命令进程不可能为执行完成。
     *     - 单次执行：所有实例全部完成执行。或者手动停止部分实例的命令进程，其余实例全部执行完成。
     * - Success：
     *     - 单次执行的命令：命令执行完成，且退出码为0。
     *     - 定时执行的命令：上一次执行成功且退出码为0，且指定的执行时间已结束。
     * - Failed：执行失败。
     *     - 定时执行：命令进程不可能为执行失败。
     *     - 单次执行：所有实例全部执行失败。
     * - PartialFailed：部分执行失败。
     *     - 定时执行：命令进程不可能为部分失败。
     *     - 单次执行：部分实例有执行失败的命令进程，则总执行状态为部分失败。
     * - Stopped：命令执行已停止。
     * - Stopping：正在停止执行的命令。
     * @example `Running`
     */
    "InvokeRecordStatus"?: string;
    /**
     * 是否返回命令定时执行的历史记录。取值范围：
     *  - true：表示返回命令定时执行的结果。当取值为true时，参数InvokeId的取值不能为空，且必须为定时执行（RepeatMode为Period）或系统每一次启动后执行（RepeatMode为EveryReboot）的命令执行ID。
     *  - false：表示不返回。
     * 默认值为false。
     * @example `false`
     */
    "IncludeHistory"?: boolean;
    /**
     * 设置返回数据中`CommandContent`字段和`Output`字段的编码方式，取值范围：
     * - PlainText：返回原始命令内容和输出信息。
     * - Base64：返回Base64编码后的命令内容和输出信息。
     * 默认值为Base64。
     * @example `PlainText`
     */
    "ContentEncoding"?: string;
    /**
     * 当前页码。
     * 起始值为1。
     * 默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 最大值为50。
     * 默认值为10。
     * @example `1`
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
     * 标签列表
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
