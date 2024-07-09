export interface DescribeFailoverTestJobsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 故障演练任务列表。
     */
    FailoverTestJobList: {
        /**
         * 故障演练任务ID。
         * @example `ftj-bp1yh6mvi13aq3g8w****
        `
         */
        JobId: string;
        /**
         * 故障演练任务的名称。
         * 长度为0～128个字符，不能以`http://`或`https://`开头。
         * @example `test`
         */
        Name: string;
        /**
         * 故障演练任务的描述信息。
         * 长度为0～256个字符，不能以**http://**或**https://**开头。
         * @example `test`
         */
        Description: string;
        /**
         * 故障演练资源类型。取值：**PHYSICALCONNECTION**物理专线。
         * @example `PHYSICALCONNECTION`
         */
        ResourceType: string;
        /**
         * 故障演练资源ID列表。
         */
        ResourceId: string[];
        /**
         * 故障演练类型。取值：
         * - **StartNow**：立即开始，任务演练任务创建成功后立即开始执行演练。
         * - **StartLater**：暂不演练，仅创建演练任务暂不执行演练。
         * @example `StartNow`
         */
        JobType: string;
        /**
         * 演练时长。单位为分钟，取值范围为：**1~4320**。
         * @example `60`
         */
        JobDuration: string;
        /**
         * 故障演练任务开始时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2023-11-21T14:00:00Z`
         */
        StartTime: string;
        /**
         * 故障演练任务结束时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2023-11-21T15:00:00Z
        `
         */
        StopTime: string;
        /**
         * 故障演练任务状态。取值：
         * - **Init**：待演练。
         * - **Starting**：开始中。
         * - **Testing**：演练中。
         * - **Stopping**：结束中。
         * - **Stopped**：已完成。
         * @example `Init`
         */
        Status: string;
    }[];
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1~100**，默认值为20。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 列表总条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 列表当前条目数。
     * @example `10`
     */
    Count: number;
}
