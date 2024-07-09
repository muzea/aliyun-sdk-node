export interface UpdateInstanceNameRequest {
    /**
     * 实例id。
     * @example `hgpostcn-cn-zpr30pupt004`
     */
    "instanceId"?: string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 新实例名称(2-64个字符，一个中文/字母算一个字符)。
         * @example `new_name`
         */
        instanceName: string;
    };
}
