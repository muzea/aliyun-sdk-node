export interface QueryRobotTaskListResponse {
    /**
     * 智能语音任务列表。JSON格式。取值：
     * - **id**：机器人呼叫任务的唯一任务ID。
     * - **taskName**：任务名称。
     * - **robotId**：指定机器人ID。
     * - **robotName**：机器人名称。
     * - **status**：任务状态。
     * - **scheduleType**：调度类型。**SINGLE**为立即启动，**ORDER**为定时启动。
     * - **createTime**：任务创建时间。yyyy.MM.dd HH:mm:ss格式。
     * - **completeTime**：任务完成时间。yyyy.MM.dd HH:mm:ss格式。
     * - **fireTime**：任务启动时间。yyyy.MM.dd HH:mm:ss格式。
     * - **totalCount**：处理通话总数。
     * - **finishCount**：完成通话个数。
     * @example `[ {"id": 1045001, "taskName": "智能语音任务", "robotId": 1000000075003, "robotName": "机器人", "status": "INIT","scheduleType": "SINGLE", "createTime": "2019.06.14 14:55:23", "completeTime": "2019.06.14 14:55:23", "fireTime": "2019.06.14 14:55:23", "totalCount": 1000, "finishCount": 998} ]`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 每页个数。
     * @example `1`
     */
    PageNo: string;
    /**
     * 请求状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 页码。
     * @example `1`
     */
    PageSize: string;
    /**
     * 总任务数。
     * @example `1`
     */
    TotalCount: string;
}
