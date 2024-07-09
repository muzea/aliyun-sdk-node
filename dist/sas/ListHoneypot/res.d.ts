export interface ListHoneypotResponse {
    /**
     * 蜜罐数据列表。
     */
    List: {
        /**
         * 蜜罐ID。
         * @example `76c2a1c72ef259777d96d55a7834e5f5d98f85666c49f76ad9caa447d8b7****`
         */
        HoneypotId: string;
        /**
         * 蜜罐名称。
         * @example `mx-rouyi`
         */
        HoneypotName: string;
        /**
         * 蜜罐管理节点名称。
         * @example `0804-pre`
         */
        ControlNodeName: string;
        /**
         * 蜜罐镜像名称。
         * @example `tcp_proxy`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐自定义参数ID。
         * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
         */
        PresetId: string;
        /**
         * 蜜罐状态。
         */
        State: string[];
        /**
         * 蜜罐镜像显示名称。
         * @example `MongoDB`
         */
        HoneypotImageDisplayName: string;
        /**
         * 管理节点ID。
         * @example `c94eff5b-ea48-4805-8b7f-e04d3509b117`
         */
        NodeId: string;
        /**
         * 蜜罐镜像ID。
         * @example `sha256:eca5ced3757e46c24701e9ced4e652f2d730262d5685a4e001da22c4fb418fd4`
         */
        HoneypotImageId: string;
    }[];
    /**
     * 分页信息。
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
         * @example `69`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `2`
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
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C80AFF1F-CC20-502C-A4D4-F5433E529B69`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
