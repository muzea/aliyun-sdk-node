export interface CreateAnnotationMissionResponse {
    /**
     * 是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
     * @example `执行失败:查找元素或操作超时,outTaskId:trademark_regnew_public_cn-uax33hol2uu,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 是否成功
         * @example `True`
         */
        Success: boolean;
        /**
         * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
         * @example `执行失败:查找元素或操作超时,outTaskId:trademark_regnew_public_cn-uax33hol2uu,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821`
         */
        Message: string;
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
