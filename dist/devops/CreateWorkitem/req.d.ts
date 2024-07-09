export interface CreateWorkitemRequest {
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
         * 工作项标题
         * @example `测试工作项`
         */
        subject: string;
        /**
         * 工作项内容
         * @example `测试内容`
         */
        description: string;
        /**
         * 内容格式，支持RICHTEXT和MARKDOWN格式，默认为RICHTEXT
         * @example `RICHTEXT`
         */
        descriptionFormat: string;
        /**
         * 工作项负责人的id，或者企业中的用户名
         * @example `19xxxx31947xxxx`
         */
        assignedTo: string;
        /**
         * 项目ID唯一标识，同projectId
         * @example `asd345xxxxx9q9845xxxxx34`
         */
        space: string;
        /**
         * 同space字段，项目ID唯一标识
         * @example `asd345xxxxx9q9845xxxxx34`
         */
        spaceIdentifier: string;
        /**
         * 资源类型
         * @example `Project`
         */
        spaceType: string;
        /**
         * 工作项的类型id，比如：Bug、Task对应id
         * @example `Req`
         */
        category: string;
        /**
         * 工作项小类型id
         * @example `9uyxxxxxre573f561dxxn40`
         */
        workitemType: string;
        /**
         * 自定义字段
         */
        fieldValueList: {
            /**
             * 字段唯一标识，优先级字段必填
             * @example `6aexxxxxa1d98c09c60xxxx16`
             */
            fieldIdentifier: string;
            /**
             * 字段值，写入时使用。优先级字段必填
             * @example `77c7fb03c4186c8691d6...`
             */
            value: string;
            /**
             * 工作项的唯一标识，暂用不到
             * @example `null`
             */
            workitemIdentifier: string;
        }[];
        /**
         * 要关联迭代
         */
        sprint: string[];
        /**
         * 抄送人account id
         */
        tracker: string[];
        /**
         * 参与人account id
         */
        participant: string[];
        /**
         * 验证者的account id
         */
        verifier: string[];
        /**
         * 父项工作项唯一标识
         * @example `3a0c9cdd24ae1e1995b8...`
         */
        parent: string;
    };
}
