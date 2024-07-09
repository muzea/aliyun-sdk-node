export interface DescribeInstancesRequest {
    /**
     * 商品类型：
     * APP-应用类
     * SERVICE-服务类
     * MIRROR-镜像类
     * DOWNLOAD-下载类
     * API_SERVICE-API类
     * ROS-资源编排类
     * DOCKER-容器类
     * IOT-IOT类
     * @example `1`
     */
    "ProductType"?: string;
    /**
     * 分页参数，每页数量
     * @example `10`
     */
    "PageNumber": number;
    /**
     * 分页参数，页数
     * @example `1`
     */
    "PageSize": number;
    /**
     * 指定商品code, 如有多个，用 , 分隔
     * @example `cmgj000112,cmgj000113`
     */
    "Codes"?: string;
    /**
     * 排除商品code，与指定商品code不能同时传， 如有多个，用 , 分隔
     * @example `cmgj000114,cmgj000115`
     */
    "ExceptCodes"?: string;
}
