export interface InsertOrUpdateRegionRequest {
    /**
     * 命名空间ID：
     * - 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：cn-beijing:tdy218。
     * - 默认命名空间ID格式为：`地域ID`，例如：cn-beijing。
     * @example `cn-beijing:test`
     */
    "RegionTag": string;
    /**
     * 命名空间名称，长度不超过63个字符。
     * @example `test_region`
     */
    "RegionName": string;
    /**
     * 命名空间描述，长度不超过128个字符。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 参数为空或ID为0时表示创建命名空间，其他情况表示编辑。
     * @example `0`
     */
    "Id"?: number;
    /**
     * 是否允许进行远程调试：
     * - true：允许。
     * - false：不允许。
     * @example `true`
     */
    "DebugEnable"?: boolean;
    /**
     * 注册中心类型：
     * - default：EDAS共享注册中心。
     * - exclusive_mse：MSE Nacos注册中心。
     * @example `default`
     */
    "RegistryType"?: string;
    /**
     * MSE注册中心实例ID。
     * @example `mse_prepaid_public_cn-tl32n******`
     */
    "MseInstanceId"?: string;
}
