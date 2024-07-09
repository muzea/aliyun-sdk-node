export interface QueryTaskInfoResponse {
    /**
     * 接口请求描述
     * @example `ok`
     */
    Message: string;
    /**
     * 接口交互id
     * @example `43135C31-E47A-5AD7-A693-6DC635201CE4`
     */
    RequestId: string;
    /**
     * 任务单详情数据
     * @example `{"taskStatus": "dealingNode","eid": "E21111796147LE",[{{         "senderId": null,         "msgType": "template",         "msgContent": "{\"title\":\"小二回复\",\"text\": \"小二回复 \\n\\n ###### <font color=#13c2c2>Current handler:王龙</font> \"}",         "groupId": "cidXcezGVQJjiWy2PzXylGwvg==",         "msgId": null,         "id": 27623677,         "senderNick": "阿里云服务台",         "gmtCreate": 1637138037000,         "class": "com.aliyun.dingtalklanding.dto.ChatRecordDTO",         "sendTime": 1637138037000,         "senderRole": null       }}]}`
     */
    Data: {
        /**
         * 任务单EID
         * @example `E220303AE1BYY3`
         */
        OrderId: string;
        /**
         * 任务状态
         * @example `dealingNode`
         */
        TaskStatus: string;
    };
    /**
     * 状态值
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求是否成功
     * @example `true`
     */
    Success: boolean;
}
