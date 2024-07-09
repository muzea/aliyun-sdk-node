export interface DescribeComponentsRequest {
    /**
     * 应用ID。
     * @example `d700e680-aa4d-4ec1-afc2-6566b5ff****`
     */
    "AppId"?: string;
    /**
     * 支持的组件类型。取值说明如下：
     * - **TOMCAT**
     * - **JDK**
     * @example `TOMCAT`
     */
    "Type": string;
}
