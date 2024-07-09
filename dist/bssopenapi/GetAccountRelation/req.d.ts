export interface GetAccountRelationRequest {
    /**
     * 账号关联id
     * @example `AddAccountRelation接口返回值`
     */
    "RelationId"?: number;
    /**
     * 请求唯一标识，用于标记一次请求，便于定位问题
     * @example `requestId`
     */
    "RequestId"?: string;
}
