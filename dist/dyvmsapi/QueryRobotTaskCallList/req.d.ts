export interface QueryRobotTaskCallListRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页记录数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 机器人呼叫任务的唯一任务ID。调用[CreateRobotTask](~~393531~~)接口获取。
     * @example `1045001****`
     */
    "TaskId": string;
    /**
     * 通话时长，左边数值。
     * @example `0`
     */
    "DurationFrom"?: string;
    /**
     * 通话时长，右边数值。
     * @example `60`
     */
    "DurationTo"?: string;
    /**
     * 对话轮次，左边数值。
     * @example `0`
     */
    "DialogCountFrom"?: string;
    /**
     * 对话轮次，右边数值。
     * @example `5`
     */
    "DialogCountTo"?: string;
    /**
     * 挂断方向。取值：
     * - **0**：用户。
     * - **1**：机器人。
     * @example `1`
     */
    "HangupDirection"?: string;
    /**
     * 通话结果。取值：
     * - **200002**：占线。
     * - **200005**：无法接通。
     * - **200010**：关机。
     * - **200011**：停机。
     * - **200012**：呼损。
     * @example `200002`
     */
    "CallResult"?: string;
    /**
     * 被叫号码。
     * @example `1300****0000`
     */
    "Called"?: string;
}
