export interface CreateProjectResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 请求是否成功，取值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 创建成功的DataWorks工作空间的ID。
     * @example `466230`
     */
    Data: number;
}
