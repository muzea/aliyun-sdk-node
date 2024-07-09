export interface ListInstancesRequest {
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 资源组ID。
         * @example `rg-acfmvscak73zmby`
         */
        resourceGroupId: string;
        /**
         * 实例标签。
         */
        tag: {
            /**
             * 标签键。
             * @example `mytag`
             */
            key: string;
            /**
             * 标签值。
             * @example `value`
             */
            value: string;
        }[];
        /**
         * 云监控实例类型。取值：
         * - standard
         * - follower
         * - mc-acceleration
         * - warehouse
         * - high-memory
         * > 这是云监控
         * @example `standard`
         */
        cmsInstanceType: string;
    };
}
