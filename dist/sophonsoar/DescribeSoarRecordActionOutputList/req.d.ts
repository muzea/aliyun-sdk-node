export interface DescribeSoarRecordActionOutputListRequest {
    /**
     * 组件动作的UUID。
     * >调用[DescribeSoarTaskAndActions](~~DescribeSoarTaskAndActions~~)接口可以获取该参数。
     * @example `2202c90d-fa93-4726-bc32-xxxxxx`
     */
    "ActionUuid": string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回10条数据。
     * > 建议PageSize取值不要为空。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber": number;
}
