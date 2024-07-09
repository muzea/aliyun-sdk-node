export interface UpdateWorkItemRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 更新的信息
     */
    "body"?: {
        /**
         * 要更新的字段identifier，可以从ListWorkItemAllFields获取。当值设置为description时，fieldType可以设置描述的格式，默认是RICHTEXT，支持RICHTEXT和MARKDOWN
         * @example `subject`
         */
        propertyKey: string;
        /**
         * 更新后的值
         * @example `newValue`
         */
        propertyValue: string;
        /**
         * 工作项id，同workitemIdentifier，workitemId字段，工作项唯一标识
         * @example `e8b2xxxxxx2abdxxxxxxxx23`
         */
        identifier: string;
        /**
         * 更新字段的类型，subject代表修改标题;  status代表修改是状态字段 ；document代表的是修改描述字段；user代表的是修改用户类型字段（包括负责人、参与人等用户类型的字段）；customField代表的是自定义字段 ；其中user对应的propertykey对应有三种workitem.tracke/ ak.issue.member/assignedTo ; customField字段类型中property值需要通过ListWorkItemAllFields来获取type类型为customField对应的identifier，其余的propertykey和Fieldtype是一样的。
         * 当propertyKey为description时，该值可以设置对应描述的格式，支持RICHTEXT和MARKDOWN
         * @example `subject`
         */
        fieldType: string;
    };
}
