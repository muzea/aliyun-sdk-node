export interface ListInstancesByNcdResponse {
    /**
     * 响应码
     * @example `0`
     */
    Code: number;
    /**
     * 返回信息
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `AC8C713A-A9F4-5984-A5E1-76496DF35153`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 节点间最大通信距离
         * @example `3`
         */
        MaxNcd: number;
        /**
         * 实例类型
         * @example `lni`
         */
        InstanceType: string;
        /**
         * 源实例ID
         * @example `lni-1234****`
         */
        SourceInstanceId: string;
        /**
         * 与源实例ID间网络通信距离不超过maxNcd的实例集合
         */
        InstanceInfos: {
            /**
             * 实例ID
             * @example `lni-1235****`
             */
            InstanceId: string;
            /**
             * 网络通信距离
             * @example `2`
             */
            Ncd: number;
        }[];
    };
}
