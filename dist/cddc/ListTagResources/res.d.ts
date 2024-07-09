export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `2853CAA0-D7A2-5CAB-B3A8-BDE2994F320C`
     */
    RequestId: string;
    /**
     * 主机和标签的信息。
     */
    TagResources: {
        /**
         * 标签的值。
         * @example `demovalue`
         */
        TagValue: string;
        /**
         * 资源类型。
         * 返回值固定为ALIYUN::CDDC::DEDICATEDHOST，即阿里云专属集群主机。
         * @example `ALIYUN::CDDC::DEDICATEDHOST`
         */
        ResourceType: string;
        /**
         * 主机ID。
         * @example `ch-t4n4dcdvu6840****`
         */
        ResourceId: string;
        /**
         * 标签的键。
         * @example `demokey`
         */
        TagKey: string;
    }[];
}
