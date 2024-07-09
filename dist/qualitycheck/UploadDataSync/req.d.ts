export interface UploadDataSyncRequest {
    /**
     * jsonStr是一个JSON字符串，里面是该接口所有的自定义参数，具体内容参见下方的**jsonStr属性说明**。
     * @example `{"tickets":xxx}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
