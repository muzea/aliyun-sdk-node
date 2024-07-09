export interface UpgradeAddonReleaseResponse {
    /**
     * Id of the request
     * @example `27E653FA-5958-45BE-8AA9-14D884DC****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求参数错误时返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回消息。
     * @example `success`
     */
    Data: string;
}
