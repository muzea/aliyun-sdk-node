export interface QueryRawDataRequest {
    /**
     * 实例ID。
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 智能推荐表名（item/user）
     * @example `item`
     */
    "table": string;
    /**
     * table 为 item 时必选
     * @example `112`
     */
    "itemId"?: string;
    /**
     * table 为 item 时必选
     * @example `video`
     */
    "itemType"?: string;
    /**
     * table 为 user 时必选
     * @example `111`
     */
    "userId"?: string;
    /**
     * table 为 user 时必选
     * @example `app`
     */
    "userType"?: string;
    "imei"?: string;
}
