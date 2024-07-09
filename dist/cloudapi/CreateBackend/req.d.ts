export interface CreateBackendRequest {
    /**
     * 后端服务名称
     * @example `testBackendService`
     */
    "BackendName": string;
    /**
     * 后端服务类型，可选值有`HTTP，VPC，FC_EVENT，FC_HTTP，OSS，MOCK`
     * @example `HTTP`
     */
    "BackendType": string;
    /**
     * 描述信息
     * @example `HTTP后端`
     */
    "Description"?: string;
    /**
     * 是否服务关联角色
     * @example `true`
     */
    "CreateEventBridgeServiceLinkedRole"?: boolean;
    /**
     * 创建服务关联角色
     */
    "CreateSlr"?: boolean;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签的key
         * @example `key`
         */
        Key: string;
        /**
         * 标签的值
         * @example `123`
         */
        Value: string;
    }[];
}
