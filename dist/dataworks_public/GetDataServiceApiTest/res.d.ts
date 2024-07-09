export interface GetDataServiceApiTestResponse {
    /**
     * 请求Id
     * @example `adssdsewe`
     */
    RequestId: string;
    /**
     * 返回对象
     */
    Data: {
        /**
         * 测试API Id
         * @example `12343`
         */
        ApiId: number;
        /**
         * 测试API请求参数
         * @example `{"name":"test"}`
         */
        ParamMap: string;
        /**
         *
         * 测试API返回code，如果未完成，该数据为空
         * @example `0`
         */
        RetCode: number;
        /**
         * 返回数据
         * @example `{"id":2}`
         */
        RetResult: string;
        /**
         * Debug信息
         * @example `[<span style=\"color: #92D581;\">INFO</span>] [16:15:13.240] resource group is 498774069027041[<span style=\"color: #92D581;\">INFO</span>]`
         */
        DebugInfo: string;
        /**
         * 耗时
         * @example `10`
         */
        CostTime: string;
        /**
         * 节点Debug信息
         * @example `[<span style=\"color: #92D581;\">INFO</span>] [16:15:13.240] resource group is 498774069027041[<span style=\"color: #92D581;\">INFO</span>]`
         */
        NodesDebugInfo: string;
        /**
         * 任务是否已经完成，包含：RUNNING，FINISHED
         * @example `FINISHED`
         */
        Status: string;
    };
}
