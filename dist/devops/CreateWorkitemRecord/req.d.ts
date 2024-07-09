export interface CreateWorkitemRecordRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `1e9903d8b3f1xxxxxf9286ef5`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 工作项id，即workitemId
         * @example `9144ef6b72d8exxxxx9e61a4d0`
         */
        workitemIdentifier: string;
        /**
         * 花费工时，最大为9999
         * @example `12`
         */
        actualTime: string;
        /**
         * 类型，从获取工时类型接口获取
         * @example `deafe5f33xxxxx6a259d8dafd`
         */
        type: string;
        /**
         * 描述
         * @example `测试内容`
         */
        description: string;
        /**
         * 登记人,为用户的aliyunPk
         * @example `1316458xxxxx41068`
         */
        recordUserIdentifier: string;
        /**
         * 开始时间
         * @example `1667205617061`
         */
        gmtStart: string;
        /**
         * 结束时间，开始时间不能大于结束时间
         * @example `1646323200000`
         */
        gmtEnd: string;
    };
}
