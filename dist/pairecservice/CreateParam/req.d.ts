export interface CreateParamRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 场景ID，可通过接口ListScenes获取。
         * @example `4`
         */
        SceneId: string;
        /**
         * 参数名称。
         * @example `home`
         */
        Name: string;
        /**
         * 参数值。
         * @example `house`
         */
        Value: string;
        /**
         * 参数所属的环境。
         * ● Daily-日常环境
         * ● Pre-预发环境
         * ● Prod-生产环境
         * @example `Daily`
         */
        Environment: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
    };
}
