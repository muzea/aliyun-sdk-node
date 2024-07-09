export interface RelieveAccountRelationRequest {
    /**
     * 关系类型，目前仅支持enterprise_group
     * @example `enterprise_group`
     */
    "RelationType"?: string;
    /**
     * 主账号的阿里云UID，【parentUserId，childUserId，RelationType】  或者【relationId】必须填写一组
     * @example `1738376485192612`
     */
    "ParentUserId"?: number;
    /**
     * 子账号的阿里云账号UID，【parentUserId，childUserId，RelationType】  或者【relationId】必须填写一组
     * @example `1512996702208737`
     */
    "ChildUserId"?: number;
    /**
     * 请求唯一标识，用于标记一次请求，便于定位问题
     * @example `request_id`
     */
    "RequestId": string;
    /**
     * 账号关联id，【parentUserId，childUserId，RelationType】  或者【relationId】必须填写一组
     * @example `RelationId`
     */
    "RelationId"?: number;
}
