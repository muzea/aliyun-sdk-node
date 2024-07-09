export interface ListProductByGroupResponse {
    /**
     * msg
     * @example `请求成功`
     */
    Message: string;
    /**
     * requestId
     * @example `123`
     */
    RequestId: string;
    /**
     * data
     * @example `[     {         "classificationProductTypeId":3270,         "classificationProductName":"伏虎测试组",         "classificationProductDesc":"伏虎测试组",         "classificationProductTypeName":"lc-云享咨询",         "id":462,         "enabled":1     } ]`
     */
    Data: string;
    /**
     * code
     * @example `200`
     */
    Code: string;
    /**
     * success
     * @example `true`
     */
    Success: boolean;
}
