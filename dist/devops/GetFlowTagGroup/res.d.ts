export interface GetFlowTagGroupResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true 接口调用成功，false 接口调用失败`
     */
    success: boolean;
    /**
     * 错误码
     * @example `”“`
     */
    errorCode: string;
    /**
     * 标签分类
     */
    flowTagGroup: {
        /**
         * 标签分类id
         * @example `1111`
         */
        id: number;
        /**
         * 标签分类名称
         * @example `标签分类名称`
         */
        name: string;
        /**
         * 创建人
         * @example `1111111111111`
         */
        creatorAccountId: string;
        /**
         * 更新人
         * @example `1111111111111`
         */
        modiferAccountId: string;
        /**
         * 标签列表
         */
        flowTagList: {
            /**
             * 标签id
             * @example `111`
             */
            id: number;
            /**
             * 标签名称
             * @example `标签名称`
             */
            name: string;
            /**
             * 标签颜色
             * @example `#1F9AEF`
             */
            color: string;
            /**
             * 创建人
             * @example `1111111111111`
             */
            creatorAccountId: string;
            /**
             * 更新人
             * @example `1111111111111`
             */
            modiferAccountId: string;
        }[];
    };
}
