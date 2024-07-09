export interface CreateCrowdRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
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
         * 人群标签。
         * @example `os=android`
         */
        Label: string;
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
    };
}
