export interface ListDelegatedAdministratorsRequest {
    /**
     * 可信服务的标识。
     * 具体信息，请参见[支持的可信服务](~~208133~~)中的`可信服务标识`列。
     * @example `cloudfw.aliyuncs.com`
     */
    "ServicePrincipal"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
