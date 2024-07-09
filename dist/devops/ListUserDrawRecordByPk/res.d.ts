export interface ListUserDrawRecordByPkResponse {
    /**
     * 返回结果
     */
    data: {
        /**
         * uccId信息
         * @example `dsadsadasd`
         */
        uccId: string;
        /**
         * 任务组
         * @example `dsadsadsadas`
         */
        drawGroup: string;
        /**
         * 奖池信息
         * @example `dasdsadasdas`
         */
        drawPoolName: string;
        /**
         * 任务组ID
         * @example `null`
         */
        taskGroupId: string;
        /**
         * 阿里云账号ID
         * @example `1401072305438324`
         */
        aliyunPk: string;
        /**
         * 创建时间
         * @example `1545726028000`
         */
        gmtCreate: string;
        /**
         * （抽）奖品结果
         * @example `2`
         */
        drawResult: string;
    }[];
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 描述信息
     * @example `None`
     */
    message: string;
}
