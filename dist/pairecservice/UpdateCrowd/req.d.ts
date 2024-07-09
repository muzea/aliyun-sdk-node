export interface UpdateCrowdRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 人群名称。
         * @example `xx人群`
         */
        Name: string;
        /**
         * 人群描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-test1`
         */
        InstanceId: string;
    };
    /**
     * 人群ID，可通过接口ListCrowds获取。
     * @example `3`
     */
    "CrowdId": string;
}
