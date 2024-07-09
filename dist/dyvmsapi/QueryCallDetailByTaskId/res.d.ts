export interface QueryCallDetailByTaskIdResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 机器人外呼任务的话单详情，JSON格式。参数包括：
     * - **startDate**：应答时间。
     * - **stateDesc**：挂机原因，有早媒体状态码的情况下，使用早媒体码的原因。
     * - **statusCode**：状态码。
     * - **endDate**：结束时间。
     * - **calleeShowNumber**：主叫号显。
     * - **callee**：被叫号码。
     * - **duration**：计费时长。
     * - **gmtCreate**：创建时间。
     * - **hangupDirection**：挂机方向。
     * - **tags**：标签。
     * - **dialogCount**：对话轮次。
     * - **sureCount**：肯定次数。
     * - **denyCount**：否定次数。
     * - **rejectCount**：拒绝次数。
     * - **customCount**：自定义次数。
     * - **knowledgeCount**：知识库次数。
     * - **recordFile**：录音文件下载地址，URL的过期时间为48小时，请及时下载。
     * - **callId**：通话ID。
     * - **recordStatus**：录音文件状态。其中：
     *     - 1：有录音文件。
     *     - 2：没有录音文件。
     * - **knowledgeCommonCount**：知识库通用问题字数。
     * - **knowledgeBusinessCount**：知识库业务问题字数。
     * - **callee**：被叫号码。
     * - **dialogDetail**：对话明细，一个JSON数组。其中包括：
     *     - **role**：发言对象。
     *     - **content**：发言内容。
     *     - **time**：发言时间。
     * > 返回字段供参考，具体字段以实际返回参数为准。
     * @example `{"rejectCount":0,"dialogCount":3,"tags":"","startDate":"2019-03-27 10:34:54","gmtCreate":"2019-03-27 10:34:40","sureCount":0,"state":"200000","recordFile":"http://alicom-fc-record-biz.cn-hangzhou.oss.aliyun-inc.com/Freeswitch_RU_115987800002_02c3554f-ea24-422d-b1de-e671f455f21a_record.wav?OSSAccessKeyId=bypFNbGJVk73****&Signature=VWHOX%2FFhvvtSkxfMTw%2F5fdJUQuk%3D&Expires=1554382725","defaultCount":0,"endDate":"2019-03-27 10:35:09","calleeShowNumber":"1390000****","customCount":0,"callId":"1390000****","knowledgeCount":0,"recordStatus":1,"denyCount":0,"duration":16,"knowledgeCommonCount":0,"callee":"1390000****","knowledgeBusinessCount":0,"hangupDirection":1}
    `
     */
    Data: string;
    /**
     * 请求ID。
     * @example `D86B61A8-F2EE-4E4C-9F05-08A4676FFD89`
     */
    RequestId: string;
}
