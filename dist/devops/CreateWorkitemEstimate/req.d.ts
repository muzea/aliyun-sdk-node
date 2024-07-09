export interface CreateWorkitemEstimateRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 工作项id，同workitemId
         * @example `1e9903d8b3f1xxxxxf9286ef5`
         */
        workitemIdentifier: string;
        /**
         * 花费工时，最大为9999
         * @example `21`
         */
        spentTime: string;
        /**
         * 工时类型，通过获得工时类型接口来获取，值为每一个类型的identifier
         * @example `9144ef6b72d8exxxxx9e61a4d0
        `
         */
        type: string;
        /**
         * 描述
         * @example `描述信息`
         */
        description: string;
        /**
         * 登记人,为用户的aliyunPk
         * @example `1316458xxxxx41068`
         */
        recordUserIdentifier: string;
    };
}
