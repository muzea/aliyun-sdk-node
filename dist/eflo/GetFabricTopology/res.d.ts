export interface GetFabricTopologyResponse {
    /**
     * Code码
     * @example `0`
     */
    Code: number;
    /**
     * 响应信息
     * @example `success`
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
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 灵骏网段ID
         * @example `vpd-fuli****`
         */
        VpdId: string;
        VpcId: string;
        ClusterId: string;
        /**
         * 网卡拓扑信息
         */
        TopoInfo: {
            /**
             * 层级资源类型
             * @example `core`
             */
            LayerType: string;
            /**
             * 资源名称
             * @example `core-1`
             */
            LayerName: string;
            /**
             * 下一层级
             */
            NextLayer: any[];
        }[];
    };
}
