export interface CreateSubCrowdRequest {
    /**
     * 人群ID，可通过接口ListCrowds获取。
     * @example `3`
     */
    "CrowdId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 人群来源。
         * ● ManualInput-手工输入
         * ● UploadFile-文件上传
         * @example `ManualInput`
         */
        Source: string;
        /**
         * 人群中包含的用户，多个用户间用逗号隔开。
         * @example `user1,user2,user3`
         */
        Users: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-test1`
         */
        InstanceId: string;
    };
}
