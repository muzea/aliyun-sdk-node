export interface ListIncidentSubtotalsResponse {
    /**
     * Id of the request
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 描述
         * @example `小计描述`
         */
        description: string;
        /**
         * 创建时间
         * @example `2021-06-23 00:00:00`
         */
        createTime: string;
        /**
         * 操作人
         * @example `小明`
         */
        createUserName: string;
        /**
         * 操作人手机号
         * @example `130****1111`
         */
        createUserPhone: string;
        /**
         * 操作人Id
         * @example `12312`
         */
        createUserId: number;
    }[];
}
