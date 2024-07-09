export interface UpdateWorkitemFieldRequest {
    /**
     * 企业id
     * @example `60ee8a814690c27532d412f8`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 工作项id，同workitemId，工作项唯一标识
         * @example `9144ef6b72d8exxxxx9e61a4d0`
         */
        workitemIdentifier: string;
        /**
         * 更新工作项属性请求，数组形式
         */
        updateWorkitemPropertyRequest: {
            /**
             * 需要更新的工作项字段id，可以从获取工作项所有字段接口获取相应的数据
             * @example `tag`
             */
            fieldIdentifier: string;
            /**
             * 需要更新字段的属性值 (注：1.如果是人员类型的值必须要填写aliyunPK。2.如果是含有待选值的字段，填写相应的待选值的id。 3.如果多个值，需要用" , "进行分割，拼接成一个字符串。
             * @example `个人属性`
             */
            fieldValue: string;
        }[];
    };
}
