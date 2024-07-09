export interface DeleteVerifyResultRequest {
    /**
     * 认证请求的唯一标识
     * @example `4ab0b***cbde97`
     */
    "TransactionId"?: string;
    /**
     * 删除数据时是否依赖查询接口
     * @example `Y / N`
     */
    "DeleteAfterQuery"?: string;
    /**
     * 删除数据的类型
     * @example `Img / Text / All`
     */
    "DeleteType"?: string;
}
