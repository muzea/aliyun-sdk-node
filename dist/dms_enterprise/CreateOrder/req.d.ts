export interface CreateOrderRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 输入工单描述信息。
     * @example `test`
     */
    "Comment": string;
    /**
     * 创建工单参数，格式为JSON形式的字符串。每个工单类型的参数设置不一致，详情请参见表格下方的**PluginParam参数补充说明**。
     * @example `{PluginParam_test}`
     */
    "PluginParam": any;
    /**
     * 工单相关人用户ID列表，多个相关人用半角逗号（,）隔开。
     * @example `user1,user2`
     */
    "RelatedUserList"?: string;
    /**
     * 工单类型，取值请参见[PluginType参数说明](~~429109~~)。
     * @example `DATA_EXPORT`
     */
    "PluginType": string;
    /**
     * 上传附件成功后返回的附件Key，可通过调用接口[GetUserUploadFileJob](~~206069~~)获取该参数的值。
     * @example `test_AttachmentKey`
     */
    "AttachmentKey"?: string;
}
