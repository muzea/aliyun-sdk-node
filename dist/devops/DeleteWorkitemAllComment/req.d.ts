export interface DeleteWorkitemAllCommentRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemId，workitemIdentifier，工作项唯一标识
     * @example `deafe5f33xxxxx6a259d8dafd`
     */
    "identifier": string;
}
