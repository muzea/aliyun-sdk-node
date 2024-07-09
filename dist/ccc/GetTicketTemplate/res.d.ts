export interface GetTicketTemplateResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 模板ID。
         * @example `4ca2e2-c8d19b82c-d7ce393ac8197d3ab
        `
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `测试模板。
        
        `
         */
        Name: string;
        /**
         * 状态码。
         * @example `Enabled`
         */
        State: string;
        /**
         * 模板编辑人。
         * @example `editor-xxx@ccc-test`
         */
        Editor: string;
        /**
         * 工单类目ID。
         * @example `43c2671b-****-4223-86d0-6bd187905cc8`
         */
        CategoryId: string;
        /**
         * 模板字段列表。
         */
        TicketFields: {
            /**
             * 显示名称。
             * @example `姓名`
             */
            DisplayName: string;
            /**
             * 描述。
             * @example `姓名描述`
             */
            Description: string;
            /**
             * 名称。
             * @example `name`
             */
            Name: string;
            /**
             * 数据类型
             * 。
             * @example `string`
             */
            DataType: string;
            /**
             * 正则表达式校验规则。
             * @example `^`
             */
            Pattern: string;
            /**
             * 正则表达式校验错误提示信息。
             * @example `不是有效的email地址
            `
             */
            PatternErrorMessage: string;
            /**
             * 最小长度。
             * @example `1`
             */
            MinLength: number;
            /**
             * 最大长度。
             * @example `30`
             */
            MaxLength: number;
            /**
             * 数字最小值。
             * @example `1`
             */
            Minimum: number;
            /**
             * 数字最大值。
             * @example `10`
             */
            Maximum: number;
            /**
             * 是否必填。
             * @example `false`
             */
            Required: boolean;
            /**
             * 是否是系统字段。
             * @example `false`
             */
            System: boolean;
            /**
             * 是否被禁用。
             * @example `false`
             */
            Disabled: boolean;
            /**
             * 是否是数组。
             * @example `false`
             */
            Array: boolean;
            /**
             * 是否只读。
             * @example `false`
             */
            ReadOnly: boolean;
            /**
             * 编辑器类型。
             * @example `textbox`
             */
            EditorType: string;
            /**
             * 扩展属性。
             * @example `{}`
             */
            Attributes: string;
            /**
             * 列表展示顺序。
             * @example `1`
             */
            DisplayOrder: number;
            /**
             * 创建时间。
             * @example `1717664210000`
             */
            CreatedTime: number;
            /**
             * 更新时间。
             * @example `1717664210000`
             */
            UpdatedTime: number;
            /**
             * 创建者。
             * @example `creator@cccV2-kmz`
             */
            Creator: string;
        }[];
        /**
         * 流程信息。
         * @example `[{\"id\":\"TICKET_START\",\"name\":\"开始\",\"nodeIndex\":0,\"properties\":{\"position\":{\"x\":250,\"y\":200}},\"type\":\"TICKET_START\",\"events\":[{\"edgeId\":\"8bd07339\",\"sourceAnchor\":0,\"next\":\"APPROVAL__JNBSSREc\",\"targetAnchor\":0}]},{\"id\":\"TICKET_FINISH\",\"name\":\"结束\",\"nodeIndex\":9999,\"properties\":{\"position\":{\"x\":767,\"y\":206}},\"type\":\"TICKET_FINISH\",\"events\":[]},{\"id\":\"APPROVAL__JNBSSREc\",\"name\":\"流程节点\",\"nodeIndex\":1,\"properties\":{\"skillGroupId\":\"chat001@cccV2-kmz\",\"position\":{\"x\":537,\"y\":164.5}},\"type\":\"APPROVAL\",\"events\":[{\"edgeId\":\"74031613\",\"sourceAnchor\":1,\"next\":\"TICKET_FINISH\",\"targetAnchor\":0}]}]`
         */
        ProcessDefinition: string;
        /**
         * 上次修改的时间。
         * @example `1717664210000`
         */
        UpdatedTime: number;
    };
    /**
     * 请求ID。
     * @example `BF268B34-09C2-43FD-BAC4-5D31EA633111`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 错误参数列表。
     */
    Params: string[];
}
