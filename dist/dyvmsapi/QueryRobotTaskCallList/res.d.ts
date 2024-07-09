export interface QueryRobotTaskCallListResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 智能语音任务通话列表，JSON数组格式。
     * - **taskId**：机器人呼叫任务的唯一任务ID。
     * - **caller**：主叫号码。
     * - **called**：被叫号码。
     * - **duration**：通话时长，单位：秒。
     * - **label**：标签。
     * - **dialogCount**：对话轮次。
     * - **callResult**：通话结果。
     * - **hangupDirection**：挂断方向。**1**：用户；**0**：机器人。
     * - **transferResult**：转接人工状态。**1**：转接成功；**0**：转接失败；**3**：未转人工。
     * - **transferNumber**：人工座席号码。
     * - **transferFailReson**：转接人工失败原因。
     * - **callId**：通话的唯一回执ID。
     * - **recallCurTimes**：重试次数。
     * - **callStartTime**：通话开始时间。
     * - **callEndTime**：通话结束时间。
     * - **sureCount**：肯定次数。
     * - **denyCount**：否定次数。
     * - **rejectCount**：拒绝次数。
     * - **customCount**：用户自定义次数。
     * - **konwledgeCount**：查询知识库次数。
     * - **defaultCount**：默认次数。
     * - **knowledgeBusinessCount**：业务问题次数。
     * - **knowledgeCommonCount**：通用问题次数。
     * @example `[ {"taskId":"1045001", "caller":"0571-889****", "called": "130****0000", "duration":"60", "label":"邀约，有房，无车", "dialogCount":"3", "callResult":"无法接通", "hangupDirection":"1", "transferResult":"3", "transferNumber":"0571-8833****", "transferFailReason":"用户挂断", "callId":"116950320375^10375010****", "recallCurTimes":"2", "callStartTime":"2019.06.14 15:22:23", "callEndTime":"2019.06.14 15:22:55", "sureCount":"2", "denyCount":"2", "rejectCount":"0", "customCount:"0", "knowledgeCount":"0", "defaultCount":"0", "knowledgeBusinessCount":"0", "knowledgeCommonCount":"0"} ]`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
}
