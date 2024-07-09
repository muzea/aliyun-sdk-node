export interface WorkitemAttachmentCreateRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 工作项id，同workitemId，工作项唯一标识
     * @example `11234455454355`
     */
    "workitemIdentifier": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 文件key，对应GetWorkitemAttachmentCreatemeta接口返回的dir值，前提是已经成功上传完文件
         * @example `1106473328927498/1106473328927498/5ec071g0e5ij85fche8cddchje.xlsx`
         */
        fileKey: string;
        /**
         * 上传的文件原始完整名称
         * @example `xxx.tgz`
         */
        originalFilename: string;
    };
}
