export interface GetOpaClusterImageListResponse {
    /**
     * 镜像信息列表。
     */
    Data: {
        /**
         * 镜像名称。
         * @example `opa-test`
         */
        ImageName: string;
    }[];
    /**
     * 当前页显示的镜像数量。
     * @example `1`
     */
    Count: number;
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
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
     * @example `0D02F593-2050-5F5D-8C98-D965FF1B461D`
     */
    RequestId: string;
}
