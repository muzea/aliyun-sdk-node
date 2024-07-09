export interface GetWorkitemAttachmentCreatemetaRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 工作项id，同workItemId，工作项唯一标识
     * @example `11234455454355`
     */
    "workitemIdentifier": string;
    /**
     * 需要上传的文件完整名称
     * @example `application.jar`
     */
    "fileName": string;
}
