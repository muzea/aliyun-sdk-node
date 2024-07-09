export interface ModifyProductRequest {
    /**
     * 项目ID。
     * @example `1234`
     */
    "ProductId": string;
    /**
     * 项目名称。取值范围：1～30字符，字符类型：包含中文、英文大小写、数字、下划线（_）。
     * @example `我的工作空间`
     */
    "Name": string;
    /**
     * 项目的简要描述。
     * @example `test`
     */
    "Description"?: string;
}
