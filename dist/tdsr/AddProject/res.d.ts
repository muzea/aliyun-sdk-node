export interface AddProjectResponse {
    /**
     * 请求ID，与入参requestId对应
     * @example `344794c32937474a9c59eb130936****`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `success`
     */
    Message: string;
    /**
     * 项目ID
     * @example `1234****`
     */
    Id: string;
}
