export interface CreateNamespaceResponse {
    /**
     * Id of the request。
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108`
     */
    RequestId: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息，仅错误时返回错误信息。
     * @example `namespace=test3 is existed, noting update`
     */
    Message: string;
    /**
     * 创建应用是否成功。取值如下：
     * - **true**：创建应用成功。
     * - **false**：创建应用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 命名空间信息。
     */
    Data: {
        /**
         * 命名空间唯一标识。
         * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
         */
        NamespaceUid: string;
    };
}
