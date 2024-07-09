export interface CreateRumAppResponse {
    /**
     * Id of the request
     * @example `1A474FF8-7861-4D00-81B5-5BC3DA4E****`
     */
    RequestId: string;
    /**
     * 接口状态码：2XX：成功                                 3XX：重定向                                 4XX：请求错误                                 5XX：服务器错误
     * @example `200`
     */
    Code: number;
    /**
     * 是否成功发起调用：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误提示信息。
     * @example `应用已存在。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 创建成功时，返回应用id和上报域名，用英文逗号隔开。
     * @example `ggxxxnjuz@xxxx,xxxxxx-default-cn.rum.aliyuncs.com`
     */
    Data: {
        /**
         * 应用ID。
         * @example `avccccxxxx@24cxxxxbf384dc6`
         */
        Pid: string;
        /**
         * 应用数据的上报endpoint。
         * @example `xxxxxxxx-default-cn.rum.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * SDK域名。
         * @example `bxxxxxxx-sdk.rum.aliyuncs.com/v2/browser-sdk.js`
         */
        CdnDomain: string;
    };
    /**
     * 资源组 ID。
     * @example `rg-acfmxyexli2****`
     */
    ResourceGroupId: string;
}
