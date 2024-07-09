export interface UploadDataV4Request {
    /**
     * jsonStr是一个JSON字符串，里面是该接口所有的自定义参数，具体内容参见下方的jsonStr属性说明。
     * @example `xxx`
     */
    "JsonStr": string;
    /**
     * 业务空间Id，用于区分多业务空间场景下选择指定业务空间，默认为默认业务空间。
     * @example `123456`
     */
    "BaseMeAgentId"?: number;
}
