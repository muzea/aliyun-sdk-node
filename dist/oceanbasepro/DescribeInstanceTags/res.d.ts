export interface DescribeInstanceTagsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 标签列表。
     */
    TagResources: {
        /**
         * 资源 ID。
         * @example `ob317v4uif****`
         */
        ResourceId: string;
        /**
         * 资源类型。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 资源标签。
         * @example `[{"Key": "xxx", "Value", "xxx"},{}]`
         */
        Tag: string;
    }[];
}
