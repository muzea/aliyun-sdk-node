export interface InsertApplicationResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `The application name test-hsy-C5039-paas-6 had been created successfully.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `4264F69C-686C-4107-B493-0599C8xxxxxx`
     */
    RequestId: string;
    /**
     * 应用创建成功后返回的应用对象。
     */
    ApplicationInfo: {
        /**
         * 变更流程ID。
         * @example `d0cf569e-dce3-4efb-****-08b70021****`
         */
        ChangeOrderId: string;
        /**
         * 应用名称。
         * @example `hello-edas-test-1`
         */
        AppName: string;
        /**
         * 该应用拥有者，即应用创建者。
         * @example `249763358688********`
         */
        Owner: string;
        /**
         * 是否为Docker应用，取值如下：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        Dockerize: boolean;
        /**
         * 地域名称。
         * @example `cn-hangzhou`
         */
        RegionName: string;
        /**
         * 应用ID，EDAS应用的唯一标识。
         * @example `6c733bcd-6efb-47a1-8226-cf722c******`
         */
        AppId: string;
        /**
         * 应用拥有者的USER_ID。
         * @example `tdy218@1362469756xxxxxx`
         */
        UserId: string;
        /**
         * 创建成功的应用默认端口号8080。可以使用UpdateContainerConfiguration接口修改，请参见[UpdateContainerConfiguration](~~149403~~)。
         * @example `8080`
         */
        Port: number;
    };
}
