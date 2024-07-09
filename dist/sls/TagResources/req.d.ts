export interface TagResourcesRequest {
    /**
     * 请求结构体。
     */
    "body": {
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
         * 资源的id列表，只允许填入1个资源，只允许为单个资源绑定标签。
         */
        resourceId: string[];
        /**
         * 标签列表。一次最多支持20个标签键值对。
         */
        tags: {
            /**
             * 标签的键。格式要求如下：
             * - 长度在` [1,128] `之间
             * - 不允许包含` "http://"`或者` "https://" `字样
             * - 不允许以 `"acs:" `或者` "aliyun" `开头
             * @example `key1`
             */
            key: string;
            /**
             * 标签的值。格式要求如下：
             * - 长度在` [1,128] `之间
             * - 不允许包含` "http://" `或者` "https://" `字样
             * @example `value1`
             */
            value: string;
        }[];
    };
}
