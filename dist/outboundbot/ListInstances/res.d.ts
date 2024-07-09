export interface ListInstancesResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态
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
     * 实例列表
     */
    Instances: {
        /**
         * 创建时间
         * @example `	1578469042851`
         */
        CreationTime: number;
        /**
         * 实例id
         * @example `90515b5-6115-4ccf-83e2-52d5bfaf2ddf`
         */
        InstanceId: string;
        /**
         * 主账号名称
         * @example `xxx`
         */
        OwnerName: string;
        /**
         * 创建者id
         * @example `34234`
         */
        CreatorId: number;
        /**
         * 智能外呼实例描述
         * @example `这是一个实例`
         */
        InstanceDescription: string;
        /**
         * 智能外呼实例名称
         * @example `回访`
         */
        InstanceName: string;
        /**
         * 资源组id
         * @example `90515b5-6115-4ccf-83e2-52d5bfaf2ddf`
         */
        ResourceGroupId: string;
        /**
         * 创建者姓名
         * @example `xxx`
         */
        CreatorName: string;
        /**
         * 最大允许的外呼并发数量
         * @example `10`
         */
        MaxConcurrentConversation: number;
        /**
         * 标签信息
         * @example `[]`
         */
        ResourceTags: {
            /**
             * 标签key
             * @example `age`
             */
            Key: string;
            /**
             * 标签值
             * @example `20`
             */
            Value: string;
        }[];
        /**
         * 是否是预置实例
         * @example `false`
         */
        IsPreset: boolean;
    }[];
    TotalCount: number;
    PageNumber: number;
    PageSize: number;
}
