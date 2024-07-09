export interface DeletePtsSceneResponse {
    /**
     * 错误提示信息，若成功则不返回任何数据。
     * @example `创建或修改场景入参必须是实体类Scene的JSON串`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A3ED870E-C3BF-44F4-B460-A30785E0256B`
     */
    RequestId: string;
    /**
     * HTTP状态码，成功则不返回任何数据。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 系统状态码，成功则不返回任何数据。
     * @example `4001`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功。
     * - false：失败。
     * @example `false`
     */
    Success: boolean;
}
