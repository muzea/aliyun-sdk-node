export interface ChangeResourceGroupResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C5CA600C-7D5A-45B5-B6DB-44FAC2C****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: number;
    /**
     * 新的资源组ID，可在资源组控制台查看可用资源组。
     * @example `rg-ac***********7q`
     */
    NewResourceGroupId: string;
}
