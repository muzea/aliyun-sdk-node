export interface CreateUploadPolicyRequest {
    /**
     * 上传类型，值为：scene（场景）、subScene（子场景）、hotspot（后处理相关）
     * @example `scene`
     */
    "Type": string;
    /**
     * 不同类型对应的参数
     * @example `{}`
     */
    "Option": string;
}
