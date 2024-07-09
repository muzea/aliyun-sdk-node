export interface AssociateSmartAGWithApplicationBandwidthPackageRequest {
    /**
     * 是否对此次绑定请求执行预检，包括权限、实例状态校验等。取值：
     * - **false**（默认值）：发送正常请求，通过检查后直接绑定应用加速带宽包和智能接入网关实例。
     * - **true**：发送检查请求，只进行校验，不会绑定应用加速带宽包和智能接入网关实例。检查项包括是否填写了必需参数、请求格式等。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * >若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 应用加速带宽包所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 应用加速带宽包实例ID。
     * @example `abwp-7963l7iqnquyj3****`
     */
    "ApplicationBandwidthPackageId": string;
    /**
     * 待绑定的智能接入网关实例列表。
     */
    "AssociateConfigs": {
        /**
         * 智能接入网关实例ID。
         * @example `sag-gf5serujbhrn2j****`
         */
        SmartAGId: string;
        /**
         * 智能接入网关实例的应用加速带宽峰值。单位：Mbps。
         * > 每个智能接入网关实例的应用加速带宽峰值不能超过其绑定的应用加速带宽包的带宽峰值。
         * @example `2`
         */
        Bandwidth: number;
    }[];
}
