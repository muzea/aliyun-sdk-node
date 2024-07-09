export interface UpdateServiceVersionRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名字。如何查看服务名称，请参见[ListServices ](~~412109~~)。
     * @example `echo`
     */
    "ServiceName": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 服务要切换的目标版本，INT类型，取值需要大于0且小于服务当前的版本。
         * @example `1`
         */
        Version: number;
    };
}
