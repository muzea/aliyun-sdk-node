export interface ListTestCaseFieldsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https:
     * //devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 测试用例库id，测试用例库唯一标识
     * @example `e8bxxxxxxxxxxxxxxxx23`
     */
    "spaceIdentifier": string;
}
