export interface ListAppServicesPageRequest {
    /**
     * 应用ID。
     * @example `6dcc8c9e-d3da-478a-a066-86dcf820****`
     */
    "AppId": string;
    /**
     * 服务类型。取值说明如下：
     * - **dubbo**
     * - **springCloud**
     * @example `springCloud`
     */
    "ServiceType": string;
    /**
     * 列表页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页码大小。取值范围\[0, 9999]。
     * @example `9999`
     */
    "PageSize"?: number;
}
