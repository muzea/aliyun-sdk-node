export interface CreateLayerRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实验室ID，可通过接口ListLaboratories获取。
         * @example `3`
         */
        LaboratoryId: string;
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
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
    };
}
