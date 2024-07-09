export interface ListHoneypotPresetRequest {
    /**
     * 蜜罐镜像名称。
     * @example `ruoyi`
     */
    "HoneypotImageName"?: string;
    /**
     * 蜜罐模板自定义名称。
     * @example `mx-rouyi`
     */
    "PresetName"?: string;
    /**
     * 蜜罐管理节点名称。
     * @example `Node1`
     */
    "NodeName"?: string;
    /**
     * 蜜罐管理节点唯一ID。
     * @example `d892b4fe-af0d-4486-ab2a-8a518045****`
     */
    "NodeId"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，pagesize参数值为空时，将默认返回20条数据。
     * >建议pagesize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
}
