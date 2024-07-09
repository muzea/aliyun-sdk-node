export interface UpdateServiceInstanceRequest {
    /**
     * 服务所在区域。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名字。如何查看服务名称，请参见[ListServices](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 服务实例的名字。如何查看实例名称，请参见[ListServiceInstances](~~412108~~)。
     * @example `foo-69xxxx4f4-5w9r9`
     */
    "InstanceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 是否隔离。取值如下：
         * - true：表示隔离服务实例。
         * - false：表示不隔离服务实例。
         * @example `true`
         */
        Isolate: boolean;
    };
}
