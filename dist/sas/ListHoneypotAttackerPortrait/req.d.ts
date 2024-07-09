export interface ListHoneypotAttackerPortraitRequest {
    /**
     * 开始时间，时间戳格式。
     * @example `1672249044000`
     */
    "StartTimeStamp"?: number;
    /**
     * 结束时间，时间戳格式。
     * @example `1672285044000`
     */
    "EndTimeStamp"?: number;
    /**
     * 攻击源IP。
     * @example `101.133.155.***`
     */
    "SrcIp"?: string;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
