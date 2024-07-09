export interface RecordPostBackRequest {
    /**
     * 业务类型
     * @example `esp.zhangsan`
     */
    "bizType": string;
    /**
     * 业务id，需求单或服务单业务id
     * @example `P111111111111`
     */
    "bizId": string;
    /**
     * 沟通人姓名（中文）
     * @example `张雯菲`
     */
    "contactor": string;
    /**
     * 沟通内容
     * @example `联系客户一次`
     */
    "content": string;
    /**
     * 实体类型，明确操作的是服务单还是需求单
     * @example `esp_produce`
     */
    "entityKey": string;
}
