export interface DescribeProjectNodesResponse {
    /**
     * 成功状态标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID
     * @example `937fee1f-26bb-4b6e-8def-977a6bdaa1e5`
     */
    RequestId: string;
    /**
     * 无
     */
    Result: {
        /**
         * 下一个流程节点ID
         * @example `8472`
         */
        NextNodeId: number;
        /**
         * 所属流程节点的序号
         * @example `2`
         */
        StepNo: number;
        /**
         * 节点超时是否自动完成
         * @example `false`
         */
        AutoFinishNode: boolean;
        /**
         * 最终流程节点的序号
         * @example `4`
         */
        FinalStepNo: number;
        /**
         * 上一个流程节点ID
         * @example `8470`
         */
        PreviousNodeId: number;
        /**
         * 父级流程节点ID
         * @example `0`
         */
        ParentNodeId: number;
        /**
         * 流程节点超时时间（Unix时间戳）
         * @example `1588834325000`
         */
        GmtExpired: number;
        /**
         * 流程节点操作人角色，取值：
         * - System：系统
         * - Custom：客户
         * - Provider：服务提供商
         * @example `System`
         */
        OperatorRole: string;
        /**
         * 流程节点开始时间（Unix时间戳）
         * @example `1588834325000`
         */
        GmtStart: number;
        /**
         * 节点执行状态，取值：
         * - NotStart：未开始
         * - Starting：进行中
         * - Cancel：已取消
         * - Finish：已完成
         * @example `Finish`
         */
        NodeStatus: string;
        /**
         * 节点名称
         * @example `分配服务商节点`
         */
        NodeName: string;
        /**
         * 流程节点完成时间（Unix时间戳）
         * @example `1588834325000`
         */
        GmtFinished: number;
        /**
         * 是否允许执行回滚到上一个流程节点
         * @example `false`
         */
        AllowRollbackNode: boolean;
        /**
         * 流程节点表单内容，内容为JSON。
         * 示例代码如下：
         * ```
         * [
         *     {
         *         "fieldKey": "TFD0", //表单key
         *         "isRequired": true, //是否必填项
         *         "maxLength": 50, //最大值长度
         *         "placeHolder": "姓名", //表单值简介
         *         "stepNum": 0, //排序值（升序）
         *         "title": "收货人姓名", //表单标题
         *         "type": "text" //表单类型
         *     },
         *     {
         *         "fieldKey": "TFD1",
         *         "isRequired": true,
         *         "maxLength": 50,
         *         "placeHolder": "手机号码",
         *         "stepNum": 1,
         *         "title": "收货人电话",
         *         "type": "text"
         *     },
         *     {
         *         "fieldKey": "TFD2",
         *         "isRequired": true,
         *         "maxLength": 50,
         *         "placeHolder": "省市区街道门牌号码",
         *         "stepNum": 2,
         *         "title": "详细收货地址",
         *         "type": "textarea"
         *     }
         * ]
         * ```
         * @example `[ {"fieldKey": "TFD0","isRequired": true,"maxLength": 50, "placeHolder": "姓名","stepNum": 0,"title": "收货人姓名","type": "text" },{ "fieldKey": "TFD1","isRequired": true,"maxLength": 50,"placeHolder": "手机号码","stepNum": 1,"title": "收货人电话","type": "text"},{"fieldKey": "TFD2","isRequired": true,"maxLength": 50,"placeHolder": "省市区街道门牌号码","stepNum": 2,"title": "详细收货地址","type": "textarea"}]`
         */
        TemplateForm: string;
        /**
         * 是否强制要求上传附件
         * @example `false`
         */
        NeedAttachment: boolean;
        /**
         * 流程节点ID
         * @example `8471`
         */
        NodeId: number;
    }[];
}
