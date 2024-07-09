export interface CreateSprintRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * 迭代名称
         * @example `示例迭代`
         */
        name: string;
        /**
         * 项目id，和projectId意义相同
         * @example `asd345xxxxx9q9845xxxxx34`
         */
        spaceIdentifier: string;
        /**
         * 开始时间
         * @example `2021-12-01`
         */
        startDate: string;
        /**
         * 结束时间
         * @example `2021-12-02`
         */
        endDate: string;
        /**
         * 负责人列表
         */
        staffIds: string[];
    };
}
