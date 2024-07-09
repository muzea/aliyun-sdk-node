export interface AddMsConfigResourcesResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 创建成功的资源信息
     */
    Resource: {
        /**
         * 应用名
         * @example `drmdemo`
         */
        AppName: string;
        /**
         * 资源所属的域
         * @example `Alipay`
         */
        Region: string;
        /**
         * 实例 ID
         * @example `abcdEFGH1234`
         */
        InstanceId: string;
        /**
         * 资源 ID
         * @example `com.alipay.drmResource`
         */
        ResourceId: string;
        /**
         * 资源自增长 ID
         * @example `1`
         */
        Id: number;
        /**
         * 资源描述信息
         * @example `活动开关`
         */
        Desc: string;
        /**
         * 属性列表
         */
        Attributes: {
            /**
             * 实例 ID
             * @example `abcdEFGH1234`
             */
            InstanceId: string;
            /**
             * 属性名
             * @example `switch`
             */
            AttributeName: string;
            /**
             * 属性 ID
             * @example `1`
             */
            Id: number;
            /**
             * 属性描述信息
             * @example `活动开关`
             */
            Desc: string;
        }[];
    };
}
