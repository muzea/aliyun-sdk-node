export interface CreateApplicationResponse {
    /**
     * 创建成功生成的应用ID，是用户边缘应用服务的唯一标识。
     * @example `d0639abf-789a-4527-b420-031d2cd9ad9b`
     */
    AppId: string;
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
}
