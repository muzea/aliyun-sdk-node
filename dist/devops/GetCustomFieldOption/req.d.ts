export interface GetCustomFieldOptionRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 项目id，同projectId，项目唯一标识
     * @example `e8bxxxxxxxxxxxxxxxx23`
     */
    "spaceIdentifier": string;
    /**
     * 资源类型，目前默认为Project
     * @example `Project`
     */
    "spaceType": string;
    /**
     * 工作项类型id，可以从ListProjectWorkitemTypes接口获取，对应identifier字段。
     * @example `9uyxxxx1re573f561dxxxxx`
     */
    "workitemTypeIdentifier": string;
    /**
     * 字段id
     * @example `1019xxxxx5f5c33xxxxx9920d44`
     */
    "fieldId": string;
}
