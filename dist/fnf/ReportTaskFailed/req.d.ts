export interface ReportTaskFailedRequest {
    /**
     * 汇报任务指定的令牌。TaskToken会传递给被调用的服务，比如消息队列MNS或函数计算FC。对于MNS，用户可以从接收到的消息中获取，对于FC，用户可以从Event中获取。
     * 详情请参见[服务集成模式](~~2592915~~)。
     * @example `djEjYSNkZTdkYWZjMi0zMGRlLTRlMDMtOTA2OC0yMTMxYmM5NGJlZTIjNSMvV1ZHYks3RTc0WUsra25nQTNYSmtFa0t6****`
     */
    "TaskToken": string;
    /**
     * 失败错误代码。长度为1~128个字符。
     * @example `nill`
     */
    "Error": string;
    /**
     * 失败错误原因。长度为1~4096个字符。
     * @example `emptyString`
     */
    "Cause"?: string;
}
