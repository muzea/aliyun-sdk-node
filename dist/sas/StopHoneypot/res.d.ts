export interface StopHoneypotResponse {
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 蜜罐ID。
         * @example `9bf8cd373112263d4bc102fc5dba9d9f812ee05d4d35c487d330d52e937f****`
         */
        HoneypotId: string;
        /**
         * 蜜罐名称。
         * @example `hyl-phpmya****`
         */
        HoneypotName: string;
        /**
         * 蜜罐管理节点名称。
         * @example `managerNoden****`
         */
        ControlNodeName: string;
        /**
         * 蜜罐镜像名称。
         * @example `metabase`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐自定义参数ID
         * @example `868a7579-00b5-4a74-999d-8bd3f411****`
         */
        PresetId: string;
        /**
         * 蜜罐状态列表。
         */
        State: string[];
        /**
         * 蜜罐镜像显示名称。
         * @example `RuoYi`
         */
        HoneypotImageDisplayName: string;
        /**
         * 管理节点唯一ID。
         * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
         */
        NodeId: string;
    };
    /**
     * 是否调用成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
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
     * @example `D65AADFC-1D20-5A6A-8F6A-9FA53C*****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
