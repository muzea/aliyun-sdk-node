export interface AddCardToDirectionalGroupRequest {
    /**
     * 卡号的iccid集合，数量小于等于200
     */
    "IccidList": string[];
    /**
     * 分组ID。
     * @example `10000002595`
     */
    "GroupId": string;
    /**
     * 请求编号，支持幂等。
     * @example `123123`
     */
    "SerialNo": string;
    /**
     * 添加的方式：
     * NEW：仅导入其中待分组的卡
     * TRANSFER：全量导入（卡从原分组中删除）
     * @example `NEW`
     */
    "AddType": string;
    /**
     * 执行成功后是否通过MQ推送，默认false：
     * false：不推送
     * true： 推送
     * @example `false`
     */
    "MsgNotify"?: boolean;
    /**
     * Linkcard
     * @example `Linkcard`
     */
    "ApiProduct"?: string;
}
