export interface ListTagResourcesResponse {
    /**
     * 请求id
     * @example `8F208B6D-4C42-5FD3-B6BE-E826E92A44DD`
     */
    RequestId: string;
    TagResources: {
        /**
         * 标签资源。
         */
        TagResource: {
            /**
             * 标签键
             * @example `env`
             */
            TagKey: string;
            /**
             * 标签值
             * @example `dev
            `
             */
            TagValue: string;
            /**
             * 资源ID
             * @example `i15azeddnvf7uhw2oij57o0`
             */
            ResourceId: string;
            /**
             * 资源类型
             * @example `Cluster
            `
             */
            ResourceType: string;
        }[];
    };
    /**
     * 下一页的NextToken，请求下一页时带上此返回值
     * @example `AAAAAdQ3Z+oPlg49gsr2y8jb6wY=`
     */
    NextToken: string;
}
