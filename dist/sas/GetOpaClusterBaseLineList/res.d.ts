export interface GetOpaClusterBaseLineListResponse {
    /**
     * 基线检查信息列表。
     */
    Data: {
        /**
         * 基线主项的分类key。
         * @example `identification`
         */
        ClassKey: string;
        /**
         * 基线主项的名称key。
         * @example `identification`
         */
        NameKey: string;
        /**
         * 基线子项的名称key。
         * @example `duplicate_uid`
         */
        ItemKey: string;
        /**
         * 基线主项的别名。
         * @example `Make sure there are no duplicate usernames or UIDs`
         */
        Alias: string;
    }[];
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
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
     * @example `C2F2A020-1CAB-5F52-8CAF-B2ACDDFAC247`
     */
    RequestId: string;
}
