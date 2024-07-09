export interface ListVirusScanMachineEventRequest {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 服务器UUID标识。
     * @example `a6931624-c43e-4323-9128-a6be6ffdxxxx`
     */
    "Uuid"?: string;
    /**
     * 执行处置操作生成的任务ID。
     * > 您可以调用[OperateVirusEvents](~~OperateVirusEvents~~)接口处置告警来生成该参数。
     * @example `233886xx`
     */
    "OperateTaskId"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
