export interface ListUserDefineRegionResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    UserDefineRegionList: {
        /**
         * 命名空间列表。
         */
        UserDefineRegionEntity: {
            /**
             * 隶属的物理地域ID。
             * @example `cn-shenzhen`
             */
            BelongRegion: string;
            /**
             * 命名空间名称。
             * @example `betaappManager`
             */
            RegionName: string;
            /**
             * 命名空间描述信息。
             * @example `betaappManager`
             */
            Description: string;
            /**
             * 是否允许远程调试。
             * @example `false`
             */
            DebugEnable: boolean;
            /**
             * 用户主账号ID。
             * @example `edas_****_test@aliyun-****.com`
             */
            UserId: string;
            /**
             * 唯一标识。
             * @example `1330`
             */
            Id: number;
            /**
             * 命名空间ID。
             * > 创建后不可变，格式为`物理地域ID：逻辑地域标识符`。
             * @example `cn-shenzhen:betaappManager`
             */
            RegionId: string;
            /**
             * 注册中心类型：
             * * default：EDAS共享注册中心。
             * * exclusive_mse：MSE Nacos注册中心。
             * @example `default：EDAS`
             */
            MseInstanceId: string;
            /**
             * MSE注册中心实例ID。
             * @example `mse_prepaid_public_cn-tl32n******`
             */
            RegistryType: string;
        }[];
    };
}
