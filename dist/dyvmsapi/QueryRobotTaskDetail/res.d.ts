export interface QueryRobotTaskDetailResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 机器人任务详情信息。JSON格式。
     * - **Id**：机器人呼叫任务的唯一任务ID。
     * - **taskName**：任务名称。
     * - **robotId**：指定机器人ID。
     * - **robotName**：机器人名称。
     * - **corpName**：公司名称。
     * - **caller**：被叫显号。
     * - **numberStatusIdent**：号码状态识别。**true**为识别，**false**为不识别。
     * - **status**：任务状态。任务状态取值，请参见[QueryRobotTaskList](~~QueryRobotTaskList~~)中`status`取值。
     * - **scheduleType**：调度类型。**SINGLE**为立即启动，**ORDER**为定时启动。
     * - **retryType**：是否自动重拨。**1**为重拨，**0**为不重拨。
     * - **recallStateCodes**：需要重拨的通话状态。**200010**为关机、**200011**为停机、**200002**为占线、**200012**为呼损、**200005**为无法接通。
     * - **recallTimes**：重拨次数。
     * - **recallInterval**：重拨间隔。单位：分钟。
     * - **createTime**：任务创建时间。yyyy-MM-dd HH:mm:ss格式。
     * - **fireTime**: 任务启动时间。yyyy-MM-dd HH:mm:ss格式。
     * - **completeTime**: 任务完成时间。yyyy-MM-dd HH:mm:ss格式。
     * - **filename**：被叫号码文件名。
     * - **ossFilePath**：被叫号码文件地址。
     * @example `{"id":1045001,"taskName":"智能语音务","robotId":1000000075003,"robotName":"机器人","corpName":"xx公司 ","caller":"057156xxxx,0571568xxxx", "numberStatusIdent":true,"status":"INIT","scheduleType":"SINGLE", "retryType":1,"recallStateCodes":"200010,200011", "recallTimes":2,"recallInterval":5,"createTime": "2019-06-14 11:04:19","fireTime":"2019-06-14 11:05:23","completeTime": "2019-06-14 18:21:06","called": [{"fileName": "5102636f-7be6-4a2d-9ac7-755a2e140a50--robotCallApi", "ossFilePath": "http://test.cn-hangzhou.oss.aliyun-inc.com/5102636f-7be6-4a2d-9ac7-755a2e140a50--robotCallApi.xlsx"}]}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
}
