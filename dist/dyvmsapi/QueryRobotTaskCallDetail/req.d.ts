export interface QueryRobotTaskCallDetailRequest {
    /**
     * 机器人呼叫任务的唯一任务ID。调用[CreateRobotTask](~~393531~~)接口获取。
     * @example `1045001`
     */
    "TaskId": number;
    /**
     * 被叫号码。
     * @example `130****0000`
     */
    "Callee": string;
    /**
     * 查询时间，请使用时间戳格式。
     * @example `1603239801000`
     */
    "QueryDate": number;
}
