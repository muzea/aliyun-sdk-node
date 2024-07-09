export interface UpdateABMetricGroupRequest {
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 指标组名称。
         * @example `visits`
         */
        Name: string;
        /**
         * 场景ID，可通过接口[ListScenes](~~2402581~~)获取。
         * @example `1`
         */
        SceneId: string;
        /**
         * 指标组描述。
         * @example `访问量相关指标`
         */
        Description: string;
        /**
         * AB实验指标ID列表，逗号分隔。
         * @example `1,2`
         */
        ABMetricIds: string;
        /**
         * 实例ID，可从接口[ListInstances](~~2411819~~)获取。
         * @example `pairec-cn-test1`
         */
        InstanceId: string;
        /**
         * 是否为实时指标组。
         * @example `false`
         */
        Realtime: boolean;
    };
    /**
     * 指标组ID。
     * @example `1`
     */
    "ABMetricGroupId": string;
}
