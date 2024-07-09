export interface GetScenePreviewResourceResponse {
    /**
     * Id of the request
     * @example `A8CD0AD9-8A92-455A-A984-A7E4B76*****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `0：成功，其他：失败`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true/false`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `xxxxx`
     */
    Message: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 引擎版本
         * @example `1.0`
         */
        Version: string;
        /**
         * 场景名称
         * @example `场景-Example`
         */
        Name: string;
        /**
         * 模型资源
         */
        ResourceDirectory: {
            /**
             * 模型所在路径
             * @example `A.e.YKPYuuYuituy****`
             */
            RootPath: string;
            /**
             * 小地图配置文件
             * @example `orthomap/orthomap.json`
             */
            OrthomapConfig: string;
            /**
             * 模型配置文件
             * @example `config.json`
             */
            ModelConfig: string;
            /**
             * 热点文件路径
             * @example `hotspotTag.json`
             */
            HotspotTagConfig: string;
        };
    };
}
