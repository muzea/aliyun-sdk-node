export interface ListOpaClusterStrategyNewResponse {
    /**
     * 策略列表。
     */
    List: {
        /**
         * 策略ID。
         * @example `1`
         */
        StrategyId: number;
        /**
         * 策略名称。
         * @example `auto-strategy-vohuiq`
         */
        StrategyName: string;
        /**
         * 描述。
         * @example `Config the Event Audit policys`
         */
        Description: string;
        /**
         * 该规则是否支持未扫描镜像。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `true`
         */
        UnScanedImage: boolean;
        /**
         * 该规则是否支持互联网恶意镜像。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `true`
         */
        MaliciousImage: boolean;
        /**
         * 策略执行的动作。取值：
         * - **1**：告警
         * - **2**：拦截
         * - **3**：放行
         * @example `1`
         */
        Action: number;
        /**
         * 策略生效的集群数。
         * @example `1`
         */
        ClusterCount: number;
        /**
         * 策略生效的集群列表。
         */
        ClusterIdList: string[];
        /**
         * 镜像名称。
         */
        ImageName: string[];
        /**
         * 容器标签。
         */
        Label: string[];
    }[];
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `45`
         */
        TotalCount: number;
        /**
         * 当前页显示的资产的条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 导出结果提示信息。固定值：**success**。表示导出成功。
     * @example `success`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7DFD947C-9172-5129-B783-DD14C55191D2`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
