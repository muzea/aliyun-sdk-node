export interface SaveAnnotationMissionSessionListResponse {
    /**
     * 是否调用成功。true：表示调用成功。                                 false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
     * @example `执行失败:查找元素或操作超时,outTaskId:trademark_regnew_public_cn-zz4310rp1lb,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 是否成功
         * @example `true`
         */
        Success: boolean;
        /**
         * 接口提示信息
         * @example `执行失败:查找元素或操作超时,outTaskId:trademark_regnew_public_cn-zz4310rp1lb,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821`
         */
        Message: string;
        /**
         * 请求结果
         */
        SaveAnnotationMissionSessionListRequest: {
            /**
             * 审批申请的脚本内容
             * @example `[]`
             */
            AnnotationMissionSessionListJsonString: string;
        };
        /**
         * 信息列表
         */
        MessageList: string[];
    };
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `76E93048-F90F-57B7-BD46-6097611A706D`
     */
    RequestId: string;
}
