export interface AttachTaskRequest {
    /**
     * 任务ID。
     * 您可以在控制台的[任务管理](https://aiccs.console.aliyun.com/job/list)页面，获取任务ID。
     * @example `12****`
     */
    "TaskId": number;
    /**
     * 呼叫字符（被叫信息和参数列表）。取值：
     * - **LIST**：`0571****5678,0571****5679`
     * - **JSON**：`{"ParamNames":["name","age"],"CalleeList":[{"Callee":"181****0000","Params":["张三","20"]},{"Callee":"181****0001","Params":["李四","21"]}]}`。其中**ParamNames**代表参数名称列表；**Params**代表参数值列表。
     * > 参数名称列表和参数值列表顺序需要相对应。
     * @example `{"ParamNames":["name","age"],"CalleeList":[{"Callee":"181****0000","Params":["张三","20"]},{"Callee":"181****0001","Params":["李四","21"]}]}`
     */
    "CallString"?: string;
}
