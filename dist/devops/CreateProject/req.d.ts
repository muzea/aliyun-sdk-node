export interface CreateProjectRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https:
     * //devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 项目模板id，可以从前端的项目模板列表页获取，前端接口：
         * https://
         * devops.aliyun.com/projex/api/workspace/template/setting/corp/listSpaceTemplatesForCreate?category=Project&_input_charset=utf-8。
         * 取值identifier: "704eaxxxx5efede61xxx5",
         * @example `704eaxxxx5efede61xxx5`
         */
        templateIdentifier: string;
        /**
         * 项目名称
         * @example `name`
         */
        name: string;
        /**
         * 公开：public
         * 私有：private
         * @example `public`
         */
        scope: string;
        /**
         * 项目编号，四到六位大写字母，企业下唯一
         * @example `ABCD`
         */
        customCode: string;
    };
}
