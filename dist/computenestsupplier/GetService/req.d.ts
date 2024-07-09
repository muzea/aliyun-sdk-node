export interface GetServiceRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 服务ID。
     * 您可以通过调用[ListServices - 查询服务信息](~~2264368~~)获取服务ID。
     * @example `service-f8469d2d14eb40af****`
     */
    "ServiceId": string;
    /**
     * 服务版本。
     * 您可以通过调用[ListServices - 查询服务信息](~~2264368~~)获取服务版本。
     * @example `1`
     */
    "ServiceVersion"?: string;
    /**
     * 返回详细信息。
     */
    "ShowDetail"?: string[];
    /**
     * 是否要过滤AliUid。
     * 取值：
     * - true：过滤AliUid。
     * - false：不过滤AliUid。
     * @example `false`
     */
    "FilterAliUid"?: boolean;
    /**
     * 服务共享类型。
     * 取值：
     * - SharedAccount（默认值）：普通共享类型。
     * - Resell：分销共享类型。
     * @example `SharedAccount`
     */
    "SharedAccountType"?: string;
}
