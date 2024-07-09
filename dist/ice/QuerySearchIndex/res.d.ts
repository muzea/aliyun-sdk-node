export interface QuerySearchIndexResponse {
    /**
     * 请求ID。
     * @example `4E84BE44-58A7-****-****-FBEBEA16EF94`
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - true： 成功
     * - false：失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 搜索库名称。
     * @example `test1`
     */
    SearchLibName: string;
    /**
     * 索引类别。取值：
     * - mm：大模型。
     * - face：人脸。
     * - aiLabel：智能标签。
     * @example `mm`
     */
    IndexType: string;
    /**
     * 索引状态。取值：
     * - Active：激活。
     * - Deactive：失效。
     * @example `Active`
     */
    IndexStatus: string;
    /**
     * 媒资总数。
     * @example `12`
     */
    MediaTotal: string;
}
