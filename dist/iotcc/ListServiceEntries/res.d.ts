export interface ListServiceEntriesResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 总列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 应用条目列表。
     */
    ServiceEntries: {
        /**
         * 系统为分应用统计服务生成的ID，全网唯一。
         * @example `c910061f-****-44e6-b659-***c`
         */
        ServiceId: string;
        /**
         * 应用条目的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：已创建。
         * - **Deleting**：删除中。
         * - **Updating**：更新中。
         * @example `Created`
         */
        ServiceEntryStatus: string;
        /**
         * 应用条目的目的地址。
         * @example `192.168.1.32/27`
         */
        Target: string;
        /**
         * 应用条目的目的地址类型。取值：
         * - **Cidr**：CIDR地址块。
         * - **Domain**：域名。
         * @example `Cidr`
         */
        TargetType: string;
        /**
         * 应用条目的名称。
         * 长度为2~128个英文或中文字符，开头必须为大小写英文字母或中文，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * @example `entry_name`
         */
        ServiceEntryName: string;
        /**
         * 应用条目的描述。
         * 长度为2~256个字符，开头必须为大小写英文字母或中文，但不能为`http://`或`https://`。
         * @example `entry_description`
         */
        ServiceEntryDescription: string;
        /**
         * 应用条目的ID。
         * @example `fwd-119smw5tkasdf****`
         */
        ServiceEntryId: string;
    }[];
}
