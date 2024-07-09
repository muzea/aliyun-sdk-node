export interface CreateTopicResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 请求的ID。
     * @example `9C0F207C-77A6-43E5-991C-9D98510A****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
