export interface ListQueryResultRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * query 语句
     * @example `query%3D1%26%26config%3Dstart%3A0%2Chit%3A10%2Cformat%3Ajson%26%26cluster%3Dgeneral`
     */
    "query"?: string;
    /**
     * SQL语句。
     * @example `query%3Dselect%20max(content_id)%20from%20generation`
     */
    "sql"?: string;
}
