export interface GetOpaClusterLabelListResponse {
    /**
     * 容器标签信息集合。
     */
    Data: {
        /**
         * 容器标签名称。
         * @example `test`
         */
        TagName: string;
    }[];
    /**
     * 当前页显示的数据条数。
     * @example `2`
     */
    Count: number;
    /**
     * 接口调用的结果状态。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码。**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
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
     * @example `95D35EB3-1F8E-5E07-A68E-BE018C9B80CB`
     */
    RequestId: string;
}
