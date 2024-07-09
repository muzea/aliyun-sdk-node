export interface UpdateParamRequest {
    /**
     * 参数ID，可通过接口ListParams获取。
     * @example `3`
     */
    "ParamId"?: string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 参数值。
         * @example `house`
         */
        Value: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
    };
}
