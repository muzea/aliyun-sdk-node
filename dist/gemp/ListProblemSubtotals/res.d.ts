export interface ListProblemSubtotalsResponse {
    /**
     * Id of the request
     * @example `4361a0e1-6747-4834-96ce-0S4840fd3812`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 描述
         * @example `小计内容`
         */
        description: string;
        /**
         * 创建时间
         * @example `2020-10-02 00:00:00`
         */
        createTime: string;
        /**
         * 操作人
         * @example `小明`
         */
        createRamName: string;
        /**
         * 操作人手机号
         * @example `130****11111`
         */
        createUserPhone: string;
        /**
         * 人员id
         * @example `123123`
         */
        createUserId: number;
    }[];
}
