export interface CreateApiDestinationResponse {
    /**
     * 请求ID。
     * @example `5DAF96FB-A4B6-548C-B999-0BFDCB22****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回创建API端点成功数据结构。
     */
    Date: {
        /**
         * API 端点名称。
         * @example `ApiDestinationName`
         */
        ApiDestinationName: string;
    };
}
