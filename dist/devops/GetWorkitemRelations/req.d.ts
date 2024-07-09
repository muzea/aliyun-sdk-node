export interface GetWorkitemRelationsRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemidentifier，工作项唯一标识
     * @example `8876ad01xxxxx65d9710b2631`
     */
    "workitemId": string;
    /**
     * 一共有BLOCKING，BLOCKED，ASSOCIATED， DUPLICATED，SUB， PARENT，一共6个待选值，只会获得工作项类型的关系项
     * @example `一共有BLOCKING，BLOCKED，ASSOCIATED， DUPLICATED，SUB， PARENT，一共6个待选值，只会获得工作项类型的关系项`
     */
    "relationType": string;
}
