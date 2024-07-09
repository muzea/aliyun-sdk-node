export interface CreateTaskRequest {
    /**
     * 任务名称。支持中文和英文，0～30个字符。
     * @example `测试任务`
     */
    "TaskName": string;
    /**
     * 指定机器人ID（话术ID）。表示选择哪个机器人话术发起呼叫。
     * 您可在控制台的[话术管理](https://aiccs.console.aliyun.com/patter/list)页面，获取话术ID。
     * @example `12****`
     */
    "RobotId": string;
    /**
     * 外呼主叫号码。
     * > 必须是已购买的号码，多个号码用英文逗号（,）隔开。
     * @example `0571****5678,0571****5679`
     */
    "Caller": string;
    /**
     * 呼叫字符（被叫信息和参数列表）。取值：
     * - **LIST**：`05715678****,05715679****`
     * - **JSON**：`{"ParamNames":["name","age"],"CalleeList":[{"Callee":"1810000****","Params":["张三","20"]},{"Callee":"1810001****","Params":["李四","21"]}]}`。其中ParamNames代表参数名称列表；Params代表参数值列表。
     * > - 参数名称列表和参数值列表顺序需要对应。
     * - 最多1000个被叫号码。
     * @example `{"ParamNames":["name","age"],"CalleeList":[{"Callee":"1810000****","Params":["张三","20"]},{"Callee":"1810001****","Params":["李四","21"]}]}`
     */
    "CallString"?: string;
    /**
     * 呼叫字符串类型。取值：
     * - **LIST**
     * - **JSON**
     * @example `JSON`
     */
    "CallStringType": string;
    /**
     * 是否自动重拨。取值：
     * - **1**：重拨。
     * - **0**：不重拨。
     * @example `1`
     */
    "RetryFlag"?: number;
    /**
     * 重拨次数。
     * @example `2`
     */
    "RetryCount"?: number;
    /**
     * 重拨间隔。单位：分钟，必须大于1。
     * @example `2`
     */
    "RetryInterval"?: number;
    /**
     * 需要重拨的通话状态。多个状态使用英文逗号（,）分隔。取值：
     * - **200010**：关机。
     * - **200011**：停机。
     * - **200002**：占线。
     * - **200012**：呼损。
     * - **200005**：无法接通。
     * - **200003**：无应答。
     * @example `200010,200011`
     */
    "RetryStatusCode"?: string;
    /**
     * 是否立即启动。
     * - **true**：是。
     * - **false**：否。
     * @example `是`
     */
    "StartNow"?: boolean;
    /**
     * 工作时间列表（精确到分钟）。
     * @example `10:00-12:00,13:00-14:00`
     */
    "WorkTimeList": string;
    /**
     * 工作日期。取值：
     * - **1**：星期一。
     * - **2**：星期二。
     * - **3**：星期三。
     * - **4**：星期四。
     * - **5**：星期五。
     * - **6**：星期六。
     * - **7**：星期天。
     * @example `1`
     */
    "WorkDay": string;
    /**
     * 并发数量（坐席数量）。
     * @example `3`
     */
    "SeatCount": string;
}
