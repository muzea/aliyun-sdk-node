export interface ListDdTaskOrderResponse {
    /**
     * msg
     * @example `请求成功`
     */
    Message: string;
    /**
     * requestId
     * @example `2F8557E4-742B-1CF7-8E83-28CD0C1F7B48`
     */
    RequestId: string;
    /**
     * data
     * @example `[     {         "wfNodeId":"dealingNode",         "createEmpId":null,         "createTime":1637571435000,         "orderId":"E2111221H1UKCZ",         "isImportant":"normal",         "closeTime":null,         "taskTitle":"测试单16点44",         "productType":"3270"     } ]`
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
