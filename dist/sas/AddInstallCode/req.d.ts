export interface AddInstallCodeRequest {
    /**
     * 指定需要资产绑定的分组ID。
     * >调用[DescribeAllGroups ](~~DescribeAllGroups~~)接口可以获取该参数。
     * @example `8076980`
     */
    "GroupId"?: number;
    /**
     * 实例的操作系统。默认值为**linux**。取值：
     * - **linux**：linux
     * - **windows**：windows
     * - **windows-2003**：windows-2003
     * @example `linux`
     */
    "Os"?: string;
    /**
     * 安装验证码有效日期。格式为13位时间戳。
     * >安装验证码只有在有效期内才能使用。过期的安装验证码无法使用。
     * @example `1680257463853`
     */
    "ExpiredDate"?: number;
    /**
     * 资产的服务商名称，默认**ALIYUN**。
     * >调用[DescribeVendorList](~~DescribeVendorList~~)接口可以获取该参数。
     * @example `ALIYUN`
     */
    "VendorName"?: string;
    /**
     * 制作镜像。默认**false**，取值：
     * - **false**：否
     * - **true**：是
     * @example `false`
     */
    "OnlyImage"?: boolean;
    /**
     * 代理集群名。
     * @example `proxy_test`
     */
    "ProxyCluster"?: string;
}
