export interface UntagResourcesRequest {
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 资源的类型。
         * - project：项目。
         * - logstore：日志库。
         * - dashboard：仪表盘。
         * - machinegroup：机器组。
         * - logtailconfig：logtail配置。
         * @example `project`
         */
        resourceType: string;
        /**
         * 资源的ID列表，一次只允许解绑单个资源的标签，只允许填入单个资源ID。
         * @example `ali-test-project`
         */
        resourceId: string[];
        /**
         * 是否解绑所有标签，默认为false。
         * - false：仅解绑tags列表中的标签项。
         * - true：解绑资源上绑定的所有标签。
         * @example `false`
         */
        all: boolean;
        /**
         * 标签键的列表。当all为false时，仅解绑列表中的标签。
         */
        tags: string[];
    };
}
