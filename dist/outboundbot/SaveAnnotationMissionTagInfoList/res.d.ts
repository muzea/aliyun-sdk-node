export interface SaveAnnotationMissionTagInfoListResponse {
    /**
     * 是否调用成功。true：表示调用成功。false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `执行失败:查找元素或操作超时,outTaskId:trademark_regnew_public_cn-uax33hol2uu,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821`
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
         * 执行成功的数量
         * @example `1`
         */
        ExecCount: number;
        /**
         * 接口提示信息
         * @example `执行失败:查找元素或操作超时,outTaskId:trademark_regnew_public_cn-uax33hol2uu,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821`
         */
        Message: string;
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `1B356EDC-F69A-53B0-B4AF-2AC42200684E`
     */
    RequestId: string;
}
