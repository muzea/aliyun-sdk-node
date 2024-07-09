export interface DeleteWorkitemRequest {
    /**
     * 企业id
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemIdentifier，workitemId，工作项唯一标识
     * @example `3ef2ef6018d254d660e65f87a6`
     */
    "identifier": string;
}
