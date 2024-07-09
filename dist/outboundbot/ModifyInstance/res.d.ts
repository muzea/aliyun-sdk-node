export interface ModifyInstanceResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 实例信息
     * @example `{'InstanceId': 'ob369xifpi2074', 'AutoUpgradeObVersion': False}`
     */
    Instance: {
        /**
         * 创建时间
         * @example `1578469042851`
         */
        CreationTime: number;
        /**
         * 实例名字
         * @example `第一个实例`
         */
        InstanceName: string;
        /**
         * 创建者名字
         * @example `xxx`
         */
        CreatorName: string;
        /**
         * 最大并发
         * @example `5`
         */
        MaxConcurrentConversation: number;
        /**
         * 所有者名字
         * @example `xxx`
         */
        OwnerName: string;
        /**
         * 创建者id
         * @example `123123`
         */
        CreatorId: number;
        /**
         * 实例id
         * @example `90515b5-6115-4ccf-83e2-52d5bfaf2ddf`
         */
        InstanceId: string;
        /**
         * 实例描述
         * @example `这是第一个实例`
         */
        InstanceDescription: string;
    };
}
