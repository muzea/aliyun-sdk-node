export interface DescribeInstanceResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
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
     */
    Instance: {
        /**
         * 创建时间
         * @example `1578469042851`
         */
        CreationTime: number;
        /**
         * 实例id
         * @example `90515b5-6115-4ccf-83e2-52d5bfaf2ddf`
         */
        InstanceId: string;
        /**
         * 创建者id
         * @example `435986`
         */
        CreatorId: number;
        /**
         * 实例拥有者名字
         * @example `xxxx`
         */
        OwnerName: string;
        /**
         * 实例描述
         * @example `这个是第一个实例`
         */
        InstanceDescription: string;
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
         * 资源组id
         * @example `90515b5-6115-4ccf-83e2-52d5bfaf2ddf`
         */
        ResourceGroupId: string;
        /**
         * 实例最大并发
         * @example `4`
         */
        MaxConcurrentConversation: number;
    };
}
