export interface GenerateMergedTableRequest {
    /**
     * 目标版本规格（用于独享型特殊限制校验）。
     * 默认：opensearch.share.common
     * 参考：Quota 的 spec
     * @example `"opensearch.share.common"`
     */
    "spec"?: string;
    "body"?: any;
}
