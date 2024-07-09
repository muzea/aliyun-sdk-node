export interface GetWorkitemCommentListRequest {
    /**
     * 企业号
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemIdentifier，工作项唯一标识
     * @example `ce2xxxx21580baxxxx633f13`
     */
    "workitemId": string;
}
