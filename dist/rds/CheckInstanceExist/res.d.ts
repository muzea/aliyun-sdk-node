export interface CheckInstanceExistResponse {
    /**
     * 目标实例是否存在。返回值：
     * * **true**：存在
     * * **false**：不存在
     * @example `true`
     */
    IsExistInstance: boolean;
    /**
     * 请求ID。
     * @example `11439B36-F703-49EB-8656-D3C87BE28B57`
     */
    RequestId: string;
}
