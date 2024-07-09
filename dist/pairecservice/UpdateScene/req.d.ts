export interface UpdateSceneRequest {
    /**
     * 场景ID，可通过接口ListScenes获取。
     * @example `3`
     */
    "SceneId"?: string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 场景名称。
         * @example `scene1`
         */
        Name: string;
        /**
         * 场景描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
        /**
         * 流量列表。
         */
        Flows: {
            /**
             * 流量名称。
             * @example `流量1`
             */
            FlowName: string;
            /**
             * 流量编码。
             * @example `liuliang1`
             */
            FlowCode: string;
        }[];
    };
}
