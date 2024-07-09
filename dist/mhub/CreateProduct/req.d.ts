export interface CreateProductRequest {
    /**
     * 设置项目的名称。取值范围：1～30字符，字符类型：包含中文、英文大小写、数字、下划线（_）。
     * @example `我的项目名称`
     */
    "Name": string;
    /**
     * 简要描述项目的用途。
     * @example `AAA`
     */
    "Description"?: string;
}
