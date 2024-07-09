export interface UpdateLayerRequest {
    /**
     * 层ID，可通过接口ListLayers获取。
     * @example `3`
     */
    "LayerId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-test1`
         */
        InstanceId: string;
        /**
         * 层名称。
         * @example `layer1`
         */
        Name: string;
        /**
         * 层描述。
         * @example `This is a test.`
         */
        Description: string;
    };
}
