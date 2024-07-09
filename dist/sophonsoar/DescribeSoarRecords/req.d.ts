export interface DescribeSoarRecordsRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `8f55e76d-b5d5-4720-9cd7-xxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 剧本配置的MD5值。
     * @example `be0a4ef084dd174abe478df52xxxxx`
     */
    "TaskflowMd5"?: string;
    /**
     * 任务运行的开始时间，格式：13位的时间戳。
     * @example `1683526284584`
     */
    "StartMillis"?: number;
    /**
     * 任务运行的结束时间，格式：13位的时间戳。
     * @example `1683772744953`
     */
    "EndMillis"?: number;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 执行剧本任务的阿里云账户ID。
     * @example `127xxxx4392`
     */
    "TriggerUser"?: string;
    /**
     * 任务的运行状态，取值：
     * - **success**：成功任务。
     * - **failed**：失败任务。
     * - **inprogress**：运行中任务
     * @example `inprogress`
     */
    "TaskStatus"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为1，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回10条数据。
     * > 建议PageSize取值不要为空。
     * @example `10`
     */
    "PageSize"?: number;
}
