export interface ListCheckItemRequest {
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的数据的最大条数。默认值为**20**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设置请求和接收消息的语言类型。默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
