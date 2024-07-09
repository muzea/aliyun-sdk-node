export interface ListHoneypotPresetResponse {
    /**
     * 蜜罐模板列表。
     */
    List: {
        /**
         * 蜜罐镜像名称。
         * @example `metabase`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐模板自定义名称。
         * @example `WebMin-online`
         */
        PresetName: string;
        /**
         * 蜜罐模板唯一ID。
         * @example `3cc04a47-7229-418c-8101-f10a2887****`
         */
        HoneypotPresetId: string;
        /**
         * 管理节点唯一ID。
         * @example `c94eff5b-ea48-4805-8b7f-e04d3509****`
         */
        NodeId: string;
        /**
         * 蜜罐管理节点名称。
         * @example `node1`
         */
        ControlNodeName: string;
        /**
         * 蜜罐镜像展示名称。
         * @example `Metabase`
         */
        HoneypotImageDisplayName: string;
        /**
         * 模板类型。取值：
         * -  **TEMP**：自动生成
         * -  **CUSTOM**：自定义
         * -  **DEFAULT**：默认模板
         * @example `CUSTOM`
         */
        PresetType: string;
    }[];
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的蜜罐模板数量。默认值为20，表示每页显示20条蜜罐模板数据。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的蜜罐模板数据的总数量。
         * @example `55`
         */
        TotalCount: number;
        /**
         * 当前页面显示的蜜罐模板信息的数量。
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
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `0C656B33-0D6B-5953-A26A-D766BD75B44A`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
