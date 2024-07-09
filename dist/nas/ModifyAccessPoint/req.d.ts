export interface ModifyAccessPointRequest {
    /**
     * 文件系统ID。
     * @example `1ca404****`
     */
    "FileSystemId": string;
    /**
     * 接入点ID。
     * @example `ap-ie15yd****`
     */
    "AccessPointId": string;
    /**
     * 接入点名称。
     * @example `test`
     */
    "AccessPointName"?: string;
    /**
     * 权限组名称。
     * 当目标文件系统为通用型NAS，此参数必填。
     * 默认权限组：DEFAULT_VPC_GROUP_NAME（专有网络默认权限组）。
     * @example `DEFAULT_VPC_GROUP_NAME`
     */
    "AccessGroup"?: string;
    /**
     * 是否启用RAM策略。
     * 取值：
     * - true：开启
     * - false（默认值）：不开启
     * > 启用接入点RAM策略以后，缺省禁止所有RAM账号使用接入点挂载和访问数据，您需要为账号进行授权开放对应访问权限，并通过接入点进行挂载访问。禁用后，接入点允许匿名挂载。
     * @example `false`
     */
    "EnabledRam"?: boolean;
}
