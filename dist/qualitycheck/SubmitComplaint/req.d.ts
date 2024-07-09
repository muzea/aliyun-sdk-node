export interface SubmitComplaintRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{"taskId":"ADCA1DE6-8117-472A-B3A1-352A248F90D0","fileId":"653e563d-774f-4f01-a809-cb8bb920c3e6","rid":1346,"comments":"请重新判定"}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
