export interface ListServiceVersionsResponse {
    /**
     * 请求ID。
     * @example `E089D584-B6F4-50C4-9902-DA2295B7****`
     */
    RequestId: string;
    /**
     * 返回查询的历史版本的当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回每页显示的历史版本数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总计数量。
     * @example `166`
     */
    TotalCount: number;
    /**
     * 版本信息列表。
     */
    Versions: {
        /**
         * 版本创建UTC时间。
         * @example `2022-08-29T22:02:14Z`
         */
        BuildTime: string;
        /**
         * 镜像可用性。可能值：
         * - true：可用。
         * - false：不可用。
         * - unknown：未知。
         * @example `true`
         */
        ImageAvailable: string;
        /**
         * 镜像ID。
         * @example `4`
         */
        ImageId: number;
        /**
         * 服务的摘要信息。
         * @example `Service is Running`
         */
        Message: string;
        /**
         * eas服务是否启用，可能值：
         * - true：启用。
         * - false：未启用。
         * - unknown：未知。
         * @example `true`
         */
        ServiceRunnable: string;
        /**
         * 服务部署配置。只有自定义镜像部署才会返回此字段。
         * @example `{
            "metadata": {
                "cpu": 1,
                "instance": 1,
                "memory": 1024
            },
            "name": "echo"
        }`
         */
        ServiceConfig: string;
    }[];
}
